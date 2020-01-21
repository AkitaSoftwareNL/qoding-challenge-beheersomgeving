import {Injectable} from '@angular/core';
import {Campaign} from '../class/campaign';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {ParticipantList} from '../class/participantList';
import {AnswerListReport} from '../class/answerListReport';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AmountOfQuestionTypeCollection} from '../class/amountOfQuestionTypeCollection';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  campagneGetURL = 'http://localhost:8080/campaign';
  removeCampaignURL = 'http://localhost:8080/campaign/delete';
  campagneCreateURL = 'http://localhost:8080/campaign/create';
  campagneRapportGetURL = 'http://localhost:8080/report/';
  countQuestionURL = 'http://localhost:8080/questions/count';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private router: Router, private toast: ToastrService) { }

  getCampaign(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.campagneGetURL)
      .pipe(
        catchError(this.handleError<Campaign[]>('ophalen van campagnes voor overzicht pagina.', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.toast.info(error.valueOf().error.details +
        '. ' + error.valueOf().error.nextAction +
        '\n' + error.valueOf().error.support, error.valueOf().error.message, {
        timeOut: 4000
      });
      return of(result as T);
    };
  }

  addCampaign(campagne: Campaign): Observable<Campaign> {
    return this.http.post<Campaign>(this.campagneCreateURL, campagne, this.httpOptions)
      .pipe(
        tap(() => {
          this.toast.info(`Campagne toegevoegd met de naam ${campagne.name}`);
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

  getAmountOfQuestions(): Observable<AmountOfQuestionTypeCollection> {
    return this.http.get<AmountOfQuestionTypeCollection>(this.countQuestionURL)
      .pipe(
        catchError(this.handleError<AmountOfQuestionTypeCollection>('ophalen van het aantal vragen', null))
      );
  }

  removeCampaign(campaign: Campaign): Observable<Campaign> {
    return this.http.post<Campaign>(this.removeCampaignURL + '/' + campaign.id, '')
      .pipe(
        tap( () => this.toast.info('Campagne verwijderd met id ' + campaign.id)),
        catchError(this.handleError<Campaign>('verwijderen van een campagne')));
  }
}

