import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportParticipantQuestionComponent } from './rapport-participant-question.component';

describe('RapportParticipantQuestionComponent', () => {
  let component: RapportParticipantQuestionComponent;
  let fixture: ComponentFixture<RapportParticipantQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapportParticipantQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportParticipantQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
