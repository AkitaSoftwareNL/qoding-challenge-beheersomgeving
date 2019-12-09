import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campagne } from '../campagne';
import { QuestionService } from '../service/question.service';
import { GivenAnswer } from '../class/given-answer';
import { QuestionDatasource } from './question-datasource';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-question-judging',
  templateUrl: './question-judging.component.html',
  styleUrls: ['./question-judging.component.css']
})

export class QuestionJudgingComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<GivenAnswer>;
  campagne: Campagne;
  displayedColumns = ['vraag', 'antwoord', 'correct', 'in-correct'];
  dataSource: QuestionDatasource;
  campaignID: string;
  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {
    this.campaignID = this.route.snapshot.paramMap.get('campaignID');
    this.campagne = new Campagne();
    this.campagne.name = 'A Name';
    this.questionService.getAnswers(this.campaignID, 1).subscribe(succes => {
      this.dataSource = new QuestionDatasource(succes);
      this.dataSource.data.forEach(element => {
        this.questionService.getQuestion(element.questionId).subscribe(result => {
          element.question = result.question;
        });
      });
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  sendAnwser(givenAnswer: GivenAnswer, state: number) {
    givenAnswer.stateId = state;
    this.questionService.setAnswers(this.campaignID, 1, givenAnswer).subscribe(suc => {
      this.questionService.getAnswers(this.campaignID, 1).subscribe(succes => {
        this.dataSource = new QuestionDatasource(succes);
        this.ngAfterViewInit();
        this.table.renderRows();
        this.changeDetectorRefs.detectChanges();
        this.dataSource.data.forEach(element => {
          this.questionService.getQuestion(element.questionId).subscribe(result => {
            element.question = result.question;
          });
        });
      });
    });
  }
}
