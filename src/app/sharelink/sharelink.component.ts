import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../service/campaign.service';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs';
import {Campaign} from '../class/campaign';

@Component({
  selector: 'app-sharelink',
  templateUrl: './sharelink.component.html',
  styleUrls: ['./sharelink.component.css']
})
export class SharelinkComponent implements OnInit {
  url = 'http://localhost:4201/conference/';
  campaign: Campaign;
  campaigns: any[] = [];
  campaignID: number;
  routeSub: Subscription;

  constructor(private route: ActivatedRoute, private campaignService: CampaignService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.campaignID = params.campaignID;
    });

    this.getCampaign();
  }

  getCampaign(): void {
    this.campaignService.getCampaign().subscribe(campaign => {
      this.campaigns = campaign;
      console.log(this.campaigns);
      this.campaign = this.campaigns.filter(filteredCampaign => {
        return filteredCampaign.id === +this.campaignID;
      })[0];
    });
  }

  getUrl(): string {
    return this.url + this.campaignID;
  }
}
