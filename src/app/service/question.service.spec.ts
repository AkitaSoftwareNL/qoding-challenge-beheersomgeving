import { TestBed, async } from '@angular/core/testing';
import { QuestionService } from '../service/question.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Question } from '../class/question';
import { Observable } from 'rxjs';
describe('Question Service', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ToastrModule.forRoot()
      ],
      providers: [
        QuestionService,
        ToastrService
      ]
    });
  }));

  it('should create get', () => {
    const service: QuestionService = TestBed.get(QuestionService);
    expect(service).toBeTruthy();
  });

  it('should return an observable', () => {
    const service: QuestionService = TestBed.get(QuestionService);
    const returnvalue = new Observable<Question>();
    spyOn(service, 'addQuestion').and.returnValue(returnvalue);
    expect(service.addQuestion(new Question(-1, 'questionType', 'question', 'attachment', 0, '', []))).toBe(returnvalue);
  });
});
