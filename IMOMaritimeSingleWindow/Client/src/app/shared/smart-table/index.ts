import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SmartTableComponent } from './smart-table.component';
import { SmartTableCellDirective } from './smart-table-cell.directive';

export { LocalDataSource } from './local.data-source';
export { ViewCell } from './smart-table-cell.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [SmartTableComponent, SmartTableCellDirective],
  exports: [SmartTableComponent]
})
export class Ng2SmartTableModule { }
