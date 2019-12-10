import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceQuestionCreateComponent } from './multiple-choice-question-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatCardModule, MatFormFieldModule, MatCheckboxModule } from '@angular/material';

describe('MultipleChoiceQuestionCreateComponent', () => {
  let component: MultipleChoiceQuestionCreateComponent;
  let fixture: ComponentFixture<MultipleChoiceQuestionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatIconModule
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
