import { BehaviorSubject } from 'rxjs';

// Minimal replacement for ng2-smart-table's LocalDataSource (the library is abandoned and incompatible with modern Angular).
export class LocalDataSource {
  private data: any[];
  private readonly changed = new BehaviorSubject<any[]>([]);

  readonly onChanged$ = this.changed.asObservable();

  constructor(data: any[] = []) {
    this.data = data || [];
    this.changed.next(this.data);
  }

  load(data: any[]): Promise<boolean> {
    this.data = data || [];
    this.changed.next(this.data);
    return Promise.resolve(true);
  }

  append(element: any): Promise<boolean> {
    this.data.push(element);
    this.changed.next(this.data);
    return Promise.resolve(true);
  }

  prepend(element: any): Promise<boolean> {
    this.data.unshift(element);
    this.changed.next(this.data);
    return Promise.resolve(true);
  }

  remove(element: any): Promise<boolean> {
    this.data = this.data.filter(e => e !== element);
    this.changed.next(this.data);
    return Promise.resolve(true);
  }

  refresh(): void {
    this.changed.next(this.data);
  }

  getAll(): Promise<any[]> {
    return Promise.resolve(this.data);
  }

  count(): number {
    return this.data.length;
  }

  empty(): Promise<boolean> {
    return this.load([]);
  }
}
