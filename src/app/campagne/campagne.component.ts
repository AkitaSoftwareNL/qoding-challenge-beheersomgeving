import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CampagneDatasource } from './campagne-datasource';
import {Campagne} from '../class/campagne';
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
  displayedColumns = ['id', 'name', 'aanpassen', 'verwijderen'];
  title = 'Campagnes';
  private campagnes: Campagne[];

  constructor(private campagneService: CampagneService) {
    this.getCampagnes();
  }

  ngOnInit() {
  }

  getCampagnes(): void {
    this.campagneService.getCampagnes()
      .subscribe(campagne => {
        this.dataSource = new CampagneDatasource(campagne);
      });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
