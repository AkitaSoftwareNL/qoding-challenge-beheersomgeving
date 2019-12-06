import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenQuestionCreateComponent } from './open-question-create.component';

describe('OpenQuestionCreateComponent', () => {
  let component: OpenQuestionCreateComponent;
  let fixture: ComponentFixture<OpenQuestionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenQuestionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenQuestionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
