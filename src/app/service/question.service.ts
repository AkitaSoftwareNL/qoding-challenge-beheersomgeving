import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Question } from '../class/question';

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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      alert('Vraag kon niet worden gemaakt');
      return of(result as T);
    };
  }

}
