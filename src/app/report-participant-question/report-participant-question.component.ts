import {Component, OnInit} from '@angular/core';
import {CampaignService} from '../service/campaign.service';
import {AnswerReport} from '../class/answerReport';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-rapport-participant-question',
  templateUrl: './report-participant-question.component.html',
  styleUrls: ['./report-participant-question.component.css']
})
export class ReportParticipantQuestionComponent implements OnInit {
  title = '[participant naam]';
  dataSource: AnswerReport[];
  campagne: string;
  campagneID: number;
  participantID: number;
  routeSub: Subscription;

  constructor(private campagneService: CampaignService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.campagneID = params.campaignID;
      this.participantID = params.participantID;
    });
    this.getQuestions(this.campagneID, this.participantID);
  }

  getQuestions(campagneID: number, participantID: number): void {
    this.campagneService.getQuestionsParticipantsCampaign(campagneID, participantID)
      .subscribe(question => {
        this.dataSource = question.answers;
        if (question.insertion == null) { question.insertion = ''; }
        this.title = question.firstname + ' ' + question.insertion + ' ' + question.lastname;
        this.campagne = question.campaignName;
      });
  }
  getState(state: number): string {
    if (state === 1) {
      return 'cornflowerblue';
    } else if (state === 2) {
      return 'green';
    } else if (state === 3) {
      return 'red';
    }
  }

}
