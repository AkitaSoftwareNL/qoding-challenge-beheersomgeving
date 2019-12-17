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
  Url = 'http://localhost:4201/login/';
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
    this.campaignService.getCampaign().subscribe(value => {
      this.campaigns = value;
      console.log(this.campaigns);
      this.campaign = this.campaigns.filter(value1 => {
        return value1.id === +this.campaignID;
      })[0];
    });
  }

  getUrl(): string {
    return this.Url + this.campaignID;
  }
}
