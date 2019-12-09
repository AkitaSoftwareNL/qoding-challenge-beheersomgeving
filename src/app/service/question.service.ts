import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Question } from '../class/question';
import { GivenAnswer } from '../class/given-answer';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {
  private questionCreate = 'http://localhost:8080/questions/create';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, private toast: ToastrService) { }

  addQuestion(question: Question) {
    return this.http.post<Question>(this.questionCreate, question, this.httpOptions)
      .pipe(
        tap((newQuestion: Question) => alert(`Vraag Toegevoegd`)),
        catchError(this.handleError<Question>()));
  }

  getAnswers(campagneID, state) {
    return this.http.get<GivenAnswer[]>('http://localhost:8080/campaign/' + campagneID + '/answers/' + state, this.httpOptions);
  }

  getQuestion(id: number) {
    return this.http.get<Question>('http://localhost:8080/questions/' + id, this.httpOptions);
  }

  setAnswers(campagneID, state, answer: GivenAnswer) {
    return this.http.post<GivenAnswer[]>('http://localhost:8080/answers/update', answer, this.httpOptions);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      alert('Vraag kon niet worden gemaakt');
      return of(result as T);
    };
  }

}
