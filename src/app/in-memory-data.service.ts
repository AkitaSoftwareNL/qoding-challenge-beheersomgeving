import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import {Campagne} from "./campagne";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const campagnes = [
      { id: 13, name: 'J-Fall 2011' },
      { id: 14, name: 'J-Fall 2015' },
      { id: 15, name: 'J-Fall 2019' },
    ];
    return {campagnes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(campagnes: Campagne[]): number {
    return campagnes.length > 0 ? Math.max(...campagnes.map(hero => hero.id)) + 1 : 13;
  }
}
