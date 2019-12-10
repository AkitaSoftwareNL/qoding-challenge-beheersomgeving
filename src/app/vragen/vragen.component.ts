import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Vraag } from '../Vraag';
import { VragenDataSource } from './vragen-datasource';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-vragen',
  templateUrl: './vragen.component.html',
  styleUrls: ['./vragen.component.css']
})
export class VragenComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<Vraag>;
  dataSource: VragenDataSource;
  title = 'Vragen overzicht';
  private vragen: Vraag[];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'Vraag', 'Vraagtype', 'vraagcategory', 'Aanpassen', 'Verwijderen'];

  constructor(private vragenService: QuestionService) {
    this.getVragen();
  }

  ngOnInit() {
  }

  getVragen(): void {
    this.vragenService.getQuestions()
      .subscribe(vraag => {
        this.dataSource = new VragenDataSource(vraag);
      });
  }

  delete(vraag: Vraag): void {
    if (confirm('Weet je zeker dat je de vraag "' + vraag.question + '" wilt verwijderen?')) {
      this.vragenService.removeQuestion(vraag).subscribe();
      window.location.reload();
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
