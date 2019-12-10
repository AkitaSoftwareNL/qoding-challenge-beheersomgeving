import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { MultipleChoiceQuestionCreateComponent } from './multiple-choice-question-create.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {Question} from '../class/question';
import {Answer} from '../class/answer';
describe('MultipleChoiceQuestionCreateComponent', () => {
  let component: MultipleChoiceQuestionCreateComponent;
  let fixture: ComponentFixture<MultipleChoiceQuestionCreateComponent>;
  const possibleAnswerList: Answer[] = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        ToastrModule.forRoot(),
        HttpClientModule,
        MatCheckboxModule
      ],
      declarations: [MultipleChoiceQuestionCreateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleChoiceQuestionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit a Question object', () => {
    possibleAnswerList.push(new Answer('Correct antwoord', 1));
    possibleAnswerList.push(new Answer('Incorrect antwoord', 0));
    component.question.subscribe(q => {
      expect(q).toEqual(new Question(-1, 'question', 'Java', 'multiple', 'attachment', possibleAnswerList, '', 0));
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });
});
