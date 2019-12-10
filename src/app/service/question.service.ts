import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Question } from '../class/question';
import {Vraag} from '../Vraag';

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
  constructor(private http: HttpClient, private toast: ToastrService) { }

  addQuestion(question: Question) {
    return this.http.post<Question>(this.questionCreate, question, this.httpOptions)
      .pipe(
        tap((newQuestion: Question) => alert(`Vraag Toegevoegd`)),
        catchError(this.handleError<Question>()));
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
