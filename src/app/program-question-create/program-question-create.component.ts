import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Question } from '../class/question';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-program-question-create',
  templateUrl: './program-question-create.component.html',
  styleUrls: ['./program-question-create.component.css']
})
export class ProgramQuestionCreateComponent {
  questionForm = this.fb.group({
    question: [null, Validators.required],
    attachment: [null],
  });

  editorOptions = { language: 'java' };
  code = '';
  answer = '';
  test = '';

  @Output() question = new EventEmitter<Question>();
  title = 'Programmeervraag aanmaken';

  constructor(private fb: FormBuilder, private toast: ToastrService) { }

  onSubmit(form: any) {
    if (this.code === '' || this.answer === '' || this.test === '') {
      this.toast.error('Startcode, unittests en correcte uitwerking zijn vereist.');
      return;
    }

    const question = new Question(-1, form.question, 'JAVA', 'program', form.attachment, this.code, [], [this.answer], this.test, 0);
    this.question.emit(question);
  }

  updateAnswer() {
    this.answer = this.code;
  }

}
