import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CampagneDatasource } from './campagne-datasource';
import {Campagne} from '../campagne';
import {CampagneService} from '../campagne.service';

@Component({
  selector: 'app-campagne',
  templateUrl: './campagne.component.html',
  styleUrls: ['./campagne.component.css']
})
export class CampagneComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Campagne>;
  dataSource: CampagneDatasource;

  displayedColumns = ['name', 'aanpassen', 'verwijderen'];
  title = 'Campagnes';

  constructor(private campagneService: CampagneService) {
  }

  ngOnInit() {
    this.dataSource = new CampagneDatasource(this.campagneService);
    this.dataSource.getCampagnes();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
