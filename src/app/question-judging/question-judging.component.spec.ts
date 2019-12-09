import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionJudgingComponent } from './question-judging.component';

describe('QuestionJudgingComponent', () => {
  let component: QuestionJudgingComponent;
  let fixture: ComponentFixture<QuestionJudgingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionJudgingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionJudgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
