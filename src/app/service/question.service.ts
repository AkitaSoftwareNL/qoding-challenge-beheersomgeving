import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Question } from '../class/question';
import {Vraag} from '../class/Vraag';
import { GivenAnswer } from '../class/given-answer';
import {Router} from '@angular/router';

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
  constructor(private http: HttpClient, private router: Router) { }

  addQuestion(question: Question) {
    return this.http.post<Question>(this.questionCreate, question, this.httpOptions)
      .pipe(
        tap((newQuestion: Question) => {
          alert(`Vraag Toegevoegd`);
        }),
        catchError(this.handleError<Question>()));
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
      alert('Vraag kon niet worden gemaakt');
      return of(result as T);
    };
  }

  getQuestions(): Observable<Vraag[]> {
    return this.http.get<Vraag[]> (this.getQuestionURL )
      .pipe(
        catchError(this.handleError<Vraag[]>('getQuestions', []))
      );
  }

  removeQuestion(vraag: Vraag): Observable<Vraag> {
    return this.http.post<Vraag>(this.removeQuestionURL + '/' + vraag.questionID, '')
      .pipe(
        tap( (newVraag: Vraag) => alert('Vraag verwijderd w/ id ' + vraag.questionID)),
        catchError(this.handleError<Vraag>('Vraag verwijderd')));
  }

}
