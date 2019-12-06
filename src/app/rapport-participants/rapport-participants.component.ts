import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { RapportParticipantsDataSource } from './rapport-participants-datasource';
import {CampagneService} from '../campagne.service';
import {Participant} from '../participant';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-rapport-participants',
  templateUrl: './rapport-participants.component.html',
  styleUrls: ['./rapport-participants.component.css']
})
export class RapportParticipantsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Participant>;
  dataSource: RapportParticipantsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['rank', 'name', 'answer', 'time'];
  title = '[CampagneNaam]';
  private routeSub: Subscription;
  private campagneID: number;

  constructor(private campagneService: CampagneService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.campagneID = params.campaignID;
    });
    this.getParticipants(this.campagneID);
  }

  getParticipants(campagneID: number): void {
    this.campagneService.getParticipantsCampaign(campagneID)
      .subscribe(participant => {
        this.dataSource = new RapportParticipantsDataSource(participant.participants);
        this.title = participant.campaignName;
      });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
