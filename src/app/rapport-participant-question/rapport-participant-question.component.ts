import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rapport-participant-question',
  templateUrl: './rapport-participant-question.component.html',
  styleUrls: ['./rapport-participant-question.component.css']
})
export class RapportParticipantQuestionComponent implements OnInit {
  title = '[participant naam]';

  constructor() { }

  ngOnInit() {
  }

}
