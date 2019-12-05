import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { RapportParticipantsDataSource, RapportParticipantsItem } from './rapport-participants-datasource';

@Component({
  selector: 'app-rapport-participants',
  templateUrl: './rapport-participants.component.html',
  styleUrls: ['./rapport-participants.component.css']
})
export class RapportParticipantsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<RapportParticipantsItem>;
  dataSource: RapportParticipantsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['rank', 'name', 'answer', 'time'];
  title = '[CampagneNaam]';

  ngOnInit() {
    this.dataSource = new RapportParticipantsDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
