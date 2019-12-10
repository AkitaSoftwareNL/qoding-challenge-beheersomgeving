import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceQuestionCreateComponent } from './multiple-choice-question-create.component';

describe('MultipleChoiceQuestionCreateComponent', () => {
  let component: MultipleChoiceQuestionCreateComponent;
  let fixture: ComponentFixture<MultipleChoiceQuestionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleChoiceQuestionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleChoiceQuestionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
