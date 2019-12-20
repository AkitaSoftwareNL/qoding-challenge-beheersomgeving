import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ReportDatasource } from './report-datasource';
import {Campaign} from '../class/campaign';
import {CampaignService} from '../service/campaign.service';

@Component({
  selector: 'app-rapport',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements AfterViewInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Campaign>;
  dataSource: ReportDatasource;
  title = 'Rapportage';

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'campagne', 'datum', 'status'];

  constructor(private campaignService: CampaignService) {
    this.getCampagnes();
  }

  getCampagnes(): void {
    this.campaignService.getRapportCampagnes()
      .subscribe(campagne => {
        this.dataSource = new ReportDatasource(campagne);
      });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
