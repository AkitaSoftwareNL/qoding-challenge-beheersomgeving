import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramQuestionCreateComponent } from './program-question-create.component';

describe('ProgramQuestionCreateComponent', () => {
  let component: ProgramQuestionCreateComponent;
  let fixture: ComponentFixture<ProgramQuestionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramQuestionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramQuestionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
