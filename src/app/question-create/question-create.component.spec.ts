import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { MatMenuModule } from '@angular/material/menu';
import { OpenQuestionCreateComponent } from '../open-question-create/open-question-create.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { QuestionCreateComponent } from './question-create.component';
import { QuestionService } from '../service/question.service';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../class/question';
import {MultipleChoiceQuestionCreateComponent} from '../multiple-choice-question-create/multiple-choice-question-create.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

describe('QuestionCreateComponent', () => {
  let component: QuestionCreateComponent;
  let fixture: ComponentFixture<QuestionCreateComponent>;
  let debugElement: DebugElement;
  let service: QuestionService;
  let spy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCheckboxModule,
        MatMenuModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        ToastrModule.forRoot(),
        HttpClientModule
      ],
      declarations: [
        OpenQuestionCreateComponent,
        QuestionCreateComponent,
        MultipleChoiceQuestionCreateComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCreateComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    service = debugElement.injector.get(QuestionService);
    spy = spyOn(service, 'addQuestion').and.returnValue(new Observable<Question>());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set type', () => {
    const type = 'multiple';
    component.setType(type);
    expect(component.QuestionType).toBe(type);
  });

  it('should call QuestionService', () => {
    component.onAddQuestion(new Question(-1, 'question', 'category', 'open', 'attachment', [], 'given answer', 1));
    expect(spy).toHaveBeenCalled();
  });
});
