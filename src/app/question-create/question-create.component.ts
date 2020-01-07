import { Component, OnInit } from '@angular/core';
import { Question } from '../class/question';
import { QuestionService } from '../service/question.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.css']
})
export class QuestionCreateComponent {

  QuestionType = 'programmeer';

  constructor(private toast: ToastrService, private questionService: QuestionService) { }

  setType(type: string) {
    this.QuestionType = type;
  }

  onAddQuestion(question: Question) {
    if (question.question != null && question.question !== '') {
      if (question.questionType != 'program') {
        if (!(question.startCode == '' || question.unitTest == '' || question.givenAnswer == '')) {
          this.questionService.addQuestion(question)
            .subscribe();
        }
      }
    }
  }

}
