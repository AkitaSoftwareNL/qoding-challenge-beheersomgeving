import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CampaignService } from '../service/campaign.service';
import { Campaign } from '../class/campaign';
import { AmountOfQuestionTypeCollection } from '../class/amountOfQuestionTypeCollection';
import { AmountOfQuestionType } from '../class/amountOfQuestionType';
import { campaignDTO } from '../class/campaignDTO';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-campagne-create',
  templateUrl: './campaign-create.component.html',
  styleUrls: ['./campaign-create.component.css']
})
export class CampaignCreateComponent implements OnInit {

  campagneForm = this.fb.group({
    name: [null, Validators.required],
    amountTotal: [0, Validators.required],
    amountOpen: [0, Validators.required],
    amountMultiple: [0, Validators.required],
    amountProgram: [0, Validators.required],
  });

  title = 'Campagne aanmaken';
  maxTotal = 0;
  maxOpen = 0;
  maxMultiple = 0;
  maxProgram = 0;
  d = 1;
  a = 0;
  b = 0;
  c = 0;

  constructor(private fb: FormBuilder, private campaignService: CampaignService, private toast: ToastrService) { }

  ngOnInit() {
    this.setSlider();
  }

  onSubmit(info: campaignDTO) {
    if (info.amountTotal < (info.amountOpen + info.amountMultiple + info.amountProgram)) {
      this.toast.error('Aantal vragen mag niet lager zijn dan het totale aantal vragen van de verschillende vraagtypes.');
    } else {
      const campaign = new Campaign();
      campaign.name = info.name;
      campaign.amountOfQuestions = new AmountOfQuestionTypeCollection([
        new AmountOfQuestionType('total', info.amountTotal),
        new AmountOfQuestionType('open', info.amountOpen),
        new AmountOfQuestionType('multiple', info.amountMultiple),
        new AmountOfQuestionType('program', info.amountProgram)]);
      this.add(campaign);
    }
  }

  add(campaign: Campaign): void {
    campaign.name = campaign.name.trim();
    if (!campaign.name) { return; }
    this.campaignService.addCampaign(campaign)
      .subscribe(success => { });
  }

  updateSlider() {
    let difference = Math.max(this.d - (this.a + this.b + this.c), 0);
    this.d = this.a + this.b + this.c + difference;
  }

  setSlider() {
    this.campaignService.getAmountOfQuestions().subscribe(amountOfQuestions => {
      this.maxTotal = this.selectMaxAmountOfQuestions(this.getValue(amountOfQuestions.collection, "total"));
      this.maxOpen = this.selectMaxAmountOfQuestions(this.getValue(amountOfQuestions.collection, "open"));
      this.maxMultiple = this.selectMaxAmountOfQuestions(this.getValue(amountOfQuestions.collection, "multiple"));
      this.maxProgram = this.selectMaxAmountOfQuestions(this.getValue(amountOfQuestions.collection, "program"));
    });
  }

  getValue(array, type) {
    let max = 0;
    array.forEach(questionType => {
      if (questionType.type === type) {
        max = questionType.amount;
      }
    });
    return max;
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
