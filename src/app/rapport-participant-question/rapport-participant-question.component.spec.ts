import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportParticipantQuestionComponent } from './rapport-participant-question.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Data} from '@angular/router';
import {Observable, of} from 'rxjs';

describe('RapportParticipantQuestionComponent', () => {
  let component: RapportParticipantQuestionComponent;
  let fixture: ComponentFixture<RapportParticipantQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapportParticipantQuestionComponent ],
      imports: [
        HttpClientModule,
        ToastrModule.forRoot(),
      ],
      providers: [
        HttpClient,
        ToastrService,
        ActivatedRoute,
        { provide: ActivatedRoute, useClass: MockActivatedRoute }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportParticipantQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});


class MockActivatedRoute extends ActivatedRoute {
}
