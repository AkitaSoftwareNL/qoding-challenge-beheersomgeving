import { TestBed, async } from '@angular/core/testing';
import { QuestionService } from '../service/question.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Question } from '../class/question';
import { Observable } from 'rxjs';
import { GivenAnswer } from '../class/given-answer';
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

  it('should be created', () => {
    const service: QuestionService = TestBed.get(QuestionService);
    expect(service).toBeTruthy();
  });

  it('addQuestion() should return an observable', () => {
    const service: QuestionService = TestBed.get(QuestionService);
    const returnvalue = new Observable<Question>();
    spyOn(service, 'addQuestion').and.returnValue(returnvalue);
    expect(service.addQuestion(new Question(-1, 'questionType', 'java', 'question', 'attachment', 0, '', []))).toBe(returnvalue);
  });

  it('getAnswers() should return an observable', () => {
    const service: QuestionService = TestBed.get(QuestionService);
    const returnvalue = new Observable<GivenAnswer[]>();
    spyOn(service, 'getAnswers').and.returnValue(returnvalue);
    expect(service.getAnswers(1, 1)).toBe(returnvalue);
  });

  it('getQuestion() should return an observable', () => {
    const service: QuestionService = TestBed.get(QuestionService);
    const returnvalue = new Observable<Question>();
    spyOn(service, 'getQuestion').and.returnValue(returnvalue);
    expect(service.getQuestion(1)).toBe(returnvalue);
  });

  it('setAnswers() should return an observable', () => {
    const service: QuestionService = TestBed.get(QuestionService);
    const returnvalue = new Observable<GivenAnswer[]>();
    spyOn(service, 'setAnswers').and.returnValue(returnvalue);
    expect(service.setAnswers(1, 1, new GivenAnswer())).toBe(returnvalue);
  });

});
