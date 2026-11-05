import { ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocalDataSource } from './local.data-source';

interface Column {
  id: string;
  title: string;
  type: string;
  filter: boolean;
  sort: boolean;
  sortDirection?: string;
  renderComponent?: any;
  onComponentInitFunction?: (instance: any) => void;
  valuePrepareFunction?: (value: any, row: any, cell?: any) => any;
}

interface Row {
  data: any;
  cells: { column: Column; value: any }[];
}

// Read-only subset of ng2-smart-table: sortable/filterable columns, html and custom component cells, simple pager.
@Component({
  selector: 'ng2-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SmartTableComponent implements OnChanges, OnDestroy {
  @Input() settings: any = {};
  @Input() source: LocalDataSource | any[] = [];

  columns: Column[] = [];
  pageRows: Row[] = [];
  filters: { [columnId: string]: string } = {};
  sortColumn: Column = null;
  sortDirection = 'asc';
  page = 1;
  pageCount = 1;
  perPage = 10;

  private rows: any[] = [];
  private dataSource: LocalDataSource;
  private subscription: Subscription;

  constructor(private changeDetector: ChangeDetectorRef) { }

  get tableClass(): string {
    return (this.settings && this.settings.attr && this.settings.attr.class) || 'table';
  }

  get noDataMessage(): string {
    return (this.settings && this.settings.noDataMessage) || 'No data found';
  }

  get showFilters(): boolean {
    return !(this.settings && this.settings.hideSubHeader);
  }

  get showPager(): boolean {
    const pager = this.settings && this.settings.pager;
    return (!pager || pager.display !== false) && this.pageCount > 1;
  }

  get pages(): number[] {
    return Array.from({ length: this.pageCount }, (_, i) => i + 1);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.settings) {
      this.buildColumns();
    }
    if (changes.source) {
      this.subscription?.unsubscribe();
      this.dataSource = Array.isArray(this.source) ? new LocalDataSource(this.source) : this.source;
      this.subscription = this.dataSource.onChanged$.subscribe(rows => {
        this.rows = rows || [];
        this.page = 1;
        this.render();
      });
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  toggleSort(column: Column) {
    if (!column.sort) {
      return;
    }
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.render();
  }

  setFilter(column: Column, value: string) {
    this.filters[column.id] = value;
    this.page = 1;
    this.render();
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.pageCount) {
      this.page = page;
      this.render();
    }
  }

  private buildColumns() {
    const configured = (this.settings && this.settings.columns) || {};
    this.columns = Object.keys(configured).map(id => {
      const c = configured[id];
      return {
        id,
        title: c.title,
        type: c.type || 'text',
        filter: c.filter !== false && c.type !== 'custom',
        sort: c.sort !== false && c.type !== 'custom',
        sortDirection: c.sortDirection,
        renderComponent: c.renderComponent,
        onComponentInitFunction: c.onComponentInitFunction,
        valuePrepareFunction: c.valuePrepareFunction
      } as Column;
    });
    const initial = this.columns.find(c => c.sortDirection);
    this.sortColumn = initial || null;
    this.sortDirection = initial ? initial.sortDirection : 'asc';
    this.perPage = (this.settings && this.settings.pager && this.settings.pager.perPage) || 10;
  }

  private cellValue(column: Column, row: any): any {
    const raw = row[column.id];
    return column.valuePrepareFunction ? column.valuePrepareFunction(raw, row) : raw;
  }

  private render() {
    let filtered = this.rows.slice();

    for (const column of this.columns) {
      const term = (this.filters[column.id] || '').toLowerCase();
      if (term) {
        filtered = filtered.filter(row =>
          String(this.cellValue(column, row) ?? '').toLowerCase().includes(term));
      }
    }

    if (this.sortColumn) {
      const column = this.sortColumn;
      const direction = this.sortDirection === 'asc' ? 1 : -1;
      filtered.sort((a, b) => {
        const av = this.cellValue(column, a);
        const bv = this.cellValue(column, b);
        if (typeof av === 'number' && typeof bv === 'number') {
          return (av - bv) * direction;
        }
        return String(av ?? '').localeCompare(String(bv ?? ''), undefined, { numeric: true }) * direction;
      });
    }

    this.pageCount = Math.max(1, Math.ceil(filtered.length / this.perPage));
    this.page = Math.min(this.page, this.pageCount);
    const start = (this.page - 1) * this.perPage;

    this.pageRows = filtered.slice(start, start + this.perPage).map(data => ({
      data,
      cells: this.columns.map(column => ({ column, value: this.cellValue(column, data) }))
    }));
    this.changeDetector.markForCheck();
  }
}
