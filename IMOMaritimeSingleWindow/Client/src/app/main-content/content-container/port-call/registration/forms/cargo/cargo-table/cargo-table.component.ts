import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CargoItemModel } from 'app/shared/models/cargo-item-model';
import { LocalDataSource } from '../../../../../../../../../node_modules/ng2-smart-table';

@Component({
  selector: 'app-cargo-table',
  templateUrl: './cargo-table.component.html',
  styleUrls: ['./cargo-table.component.css']
})
export class CargoTableComponent implements OnInit, OnChanges {
  @Input() cargoItemList: CargoItemModel[];
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
      }
    }
  };

  generateRows(cargoItems: CargoItemModel[]) {
    const rowData = cargoItems.map(item => {
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

  constructor() { }

  ngOnInit() {
    const rows = this.generateRows(this.cargoItemList);
    this.cargoDataSource.load(rows);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}
