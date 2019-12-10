import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { CampaignCreateComponent } from './campaign-create.component';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Campaign} from '../class/campaign';
import {MatSliderModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';

describe('CampagneCreateComponent', () => {
  let component: CampaignCreateComponent;
  let fixture: ComponentFixture<CampaignCreateComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CampaignCreateComponent],
      imports: [
        MatSliderModule,
        MatCheckboxModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatSliderModule,
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
    fixture = TestBed.createComponent(CampaignCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should call add on submit', () => {
    const campagne = new Campaign();
    campagne.name = 'test1';
    spyOn(component, 'add');
    component.onSubmit(campagne);
    expect(component.add).toHaveBeenCalled();
  });
});
