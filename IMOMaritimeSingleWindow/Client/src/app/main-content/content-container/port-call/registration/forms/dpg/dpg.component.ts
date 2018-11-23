import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActionButtonsComponent } from 'app/shared/components/action-buttons/action-buttons.component';
import { ConfirmationModalComponent } from 'app/shared/components/confirmation-modal/confirmation-modal.component';
import {
  DpgModel,
  DpgOnBoardModel,
  DpgTypeModel,
  MeasurementTypeModel
} from 'app/shared/models';
import { DpgService, FalShipStoresService } from 'app/shared/services';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  merge,
  switchMap,
  tap
} from 'rxjs/operators';
import { SEARCH_AMOUNTS } from '../../../../../../shared/constants/search-amounts';

@Component({
  selector: 'app-dpg',
  templateUrl: './dpg.component.html',
  styleUrls: ['./dpg.component.css'],
  providers: [DpgService]
})
export class DpgComponent implements OnInit {
  @Input()
  portCallId: number;
  @Input()
  dpgOnBoardList: DpgOnBoardModel[] = [];

  @ViewChild(NgForm)
  form: NgForm;

  dpgModel: DpgModel = new DpgModel();
  dpgTypes: DpgTypeModel[];
  selectedDpgType: DpgTypeModel = new DpgTypeModel();
  dpgOnBoardModel: DpgOnBoardModel = new DpgOnBoardModel();
  dpgSource: LocalDataSource;
  dpgSelectedStr: string;
  selectedDpg: any;
  searchResultDpg: any;
  validDpgModel = true;
  validMsg: string[] = [];
  measurementTypes: MeasurementTypeModel[] = [];
  selectedMeasurementType: any;
  measurementStr = 'Weight (Kg)';
  errorModalMsg = '';

  // Bools for GUI
  placedInContainer = false;
  dpgSelected = false;
  hasSelectedType = false;
  listIsPristine = true;
  isLoading: boolean;
  isViewing: boolean;
  isEditing: boolean;
  saving = false;
  saved = false;
  saveError = false;

  // Search
  showDropdown = true;
  resultsDropdown = SEARCH_AMOUNTS.DROPDOWN;
  resultsWithoutDropdown = SEARCH_AMOUNTS.WITHOUT_DROPDOWN;
  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () =>
    (this.searching = false)
  );

  constructor(
    private dpgService: DpgService,
    private shipStoresService: FalShipStoresService,
    private modalService: NgbModal,
  ) {
    this.dpgSource = new LocalDataSource(this.dpgOnBoardList);
  }

  // Table settings
  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
      position: 'right'
    },
    attr: {
      class: 'table table-striped'
    },
    editor: {
      config: {
        completer: {
          descriptionField: 'Search here'
        }
      }
    },
    noDataMessage: 'There are no DPGs in this list.',
    columns: {
      classification: {
        title: 'Classification'
      },
      unNr: {
        title: 'Un No/Name'
      },
      textualReference: {
        title: 'Name'
      },
      grossWeight: {
        title: 'Gross Weight/Volume'
      },
      netWeight: {
        title: 'Net Weight/Volume'
      },
      locationOnBoard: {
        title: 'Location on Board'
      },
      transportUnitIdentification: {
        title: 'Trans Unit ID'
      },
      placedInContainer: {
        title: 'Placed in Container',
        filter: false
      },
      delete: {
        title: 'Actions',
        type: 'custom',
        filter: false,
        sort: false,
        renderComponent: ActionButtonsComponent,
        onComponentInitFunction: instance => {
          instance.view.subscribe(row => {
            const sequenceNo = row.dpgOnBoardModel.sequenceNo;
            if (
              sequenceNo != null &&
              sequenceNo !== undefined &&
              sequenceNo >= 0
            ) {
              this.setEditOrViewDpg(sequenceNo, false);
            }
          });
          instance.edit.subscribe(row => {
            const sequenceNo = row.dpgOnBoardModel.sequenceNo;
            if (
              sequenceNo != null &&
              sequenceNo !== undefined &&
              sequenceNo >= 0
            ) {
              this.setEditOrViewDpg(sequenceNo, true);
            }
          });
          instance.delete.subscribe(row => {
            const sequenceNo = row.dpgOnBoardModel.sequenceNo;
            if (
              sequenceNo != null &&
              sequenceNo !== undefined &&
              sequenceNo >= 0
            ) {
              this.onDeleteConfirm(sequenceNo);
            }
          });
        }
      }
    }
  };

  ngOnInit() {
    this.isLoading = true;
    this.dpgService
      .getDpgTypes()
      .finally(() => {
        this.shipStoresService
          .getMeasurementTypeList()
          .finally(() => {
            this.filterMeasurementTypes();
            this.isLoading = false;
          })
          .subscribe(measurementTypes => {
            this.measurementTypes = measurementTypes;
          });
      })
      .subscribe(res => {
        this.dpgTypes = res;
      });

    // Making sure all submodels are defined
    if (
      this.dpgOnBoardModel.dpg == null ||
      this.dpgOnBoardModel.dpg === undefined
    ) {
      this.dpgOnBoardModel.dpg = new DpgModel();
    }

    if (
      this.dpgOnBoardModel.dpg.dpgType == null ||
      this.dpgOnBoardModel.dpg.dpgType === undefined
    ) {
      this.dpgOnBoardModel.dpg.dpgType = new DpgTypeModel();
    }
    // Check service once more if list is empty in case of poorly synched earlier.
    if (!this.dpgOnBoardList) {
      this.loadDataFromService();
    } else {
      this.setSequenceNo();
      this.reloadTable();
    }
  }

  // Only kilograms and liters are defined in the FAL form as measurement types
  filterMeasurementTypes() {
    const filteredArray = [];

    this.measurementTypes.forEach(mt => {
      if (mt.name.toLowerCase().indexOf('(l)') >= 0) {
        filteredArray.push(mt);
      }

      if (mt.name.toLowerCase().indexOf('(kg)') >= 0) {
        this.selectedMeasurementType = mt;
        filteredArray.push(mt);
      }
    });

    this.measurementTypes = filteredArray;
  }

  setEditOrViewDpg(sequenceNo: number, isEditing: boolean) {
    const indexToView = this.dpgOnBoardList.findIndex(
      dpg => dpg.sequenceNo === sequenceNo
    );
    if (indexToView > -1) {
      this.isViewing = !isEditing;
      this.isEditing = isEditing;
      const dpgToEdit = this.dpgOnBoardList[indexToView];
      this.dpgOnBoardModel = dpgToEdit;
      this.selectedDpgType = this.dpgOnBoardModel.dpg.dpgType;
      this.selectDpg(false);
      this.setDpgType(this.dpgOnBoardModel.dpg.dpgType, false);
      this.dpgSelected = isEditing;
      const enableTransUnitId =
        isEditing && this.dpgOnBoardModel.placedInContainer;
      this.toggleTransUnitID(enableTransUnitId);
    }
  }

  onDeleteConfirm(sequenceNo: number) {
    if (window.confirm('Are you sure you want to delete?')) {
      const indexToDelete = this.dpgOnBoardList.findIndex(
        dpg => dpg.sequenceNo === sequenceNo
      );
      if (indexToDelete > -1) {
        this.dpgOnBoardList.splice(indexToDelete, 1);
        this.persistData();
      }
    }
  }

  deleteAllDpgs() {
    if (window.confirm('Are you sure you want to delete all DPG\'s?')) {
      this.dpgOnBoardList = [];
      this.listIsPristine = false;
      this.persistData();
    }
  }

  loadDataFromService() {
    this.dpgService
      .getDpgOnBoardListByPortCallId(this.portCallId)
      .finally(() => {
        this.setSequenceNo();
        this.reloadTable();
      })
      .subscribe(res => {
        this.dpgOnBoardList = res;
      });
  }

  toggleNetGross() {
    if (
      this.selectedMeasurementType != null &&
      this.selectedMeasurementType !== undefined
    ) {
      if (
        this.selectedMeasurementType.name != null &&
        this.selectedMeasurementType.name !== undefined
      ) {
        if (
          this.selectedMeasurementType.name.toLowerCase().indexOf('(kg)') >= 0
        ) {
          this.measurementStr = 'Weight (Kg)';
        }

        if (
          this.selectedMeasurementType.name.toLowerCase().indexOf('(l)') >= 0
        ) {
          this.measurementStr = 'Volume (L)';
        }
      }
    }
  }

  // Search-Function for DPG after selecting DPG-Type
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap(term => {
        this.searchFailed = false;
        this.searching = term.length >= 2;
      }),
      switchMap(
        term =>
          this.showDropdown
            ? this.dpgService
              .search(
                this.selectedDpgType.dpgTypeId,
                term,
                this.resultsDropdown
              )
              .pipe(
                tap(() => {
                  this.searchFailed = false;
                }),
                catchError(() => {
                  this.searchFailed = true;
                  return of([]);
                })
              )
            : of([])
      ),
      tap(res => {
        if (this.showDropdown) {
          this.searching = false;
          this.searchFailed = this.selectedDpg.length >= 2 && res.length === 0;
        } else {
          this.dpgService
            .search(
              this.selectedDpgType.dpgTypeId,
              this.selectedDpg,
              this.resultsWithoutDropdown
            )
            .subscribe(data => {
              this.searchFailed =
                this.selectedDpg.length >= 2 && data.length === 0;
              this.searchResultDpg = data;
              this.searching = false;
            });
        }
      }),
      merge(this.hideSearchingWhenUnsubscribed)
    )

  reloadTable() {
    let rows = [];
    rows = this.generateRows();
    this.dpgSource.load(rows);
  }

  toggleTransUnitID(toggleValue: boolean) {
    this.placedInContainer = toggleValue;
  }

  // Generate list that will be sent to dpgSource that is connected to the smart table
  generateRows(): any[] {
    let rowData = [];
    if (this.dpgOnBoardList) {
      rowData = this.dpgOnBoardList.map(dpgOnBoard => {
        const row = {
          classification: dpgOnBoard.dpg.dpgType.shortName,
          dpgOnBoardModel: dpgOnBoard,
          grossWeight: dpgOnBoard.grossWeight ? dpgOnBoard.grossWeight + ' ' + dpgOnBoard.measurementType.name : ' ',
          netWeight: dpgOnBoard.netWeight ? dpgOnBoard.netWeight + ' ' + dpgOnBoard.measurementType.name : ' ',
          locationOnBoard: dpgOnBoard.locationOnBoard,
          placedInContainer: dpgOnBoard.placedInContainer ? 'Yes' : 'No',
          transportUnitIdentification: dpgOnBoard.transportUnitIdentification,
          textualReference: dpgOnBoard.dpg
            ? dpgOnBoard.dpg.textualReference
            : '',
          unNr: dpgOnBoard.dpg ? dpgOnBoard.dpg.unNumber : ''
        };
        return row;
      });
    }
    return rowData;
  }

  save() {
    this.saving = true;
    this.saved = false;
    this.saveError = false;

    const formattedDpgList = this.dpgService.formatDpgOnBoard(
      this.dpgOnBoardList,
      this.portCallId
    );

    this.dpgService
      .saveDpgOnBoard(formattedDpgList, this.portCallId)
      .finally(() => {
        this.saving = false;
        this.reloadData();
      })
      .subscribe(
        res => {
          this.saved = true;
          this.listIsPristine = true;
          this.dpgService.setDataIsPristine(this.listIsPristine);
        }, err => {
          this.saveError = true;
          this.openConfirmationModal(ConfirmationModalComponent.TYPE_FAILURE, 'An error occured while saving. Please try again later.');
        }
      );
  }

  reloadData() {
    this.dpgService
      .getDpgOnBoardListByPortCallId(this.portCallId)
      .subscribe(dpgOnBoardList => {
        this.dpgOnBoardList = dpgOnBoardList;
        this.dpgService.setDpgOnBoardList(dpgOnBoardList);
        this.dpgService.setDataIsPristine(true);
      });
  }

  saveDpgOnBoard(isUpdate: boolean = false) {
    this.listIsPristine = false;
    if (isUpdate) {
      const indexToUpdate = this.dpgOnBoardList.findIndex(
        dpg => dpg.sequenceNo === this.dpgOnBoardModel.sequenceNo
      );
      if (indexToUpdate > -1) {
        this.dpgOnBoardModel.measurementStr = this.selectedMeasurementType.name;
        this.dpgOnBoardModel.measurementType = this.selectedMeasurementType;
        this.dpgOnBoardModel.measurementTypeId = this.selectedMeasurementType.measurementTypeId;
        this.dpgOnBoardList[indexToUpdate] = this.dpgOnBoardModel;
      }
    } else {
      this.dpgOnBoardModel.dpg = this.selectedDpg;
      this.dpgOnBoardModel.dpgId = this.dpgOnBoardModel.dpg.dpgId;
      this.dpgOnBoardModel.measurementStr = this.selectedMeasurementType.name;
      this.dpgOnBoardModel.measurementType = this.selectedMeasurementType;
      this.dpgOnBoardModel.measurementTypeId = this.selectedMeasurementType.measurementTypeId;
      this.dpgOnBoardList.push(this.dpgOnBoardModel);
    }
    this.persistData();
    this.form.reset();
  }

  checkDpgModel() {
    const isUpdate = this.dpgOnBoardModel.sequenceNo !== undefined;

    this.validMsg = [];
    const model = this.dpgOnBoardModel;

    if (model.placedInContainer && !model.transportUnitIdentification) {
      this.validMsg.push(
        'Transportation Unit ID is required when DPG is placed in container'
      );
    }

    const netGrossDefined = (model.netWeight == null && model.grossWeight == null)
      || (model.netWeight === undefined && model.grossWeight === undefined);

    if ((model.netWeight <= 0 && model.grossWeight <= 0) || netGrossDefined) {
      this.validMsg.push('Either Gross ' + this.measurementStr + ' or Net ' + this.measurementStr + ' is required');
    }

    if (!netGrossDefined && (model.grossWeight < model.netWeight)) {
      this.validMsg.push(
        'Gross ' + this.measurementStr + ' must be greater than or equal to Net ' + this.measurementStr
      );
    }

    if (this.validMsg.length === 0) {
      this.validDpgModel = true;
      this.saveDpgOnBoard(isUpdate);
    } else {
      this.validDpgModel = false;
    }
  }

  resetData() {
    this.dpgOnBoardModel = new DpgOnBoardModel();
    this.dpgSelected = false;
    this.selectedDpg = new DpgModel();
    this.isViewing = false;
    this.isEditing = false;
    const measurementType = this.measurementTypes.findIndex(
      mt => mt.name.toLowerCase().indexOf('(kg)') >= 0
    );
    if (measurementType >= 0) {
      this.selectedMeasurementType = this.measurementTypes[measurementType];
    } else {
      this.selectedMeasurementType = this.measurementTypes[0];
    }
  }

  setDpgType(dpgType: any, newDpg: boolean = true) {
    this.selectedDpgType = dpgType;
    this.hasSelectedType = true;
    if (newDpg) {
      this.removeDpg();
    }
  }

  setDpg($event = null) {
    this.selectedDpg = $event.item;
    this.selectDpg();
  }

  selectDpg(setDpg: boolean = true) {
    this.dpgSelectedStr = '';
    this.dpgSelected = true;

    if (setDpg) {
      this.dpgOnBoardModel.dpg = this.selectedDpg;
    } else {
      this.selectedDpg = this.dpgOnBoardModel.dpg;
    }

    this.dpgOnBoardModel.dpg.dpgType = this.selectedDpgType;

    if (
      this.selectedDpg.textualReference != null &&
      this.selectedDpg.textualReference !== undefined
    ) {
      this.dpgSelectedStr += this.selectedDpg.textualReference;
    }
    if (
      this.selectedDpg.unNumber != null &&
      this.selectedDpg.unNumber !== undefined
    ) {
      this.dpgSelectedStr += ' Un Nr: ' + this.selectedDpg.unNumber;
    }
  }

  persistData() {
    this.dpgService.setDpgOnBoardList(this.dpgOnBoardList);
    this.touchData();
    this.setSequenceNo();
    this.reloadTable();
    this.resetData();
  }

  setSequenceNo() {
    let sequenceNo = 0;
    this.dpgOnBoardList.forEach(dpgOnBoard => {
      dpgOnBoard.sequenceNo = sequenceNo;
      sequenceNo++;
    });
  }

  touchData() {
    this.dpgService.setDataIsPristine(this.listIsPristine);
  }

  removeDpg() {
    this.dpgSelected = false;
    this.selectedDpg = new DpgModel();
    this.dpgSelectedStr = '';
  }

  formatter = (x: { DpgId: string }) => '';

  private openConfirmationModal(modalType: string, bodyText: string) {
    const modalRef = this.modalService.open(ConfirmationModalComponent);
    modalRef.componentInstance.modalType = modalType;
    modalRef.componentInstance.bodyText = bodyText;
  }
}
