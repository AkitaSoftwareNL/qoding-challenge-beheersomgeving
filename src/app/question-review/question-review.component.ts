import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campaign } from '../class/campaign';
import { QuestionService } from '../service/question.service';
import { GivenAnswer } from '../class/given-answer';
import { QuestionReviewDatasource } from './question-review-datasource';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-question-judging',
  templateUrl: './question-review.component.html',
  styleUrls: ['./question-review.component.css']
})

export class QuestionReviewComponent implements AfterViewInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<GivenAnswer>;
  campaign: Campaign;
  displayedColumns = ['question', 'answer', 'correct', 'in-correct'];
  dataSource: QuestionReviewDatasource;
  campaignID: string;
  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
  ) {
    this.campaignID = this.route.snapshot.paramMap.get('campaignID');
    this.campaign = new Campaign();
    this.campaign.name = 'A Name';
    this.questionService.getAnswers(this.campaignID, 1).subscribe(succes => {
      this.dataSource = new QuestionReviewDatasource(succes);
      this.dataSource.data.forEach(element => {
        this.questionService.getQuestion(element.questionId).subscribe(result => {
          element.question = result.question;
        });
      });
    });
  }

  ngAfterViewInit() {
    this.setTableData();
  }

  setTableData() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  sendAnwser(givenAnswer: GivenAnswer, state: number) {
    givenAnswer.stateId = state;
    this.questionService.setAnswers(this.campaignID, 1, givenAnswer).subscribe(() => {
      this.questionService.getAnswers(this.campaignID, 1).subscribe(succes => {
        this.dataSource = new QuestionReviewDatasource(succes);
        this.setTableData();
        this.table.renderRows();
        this.dataSource.data.forEach(element => {
          this.questionService.getQuestion(element.questionId).subscribe(result => {
            element.question = result.question;
          });
        });
      });
    });
  }
}
