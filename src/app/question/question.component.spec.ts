import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { QuestionService } from '../service/question.service';
import { DebugElement } from '@angular/core';
import { QuestionComponent } from './question.component';
import { QuestionDatasource } from './question-datasource';

describe('VragenComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;
  let debugElement: DebugElement;
  let service: QuestionService;
  let spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionComponent],
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
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    component.dataSource = new QuestionDatasource([]);
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
