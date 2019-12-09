import { TestBed } from '@angular/core/testing';

import { CampagneService } from './campagne.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {Campagne} from './class/campagne';
import {Observable} from 'rxjs';
import {AnswerListReport} from './class/answerListReport';
import {ParticipantList} from './class/participantList';

describe('CampagneService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      ToastrModule.forRoot()
    ],
    providers: [
      CampagneService,
      ToastrService,
      HttpClient
      ],
    schemas: [NO_ERRORS_SCHEMA]
  }));

  it('should be created', () => {
    const service: CampagneService = TestBed.get(CampagneService);
    expect(service).toBeTruthy();
  });

  it('should return an observable', () => {
    const service: CampagneService = TestBed.get(CampagneService);
    const returnvalue = new Observable<Campagne>();
    spyOn(service, 'addCampagne').and.returnValue(returnvalue);
    expect(service.addCampagne(new Campagne())).toBe(returnvalue);
  });

  it('should return an observable', () => {
    const service: CampagneService = TestBed.get(CampagneService);
    const returnvalue = new Observable<AnswerListReport>();
    spyOn(service, 'getQuestionsParticipantsCampaign').and.returnValue(returnvalue);
    expect(service.getQuestionsParticipantsCampaign(1, 1)).toEqual(returnvalue);
  });

  it('should return an observable', () => {
    const service: CampagneService = TestBed.get(CampagneService);
    const returnvalue = new Observable<ParticipantList>();
    spyOn(service, 'getParticipantsCampaign').and.returnValue(returnvalue);
    expect(service.getParticipantsCampaign(1)).toEqual(returnvalue);
  });
});
