import { Component, OnInit } from '@angular/core';
import {CampagneService} from '../campagne.service';
import {AnswerListReport} from '../class/answerListReport';
import {AnswerReport} from '../class/answerReport';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-rapport-participant-question',
  templateUrl: './rapport-participant-question.component.html',
  styleUrls: ['./rapport-participant-question.component.css']
})
export class RapportParticipantQuestionComponent implements OnInit {
  title = '[participant naam]';
  private dataSource: AnswerReport[];
  private campagne: string;
  private campagneID: number;
  private participantID: number;
  private routeSub: Subscription;

  constructor(private campagneService: CampagneService, private route: ActivatedRoute) {
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

}
