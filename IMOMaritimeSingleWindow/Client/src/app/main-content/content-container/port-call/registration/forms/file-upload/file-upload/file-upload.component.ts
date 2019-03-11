import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { PersonOnBoardModel, ShipStoresModel } from 'app/shared/models/';
import { FileService } from 'app/shared/services/';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  @Input() portCallId: number;
  @Input() isPaxPage: boolean;
  @Input() isShipStores: boolean;
  shipStoresWithErrors: ShipStoresModel[];
  personOnBoardListWithErrors: PersonOnBoardModel[];

  @Output() saved: EventEmitter<any> = new EventEmitter();
  @Output() entriesHasErrors: EventEmitter<any[]> = new EventEmitter();
  @Output() crewAndPaxErrors: EventEmitter<any[]> = new EventEmitter();
  @Output() importSuccess: EventEmitter<boolean> = new EventEmitter();

  modalRef: NgbModalRef;
  uploading: boolean;
  FileToUpload: FormData;
  FileSelectedAndFileType = false;

  constructor(
    private fileService: FileService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
  }

  openUploadModal(content: any) {
    this.modalRef = this.modalService.open(content);
  }

  uploadFile(event: { target: { files: FileList; }; }) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file = fileList[0];
      const fileType = file.name.split('.').pop();

      if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || fileType === 'xlsx') {
        const formData = new FormData();
        formData.append('uploadFile', file, file.name);
        this.FileToUpload = formData;
        this.FileSelectedAndFileType = true;
        return;
      }
    }
    this.FileSelectedAndFileType = false;
    this.FileToUpload = null;
  }

  saveShipStoresFile() {
    if (this.FileToUpload == null) {
    } else {
      this.uploading = true;
      this.fileService.uploadShipStores(this.FileToUpload, this.portCallId)
        .finally(() => {
          this.uploading = false;
          this.modalRef.close();
        })
        .subscribe(res => {
          if (typeof res.json() === 'boolean') {
            this.importSuccess.emit(res.json());
          } else {
            this.shipStoresWithErrors = res.json() as ShipStoresModel[];
            if (this.shipStoresWithErrors && this.shipStoresWithErrors.length > 0) {
              this.entriesHasErrors.emit(this.shipStoresWithErrors);
            }
          }
          this.saved.emit(false);
        });
    }
  }

  savePaxFile() {
    if (this.FileToUpload == null) {
    } else {
    this.uploading = true;
      this.fileService.uploadPaxFile(this.FileToUpload, this.portCallId)
        .finally(() => {
          this.uploading = false;
          this.modalRef.close();
        }).subscribe(res => {
          if (typeof res.json() === 'boolean') {
            this.importSuccess.emit(res.json());
          } else {
            this.personOnBoardListWithErrors = res.json() as PersonOnBoardModel[];
            if (this.personOnBoardListWithErrors && this.personOnBoardListWithErrors.length > 0) {
              this.entriesHasErrors.emit(this.personOnBoardListWithErrors);
            }
          }
          this.saved.emit(false);
        });
    }
  }
  saveCrewFile() {
    if (this.FileToUpload == null) {
    } else {
      this.uploading = true;
      this.fileService.uploadCrewFile(this.FileToUpload, this.portCallId)
        .finally(() => {
          this.uploading = false;
          this.modalRef.close();
        })
        .subscribe(res => {
          if (typeof res.json() === 'boolean') {
            this.importSuccess.emit(res.json());
          } else {
            this.personOnBoardListWithErrors = res.json() as PersonOnBoardModel[];
            if (this.personOnBoardListWithErrors && this.personOnBoardListWithErrors.length > 0) {
              this.entriesHasErrors.emit(this.personOnBoardListWithErrors);
            }
          }
          this.saved.emit(false);
        });
    }
  }

  saveCrewPaxFile() {
    if (this.FileToUpload == null) {
    } else {
      this.uploading = true;

      this.fileService.uploadCrewAndPax(this.FileToUpload, this.portCallId)
        .finally(() => {
          this.uploading = false;
          this.modalRef.close();
        })
        .subscribe(res => {
          if (typeof res.json() === 'boolean') {
            this.importSuccess.emit(res.json());
          } else {
            this.personOnBoardListWithErrors = res.json() as PersonOnBoardModel[];
            const paxList = this.personOnBoardListWithErrors.filter(x => x.isPax);
            const crewList = this.personOnBoardListWithErrors.filter(x => !x.isPax);
            if (this.personOnBoardListWithErrors && this.personOnBoardListWithErrors.length > 0) {
              this.entriesHasErrors.emit(this.personOnBoardListWithErrors);
            }
          }
          this.saved.emit(false);
        });
    }
  }
}
