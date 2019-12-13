import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {ReportParticipantsDatasource} from './report-participants-datasource';
import {CampaignService} from '../service/campaign.service';
import {Participant} from '../class/participant';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-rapport-participants',
  templateUrl: './report-participants.component.html',
  styleUrls: ['./report-participants.component.css']
})
export class ReportParticipantsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Participant>;
  dataSource: ReportParticipantsDatasource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['rank', 'name', 'answer'];
  title = '[CampagneNaam]';
  routeSub: Subscription;
  campagneID: number;

  constructor(private campagneService: CampaignService, private route: ActivatedRoute) {
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
        this.dataSource = new ReportParticipantsDatasource(participant.participants);
        this.title = participant.campaignName;
      });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
