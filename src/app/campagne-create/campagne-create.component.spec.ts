import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { CampagneCreateComponent } from './campagne-create.component';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Campagne} from '../campagne';
import {CampagneService} from '../campagne.service';
import {Observable} from 'rxjs';

describe('CampagneCreateComponent', () => {
  let component: CampagneCreateComponent;
  let fixture: ComponentFixture<CampagneCreateComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampagneCreateComponent ],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        ToastrModule.forRoot(),
        HttpClientModule
      ],
      providers: [
        ToastrService,
        HttpClient
      ],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(CampagneCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should call add on submit',  () => {
    const campagne = new Campagne();
    campagne.name = 'test1';
    spyOn(component, 'add');
    component.onSubmit(campagne);
    expect(component.add).toHaveBeenCalled();
  });
});
