import { Injectable } from '@angular/core';
import {Campagne} from './campagne';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CampagneService {
  private campagneURL = 'api/campagnes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getCampagnes(): Observable<Campagne[]> {
    return this.http.get<Campagne[]>(this.campagneURL)
      .pipe(
        catchError(this.handleError<Campagne[]>('getCampagnes', []))
      );
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
      return of(result as T);
    };
  }

  /** POST: add a new campagne to the server */
  addCampagne(campagne: Campagne): Observable<Campagne> {
    return this.http.post<Campagne>(this.campagneURL, campagne, this.httpOptions)
      .pipe(
        tap((newHero: Campagne) => console.log(`added hero w/ id=${newHero.id}`)),
        catchError(this.handleError<Campagne>('Campagne Toevoegen')));
  }
}
