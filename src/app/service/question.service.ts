import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Question} from '../class/question';
import {QuestionOverview} from '../class/question-overview';
import {GivenAnswer} from '../class/given-answer';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {
  private questionCreate = 'http://localhost:8080/questions/create';
  private getQuestionURL = 'http://localhost:8080/questions';
  private removeQuestionURL = 'http://localhost:8080/questions/delete';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, private router: Router, private toast: ToastrService) { }

  addQuestion(question: Question) {
    return this.http.post<Question>(this.questionCreate, question, this.httpOptions)
      .pipe(
        tap((newQuestion: Question) => {
          this.toast.info(`Vraag Toegevoegd`);
          this.router.navigate(['/vragen']);
        }),
        catchError(this.handleError<Question>('toevoegen van een vraag.')));
  }

  getAnswers(campagneID, state) {
    return this.http.get<GivenAnswer[]>('http://localhost:8080/campaign/' + campagneID + '/answers/' + state, this.httpOptions);
  }

  getQuestion(id: number) {
    return this.http.get<Question>('http://localhost:8080/questions/' + id, this.httpOptions);
  }

  setAnswers(campagneID, state, answer: GivenAnswer) {
    return this.http.post<GivenAnswer[]>(
      'http://localhost:8080/campaign/' + campagneID + '/answers/' + state + '/update',
      answer,
      this.httpOptions
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.toast.info(error.valueOf().error.message);
      return of(result as T);
    };
  }

  getQuestions(): Observable<QuestionOverview[]> {
    return this.http.get<QuestionOverview[]> (this.getQuestionURL )
      .pipe(
        catchError(this.handleError<QuestionOverview[]>('ophalen van vragen.', []))
      );
  }

  removeQuestion(vraag: QuestionOverview): Observable<QuestionOverview> {
    return this.http.post<QuestionOverview>(this.removeQuestionURL + '/' + vraag.questionID, '')
      .pipe(
        tap( (newVraag: QuestionOverview) => this.toast.info('Vraag verwijderd met id ' + vraag.questionID)),
        catchError(this.handleError<QuestionOverview>('verwijderen van een vraag')));
  }

}
