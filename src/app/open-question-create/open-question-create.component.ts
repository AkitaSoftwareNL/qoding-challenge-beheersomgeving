import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, Form, FormGroup } from '@angular/forms';
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

  onSubmit(form: FormGroup) {
    let question = new Question(-1, 'open', form.get('question').value, form.get('attachment').value, 0, '', []);
    this.question.emit(question);
  }

}
