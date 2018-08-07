import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { CargoItemModel } from 'app/shared/models/cargo-item-model';
import { LocalDataSource } from 'ng2-smart-table';
import { DeleteButtonComponent } from '../../shared/delete-button/delete-button.component';
import { FalCargoService } from '../../../../../../../shared/services/fal-cargo.service';

@Component({
  selector: 'app-cargo-table',
  templateUrl: './cargo-table.component.html',
  styleUrls: ['./cargo-table.component.css']
})
export class CargoTableComponent implements OnInit, OnChanges {
  @Input() cargoItemList: CargoItemModel[];
  @Output() delete = new EventEmitter<any>();

  cargoDataSource: LocalDataSource = new LocalDataSource();

  cargoTableSettings = {
    mode: 'external',
    actions: false,
    attr: {
      class: 'table table-bordered'
    },

    columns: {
      shippingMarks: {
        title: 'Shipping Marks',
        type: 'html'
      },
      containerIdentification: {
        title: 'Container ID Number',
        type: 'html'
      },
      numberOfPackages: {
        title: 'Number of Packages',
        type: 'html'
      },
      packageType: {
        title: 'Package Type',
        type: 'html'
      },
      descriptionOfGoods: {
        title: 'Description of Goods',
        type: 'html'
      },
      hsCode: {
        title: 'HS Code',
        type: 'html'
      },
      grossVolume: {
        title: 'Gross Volume (M3)',
        type: 'html'
      },
      grossWeight: {
        title: 'Gross Weight (KGM)',
        type: 'html'
      },
      delete: {
        title: 'Delete',
        type: 'custom',
        filter: false,
        sort: false,
        renderComponent: DeleteButtonComponent,
        onComponentInitFunction: (instance) => {
          instance.delete.subscribe(row => {
            this.deleteCargoItem(row);
          });
        }
      }
    }
  };

  constructor(
    private cargoService: FalCargoService
  ) { }

  ngOnInit() {
    const rows = this.generateRows();
    this.cargoDataSource.load(rows);
  }

  ngOnChanges(changes: SimpleChanges) {
    const rows = this.generateRows();
    this.cargoDataSource.load(rows);
  }

  deleteCargoItem(row) {
    /*     this.cargoItemList = this.cargoItemList.filter(entry => entry !== row.cargoItemModel);
        const rows = this.generateRows();
        this.cargoDataSource.load(rows); */
    this.delete.emit(row);
    // this.cargoService.setDataIsPristine(false);
  }

  generateRows() {
    const rowData = this.cargoItemList.map(item => {
      const row = {
        cargoItemModel: item,
        shippingMarks: item.shippingMarks,
        containerIdentification: item.containerIdentification,
        numberOfPackages: item.numberOfPackages,
        packageType: item.packageType.name,
        descriptionOfGoods: item.description,
        hsCode: item.hsCode,
        grossVolume: item.grossVolume,
        grossWeight: item.grossWeight
      };
      return row;
    });
    return rowData;
  }


}
