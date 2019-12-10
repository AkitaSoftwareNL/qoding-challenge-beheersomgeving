import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { VragenComponent } from './vragen.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { VragenDataSource } from './vragen-datasource';
import { Vraag } from '../Vraag';
import { Observable } from 'rxjs';
import { QuestionService } from '../service/question.service';
import { DebugElement } from '@angular/core';

describe('VragenComponent', () => {
  let component: VragenComponent;
  let fixture: ComponentFixture<VragenComponent>;
  let debugElement: DebugElement;
  let service: QuestionService;
  let spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VragenComponent],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        MatIconModule,
        HttpClientModule,
        ToastrModule.forRoot()
      ]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VragenComponent);
    component = fixture.componentInstance;
    component.dataSource = new VragenDataSource([]);
    debugElement = fixture.debugElement;
    service = debugElement.injector.get(QuestionService);
    spy = spyOn(service, 'getQuestions').and.returnValue(new Observable<Vraag[]>());
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should call service', () => {
    component.getVragen();
    expect(spy).toHaveBeenCalled();
  });

  it('should push confirm message', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    // component.delete(new Vraag());

  });

});
