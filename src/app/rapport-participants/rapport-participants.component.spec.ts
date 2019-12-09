import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { RapportParticipantsComponent } from './rapport-participants.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('RapportParticipantsComponent', () => {
  let component: RapportParticipantsComponent;
  let fixture: ComponentFixture<RapportParticipantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapportParticipantsComponent ],
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
    fixture = TestBed.createComponent(RapportParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
