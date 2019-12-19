import {Injectable} from '@angular/core';
import {Campaign} from '../class/campaign';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {ParticipantList} from '../class/participantList';
import {AnswerListReport} from '../class/answerListReport';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  campagneGetURL = 'http://localhost:8080/campaign';
  campagneCreateURL = 'http://localhost:8080/campaign/create';
  campagneRapportGetURL = 'http://localhost:8080/report/';
  countQuestionURL = 'http://localhost:8080/questions/count';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private router: Router) { }

  getCampaign(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.campagneGetURL)
      .pipe(
        catchError(this.handleError<Campaign[]>('ophalen van campagnes voor overzicht pagina.', []))
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
  addCampaign(campagne: Campaign): Observable<Campaign> {
    return this.http.post<Campaign>(this.campagneCreateURL, campagne, this.httpOptions)
      .pipe(
        tap((newCampagne: Campaign) => {
          alert(`Campagne toegevoegd met de naam ${campagne.name}`);
          this.router.navigate(['/campagnes']);
        }),
        catchError(this.handleError<Campaign>('toevoegen van een Campaign.')));
  }

  getRapportCampagnes(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.campagneRapportGetURL)
      .pipe(
        catchError(this.handleError<Campaign[]>('ophalen van Campagnes voor Rapportage.', []))
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

  getAmountOfQuestions(): Observable<number> {
    return this.http.get<number>(this.countQuestionURL)
      .pipe(
        catchError(this.handleError<number>('ophalen van het aantal vragen', null))
      );
  }
}

