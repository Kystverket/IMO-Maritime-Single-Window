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

  modalRef: NgbModalRef;

  uploading: boolean;

  FileToUpload: FormData;

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
      const formData = new FormData();
      formData.append('uploadFile', file, file.name);
      this.FileToUpload = formData;
    }
  }

  saveShipStoresFile() {
    this.uploading = true;
    this.fileService.uploadShipStores(this.FileToUpload, this.portCallId)
    .finally(() => {
      this.uploading = false;
      this.modalRef.close();
    })
    .subscribe(res => {
      if (res.json() as boolean) {
        this.shipStoresWithErrors = res.json() as ShipStoresModel[];
        if (this.shipStoresWithErrors && this.shipStoresWithErrors.length > 0) {
          this.entriesHasErrors.emit(this.shipStoresWithErrors);
        }
      }
      this.saved.emit(false);
    });
  }

  savePaxFile() {
    this.uploading = true;
    this.fileService.uploadPaxFile(this.FileToUpload, this.portCallId)
      .finally(() => {
        this.uploading = false;
        this.modalRef.close();
      }).subscribe(res => {
        if (typeof res === 'boolean') {
        } else {
          this.personOnBoardListWithErrors = res.json() as PersonOnBoardModel[];
          if (this.personOnBoardListWithErrors && this.personOnBoardListWithErrors.length > 0) {
            this.entriesHasErrors.emit(this.personOnBoardListWithErrors);
          }
        }
        this.saved.emit(false);
      });
  }
  saveCrewFile() {
    this.uploading = true;
    this.fileService.uploadCrewFile(this.FileToUpload, this.portCallId)
    .finally(() => {
      this.uploading = false;
      this.modalRef.close();
    })
    .subscribe(res => {
      if (typeof res === 'boolean') {
      } else {
        this.personOnBoardListWithErrors = res.json() as PersonOnBoardModel[];
        if (this.personOnBoardListWithErrors && this.personOnBoardListWithErrors.length > 0) {
          this.entriesHasErrors.emit(this.personOnBoardListWithErrors);
        }
      }
      this.saved.emit(false);
    });
  }
  saveCrewPaxFile() {
    this.uploading = true;

    this.fileService.uploadCrewAndPax(this.FileToUpload, this.portCallId)
    .finally(() => {
      this.uploading = false;
      this.modalRef.close();
    })
    .subscribe(res => {
      if (typeof res === 'boolean') {
      } else {
        this.personOnBoardListWithErrors = res.json() as PersonOnBoardModel[];
        console.log(this.personOnBoardListWithErrors);
        const paxList = this.personOnBoardListWithErrors.filter(x => x.isPax);
        const crewList = this.personOnBoardListWithErrors.filter(x => !x.isPax);
        console.log('pax');
        console.log(paxList);
        console.log('crew');
        console.log(crewList);
        if (this.personOnBoardListWithErrors && this.personOnBoardListWithErrors.length > 0) {
          this.crewAndPaxErrors.emit(this.personOnBoardListWithErrors);
        }
      }
      this.saved.emit(false);
    });
  }
}
