import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { OpenQuestionCreateComponent } from './open-question-create.component';
import { DebugElement, EventEmitter } from '@angular/core';
import { Question } from '../class/question';

describe('OpenQuestionCreateComponent', () => {
  let component: OpenQuestionCreateComponent;
  let fixture: ComponentFixture<OpenQuestionCreateComponent>;
  let debugElement: DebugElement;

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
        HttpClientModule
      ],
      declarations: [OpenQuestionCreateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenQuestionCreateComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a Question object', () => {
    component.question.subscribe(q => {
      expect(q).toEqual(new Question(-1, 'question', 'Java', 'open', 'attachment', [], '', 0));
    });

    const form = {
      question: 'question',
      attachment: 'attachment',
    };
    component.onSubmit(form);
  });

});
