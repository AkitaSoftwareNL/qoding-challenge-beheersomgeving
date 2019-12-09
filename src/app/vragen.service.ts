import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {Observable, of} from 'rxjs';
import {Vraag} from './Vraag';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VragenService {

  private getQuestionURL = 'http://localhost:8080/questions';
  private removeQuestionURL = 'http://localhost:8080/questions/delete';

  constructor(private http: HttpClient, private toast: ToastrService) { }

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

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      alert('Vraag kan niet opgehaald worden.');
      return of(result as T);
    };
  }
}
