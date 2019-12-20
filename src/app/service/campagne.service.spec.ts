import { TestBed } from '@angular/core/testing';

import { CampaignService } from './campaign.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {Campaign} from '../class/campaign';
import {Observable} from 'rxjs';
import {AnswerListReport} from '../class/answerListReport';
import {ParticipantList} from '../class/participantList';

describe('CampagneService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      ToastrModule.forRoot()
    ],
    providers: [
      CampaignService,
      ToastrService,
      HttpClient
      ],
    schemas: [NO_ERRORS_SCHEMA]
  }));

  it('should be created', () => {
    const service: CampaignService = TestBed.get(CampaignService);
    expect(service).toBeTruthy();
  });

  it('should return an observable', () => {
    const service: CampaignService = TestBed.get(CampaignService);
    const returnvalue = new Observable<Campaign>();
    spyOn(service, 'addCampaign').and.returnValue(returnvalue);
    expect(service.addCampaign(new Campaign())).toBe(returnvalue);
  });

  it('should return an observable', () => {
    const service: CampaignService = TestBed.get(CampaignService);
    const returnvalue = new Observable<AnswerListReport>();
    spyOn(service, 'getQuestionsParticipantsCampaign').and.returnValue(returnvalue);
    expect(service.getQuestionsParticipantsCampaign(1, 1)).toEqual(returnvalue);
  });

  it('should return an observable', () => {
    const service: CampaignService = TestBed.get(CampaignService);
    const returnvalue = new Observable<ParticipantList>();
    spyOn(service, 'getParticipantsCampaign').and.returnValue(returnvalue);
    expect(service.getParticipantsCampaign(1)).toEqual(returnvalue);
  });
});
