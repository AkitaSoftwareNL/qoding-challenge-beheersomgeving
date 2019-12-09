import { Injectable } from '@angular/core';
import {Campagne} from './class/campagne';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import {ParticipantList} from './class/participantList';
import {AnswerListReport} from './class/answerListReport';

@Injectable({
  providedIn: 'root'
})
export class CampagneService {
  private campagneGetURL = 'http://localhost:8080/campaign';
  private campagneCreateURL = 'http://localhost:8080/campaign/create';
  private campagneRapportGetURL = 'http://localhost:8080/report/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private toast: ToastrService) { }

  getCampagnes(): Observable<Campagne[]> {
    return this.http.get<Campagne[]>(this.campagneGetURL)
      .pipe(
        catchError(this.handleError<Campagne[]>('ophalen van campagnes voor overzicht pagina.', []))
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
      alert('Er is wat mis gegaan bij het ' + operation);
      return of(result as T);
    };
  }

  /** POST: add a new campagne to the server */
  addCampagne(campagne: Campagne): Observable<Campagne> {
    return this.http.post<Campagne>(this.campagneCreateURL, campagne, this.httpOptions)
      .pipe(
        tap((newCampagne: Campagne) => alert(`Campagne Toegevoegd w/ name=${campagne.name}`)),
        catchError(this.handleError<Campagne>('toevoegen van een Campagne.')));
  }

  getRapportCampagnes(): Observable<Campagne[]> {
    return this.http.get<Campagne[]>(this.campagneRapportGetURL)
      .pipe(
        catchError(this.handleError<Campagne[]>('ophalen van Campagnes voor Rapportage.', []))
      );
  }

  getParticipantsCampaign(campagneID: number): Observable<ParticipantList> {
    return this.http.get<ParticipantList>(this.campagneRapportGetURL + campagneID)
      .pipe(
        catchError(this.handleError<ParticipantList>('ophalen van Deelnemers in Campagnes voor Rapportage.', null))
      );
  }

  getQuestionsParticipantsCampaign(campagneID: number, participantID: number): Observable<AnswerListReport> {
    return this.http.get<AnswerListReport>(this.campagneRapportGetURL + campagneID + '/' + participantID)
      .pipe(
        catchError(this.handleError<AnswerListReport>('ophalen van Antwoorden van Deelnemers in Campagnes voor Rapportage.', null))
      );
  }
}

