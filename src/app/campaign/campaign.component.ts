import { AfterViewInit, Component, ViewChild } from '@angular/core';
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
export class CampaignComponent implements AfterViewInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<Campaign>;
  dataSource: CampaignDatasource;
  displayedColumns = ['id', 'name', 'share', 'review', 'delete'];
  title = 'Campagnes';

  constructor(private campaignService: CampaignService) {
    this.getCampaign();
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

  goToLink(campaignId) {
    window.open('share/' + campaignId, '_blank');
  }

  removeCampaign(campaign: Campaign) {
    if (confirm('Weet je zeker dat je de campagne "' + campaign.name + '" wilt verwijderen?')) {
      this.campaignService.removeCampaign(campaign).subscribe(() => {
          this.getCampaign();
        }
      );
    }
  }
}
