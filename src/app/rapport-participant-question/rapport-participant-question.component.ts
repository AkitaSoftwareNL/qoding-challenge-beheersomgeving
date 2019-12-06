import { Component, OnInit } from '@angular/core';
import {CampagneService} from '../campagne.service';

@Component({
  selector: 'app-rapport-participant-question',
  templateUrl: './rapport-participant-question.component.html',
  styleUrls: ['./rapport-participant-question.component.css']
})
export class RapportParticipantQuestionComponent implements OnInit {
  title = '[participant naam]';
  private dataSource;
  private campagne: string;

  constructor(private campagneService: CampagneService) {
    this.getQuestions();
  }

  ngOnInit() {
  }

  getQuestions(): void {
    this.campagneService.getQuestionsParticipantsCampaign()
      .subscribe(question => {
        this.dataSource = question;
        if (question.insertion == null) { question.insertion = ''; }
        this.title = question.firstname + ' ' + question.insertion + ' ' + question.lastname;
        this.campagne = 'campagnenaampie';
      });
  }

}
