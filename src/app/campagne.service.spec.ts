import { TestBed } from '@angular/core/testing';

import { CampagneService } from './campagne.service';
import {HttpClientModule} from '@angular/common/http';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {Campagne} from './campagne';
import {Observable} from 'rxjs';

describe('CampagneService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      ToastrModule.forRoot()
    ],
    providers: [
      CampagneService,
      ToastrService
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
});
