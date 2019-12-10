import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {CampaignService} from '../campaign.service';
import {Campaign} from '../class/campaign';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-campagne-create',
  templateUrl: './campaign-create.component.html',
  styleUrls: ['./campaign-create.component.css']
})
export class CampaignCreateComponent {
  campagneForm = this.fb.group({
    name: [null, Validators.required],
    amountOfQuestions: [3, Validators.required],
  });

  title = 'Campagne aanmaken';

  constructor(private toast: ToastrService, private fb: FormBuilder, private campaignService: CampaignService) {}

  onSubmit(info: Campaign) {
    this.add(info);
  }

  add(campaign: Campaign): void {
    campaign.name = campaign.name.trim();
    if (!campaign.name) { return; }
    this.campaignService.addCampaign(campaign)
      .subscribe(success => {});
  }
}
