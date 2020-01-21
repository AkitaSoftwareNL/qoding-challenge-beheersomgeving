import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import {QuestionOverview} from '../class/question-overview';
import {QuestionDatasource} from './question-datasource';
import {QuestionService} from '../service/question.service';

@Component({
  selector: 'app-vragen',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements AfterViewInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<QuestionOverview>;
  dataSource: QuestionDatasource;
  title = 'Vragen overzicht';

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'question', 'type', 'category', 'delete'];

  constructor(private questionService: QuestionService) {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService.getQuestions()
      .subscribe( vraag => {
        this.dataSource = new QuestionDatasource(vraag);
        this.setTableData();
    });
  }
  removeQuestion(vraag: QuestionOverview): void {
    if (confirm('Weet je zeker dat je de vraag "' + vraag.question + '" wilt verwijderen?')) {
      this.questionService.removeQuestion(vraag).subscribe(() => {
        this.getQuestions();
        }
      );
    }
  }

  ngAfterViewInit() {
    this.setTableData();
  }

  setTableData() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
