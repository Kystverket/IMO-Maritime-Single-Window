import { Directive, Input, OnInit, ViewContainerRef } from '@angular/core';

export interface ViewCell {
  value: string | number;
  rowData: any;
}

@Directive({
  selector: '[appSmartTableCell]',
  standalone: false
})
export class SmartTableCellDirective implements OnInit {
  @Input('appSmartTableCell') column: any;
  @Input() rowData: any;
  @Input() cellValue: any;

  constructor(private viewContainer: ViewContainerRef) { }

  ngOnInit() {
    const ref = this.viewContainer.createComponent<any>(this.column.renderComponent);
    ref.setInput('value', this.cellValue);
    ref.setInput('rowData', this.rowData);
    if (this.column.onComponentInitFunction) {
      this.column.onComponentInitFunction(ref.instance);
    }
  }
}
