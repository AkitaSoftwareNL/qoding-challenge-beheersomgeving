import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CampaignService} from '../service/campaign.service';
import {Campaign} from '../class/campaign';

@Component({
  selector: 'app-campagne-create',
  templateUrl: './campaign-create.component.html',
  styleUrls: ['./campaign-create.component.css']
})
export class CampaignCreateComponent implements OnInit {
  campagneForm = this.fb.group({
    name: [null, Validators.required],
    amountOfQuestions: [3, Validators.required],
  });

  title = 'Campagne aanmaken';
  max = 1;
  numberOfQuestions: number;

  constructor(private fb: FormBuilder, private campaignService: CampaignService) {}

  ngOnInit() {
    this.setSlider();
  }

  onSubmit(info: Campaign) {
    this.add(info);
  }

  add(campaign: Campaign): void {
    campaign.name = campaign.name.trim();
    if (!campaign.name) { return; }
    this.campaignService.addCampaign(campaign)
      .subscribe(success => {});
  }

  setSlider() {
    this.campaignService.getAmountOfQuestions().subscribe(amount => {
      this.numberOfQuestions = amount;
      if (amount > 50) { this.max = 50; } else if (amount < 0 ) { this.max = 1; }
      if (amount != null ) { this.max = amount; }
    });
  }
}
