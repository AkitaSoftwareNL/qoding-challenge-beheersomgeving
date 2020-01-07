import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, Form } from '@angular/forms';
import { Question } from '../class/question';

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

  editorOptions = { language: 'css' };
  code: string = '';
  answer: string = '';
  test: string = '';

  @Output() question = new EventEmitter<Question>();
  title = 'Programmeervraag aanmaken'

  constructor(private fb: FormBuilder) { }

  onSubmit(form: any) {
    const question = new Question(-1, form.question, 'JAVA', 'program', form.attachment, this.code, [], this.answer, this.test, 0);
    console.log(question);
    this.question.emit(question);
  }

}
