import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Question} from '../class/question';
import {Answer} from '../class/answer';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-multiple-choice-question-create',
  templateUrl: './multiple-choice-question-create.component.html',
  styleUrls: ['./multiple-choice-question-create.component.css']
})
export class MultipleChoiceQuestionCreateComponent {
  @Output() question = new EventEmitter<Question>();
  title = 'Meerkeuzevraag aanmaken';
  private possibleAnswerList: Answer[] = [];
  maxAmountOfQuestions = Array(1, 2, 3, 4, 5, 6);

  questionForm = this.fb.group({
    question: [null, Validators.required],
    attachment: [null],
    answer_1: [null, Validators.required],
    answer_2: [null, Validators.required],
    answer_3: [null],
    answer_4: [null],
    answer_5: [null],
    answer_6: [null],
    correctAnswer_1: [null, Validators.required],
    correctAnswer_2: [null],
    correctAnswer_3: [null],
    correctAnswer_4: [null],
    correctAnswer_5: [null],
    correctAnswer_6: [null]
  });
  constructor(private fb: FormBuilder, private toast: ToastrService) {
  }

  onSubmit(form: any) {
    let i = 1;
    while (i <= this.maxAmountOfQuestions.length) {
      if ( (this.questionForm.get('answer_' + i).value)) {
        this.possibleAnswerList.push(new Answer(this.questionForm.get('answer_' + i).value,
          (this.questionForm.get('correctAnswer_' + i).value) ? 1 : 0 ));
        console.log(this.questionForm.get('correctAnswer_' + i).value);
      }
      i++;
    }
    console.log(this.possibleAnswerList);
    if (this.possibleAnswerList.filter(value => value.isCorrect === 1).length > 1 && this.possibleAnswerList.length > 1) {
      const question = new Question(-1, form.question, 'java', 'multiple', form.attachment, this.possibleAnswerList, [], 1);
      this.question.emit(question);
    } else {
      this.toast.error('U heeft geen correcte data opgegeven.');
      window.location.reload();
    }
  }
}
