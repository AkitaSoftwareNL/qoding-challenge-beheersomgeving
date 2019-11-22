import { Injectable } from '@angular/core';
import {Campagne} from "./campagne";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CampagneService {
  private campagneURL = 'api/campagne';
  constructor(private http: HttpClient) { }

  getCampagnes(): Observable<Campagne[]> {
    return this.http.get<Campagne[]>(this.campagneURL)
  }
}
