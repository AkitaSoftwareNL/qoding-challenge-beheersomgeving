import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { RapportDataSource } from './rapport-datasource';
import {Campagne} from '../class/campagne';
import {CampagneService} from '../campagne.service';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Campagne>;
  dataSource: RapportDataSource;
  title = 'Rapportage';

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'campagne', 'datum', 'status'];

  constructor(private campagneService: CampagneService) {
    this.getCampagnes();
  }

  ngOnInit() {
  }

  getCampagnes(): void {
    this.campagneService.getRapportCampagnes()
      .subscribe(campagne => {
        this.dataSource = new RapportDataSource(campagne);
      });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
