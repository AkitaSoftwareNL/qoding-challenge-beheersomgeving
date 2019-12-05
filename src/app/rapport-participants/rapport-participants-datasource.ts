import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface RapportParticipantsItem {
  name: string;
  rank: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: RapportParticipantsItem[] = [
  {rank: 1, name: 'Hydrogen'},
  {rank: 2, name: 'Helium'},
  {rank: 3, name: 'Lithium'},
  {rank: 4, name: 'Beryllium'},
  {rank: 5, name: 'Boron'},
  {rank: 6, name: 'Carbon'},
  {rank: 7, name: 'Nitrogen'},
  {rank: 8, name: 'Oxygen'},
  {rank: 9, name: 'Fluorine'},
  {rank: 10, name: 'Neon'},
  {rank: 11, name: 'Sodium'},
  {rank: 12, name: 'Magnesium'},
  {rank: 13, name: 'Aluminum'},
  {rank: 14, name: 'Silicon'},
  {rank: 15, name: 'Phosphorus'},
  {rank: 16, name: 'Sulfur'},
  {rank: 17, name: 'Chlorine'},
  {rank: 18, name: 'Argon'},
  {rank: 19, name: 'Potassium'},
  {rank: 20, name: 'Calcium'},
];

/**
 * Data source for the RapportParticipants view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class RapportParticipantsDataSource extends DataSource<RapportParticipantsItem> {
  data: RapportParticipantsItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<RapportParticipantsItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: RapportParticipantsItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: RapportParticipantsItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'rank': return compare(+a.rank, +b.rank, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
