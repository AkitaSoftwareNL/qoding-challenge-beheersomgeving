import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { ReportParticipantsComponent } from './report-participants.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('RapportParticipantsComponent', () => {
  let component: ReportParticipantsComponent;
  let fixture: ComponentFixture<ReportParticipantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportParticipantsComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
