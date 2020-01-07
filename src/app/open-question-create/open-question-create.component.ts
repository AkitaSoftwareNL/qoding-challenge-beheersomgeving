import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, Form } from '@angular/forms';
import { Question } from '../class/question';

@Component({
  selector: 'app-open-question-create',
  templateUrl: './open-question-create.component.html',
  styleUrls: ['./open-question-create.component.css']
})

export class OpenQuestionCreateComponent {
  questionForm = this.fb.group({
    question: [null, Validators.required],
    attachment: [null],
  });
  @Output() question = new EventEmitter<Question>();
  title = 'Openvraag aanmaken';

  constructor(private fb: FormBuilder) { }

  onSubmit(form: any) {
    const question = new Question(-1, form.question, 'Java', 'open', form.attachment, [], [], 0);
    this.question.emit(question);
  }

}
