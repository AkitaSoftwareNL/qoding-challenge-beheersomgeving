import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CampaignService } from '../service/campaign.service';
import { Campaign } from '../class/campaign';
import { AmountOfQuestionTypeCollection } from '../class/amountOfQuestionTypeCollection';
import { AmountOfQuestionType } from '../class/amountOfQuestionType';
import { campaignDTO } from '../class/campaignDTO';

@Component({
  selector: 'app-campagne-create',
  templateUrl: './campaign-create.component.html',
  styleUrls: ['./campaign-create.component.css']
})
export class CampaignCreateComponent implements OnInit {

  campagneForm = this.fb.group({
    name: [null, Validators.required],
    amountTotal: [3, Validators.required],
    amountOpen: [1, Validators.required],
    amountMultiple: [1, Validators.required],
    amountProgram: [1, Validators.required],
  });

  title = 'Campagne aanmaken';
  maxTotal = 1;
  maxOpen = 1;
  maxMultiple = 1;
  maxProgram = 1;

  constructor(private fb: FormBuilder, private campaignService: CampaignService) { }

  ngOnInit() {
    this.setSlider();
  }

  onSubmit(info: campaignDTO) {
    let campaign = new Campaign();
    campaign.name = info.name;
    campaign.amountOfQuestions = new AmountOfQuestionTypeCollection([
      new AmountOfQuestionType('total', info.amountTotal),
      new AmountOfQuestionType('open', info.amountOpen),
      new AmountOfQuestionType('multiple', info.amountMultiple),
      new AmountOfQuestionType('program', info.amountProgram)]);
    this.add(new Campaign());
  }

  add(campaign: Campaign): void {
    campaign.name = campaign.name.trim();
    if (!campaign.name) { return; }
    this.campaignService.addCampaign(campaign)
      .subscribe(success => { });
  }

  setSlider() {
    this.campaignService.getAmountOfQuestions().subscribe(amountOfQuestions => {
      this.maxTotal = this.selectMaxAmountOfQuestions(amountOfQuestions.collection[0].amount);
      this.maxOpen = this.selectMaxAmountOfQuestions(amountOfQuestions.collection[1].amount);
      this.maxMultiple = this.selectMaxAmountOfQuestions(amountOfQuestions.collection[2].amount);
      this.maxProgram = this.selectMaxAmountOfQuestions(amountOfQuestions.collection[3].amount);
    });
  }

  selectMaxAmountOfQuestions(amount: number) {
    const maxSelectableAmount = 50;
    let max = 1;

    if (amount > maxSelectableAmount) {
      max = maxSelectableAmount;
    } else if (amount < 0) {
      max = 1;
    }
    if (amount != null) {
      max = amount;
    }
    return amount;
  }
}
