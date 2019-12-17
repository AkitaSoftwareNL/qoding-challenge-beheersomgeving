import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CampaignDatasource } from './campaign-datasource';
import { Campaign } from '../class/campaign';
import { CampaignService } from '../service/campaign.service';

@Component({
  selector: 'app-campagne',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<Campaign>;
  dataSource: CampaignDatasource;
  displayedColumns = ['id', 'name', 'review', 'share'];
  title = 'Campagnes';

  constructor(private campaignService: CampaignService) {
    this.getCampaign();
  }

  ngOnInit() {
  }

  getCampaign(): void {
    this.campaignService.getCampaign()
      .subscribe(campaign => {
        this.dataSource = new CampaignDatasource(campaign);
      });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
