import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../service/campaign.service';
import { ActivatedRoute } from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {Campaign} from '../class/campaign';
import {CampaignDatasource} from '../campaign/campaign-datasource';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
  selector: 'app-sharelink',
  templateUrl: './sharelink.component.html',
  styleUrls: ['./sharelink.component.css']
})
export class SharelinkComponent implements OnInit {

  campaign: Campaign;
  campaigns: any[] = [];
  campaignID: number;
  routeSub: Subscription;
  private dataSource: CampaignDatasource;

  constructor(private route: ActivatedRoute, private campaignService: CampaignService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.campaignID = params.campaignID;
    });

    this.getCampaign();
  }

  getCampaign(): void {
    this.campaignService.getCampaign().subscribe(value => {
      this.campaigns = value;
      console.log(this.campaigns);
      this.campaign = this.campaigns.filter(value1 => {
        return value1.id === +this.campaignID;
      })[0];
    });
  }

}
