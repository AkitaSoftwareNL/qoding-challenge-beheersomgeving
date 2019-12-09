import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampagneComponent } from './campagne/campagne.component';
import { CampagneCreateComponent } from './campagne-create/campagne-create.component';
import { QuestionCreateComponent } from './question-create/question-create.component';
import { QuestionJudgingComponent } from './question-judging/question-judging.component';

const routes: Routes = [
  { path: '', redirectTo: '/campagnes', pathMatch: 'full' },
  { path: 'campagnes', component: CampagneComponent },
  { path: 'campagne-create', component: CampagneCreateComponent },
  { path: 'question-create', component: QuestionCreateComponent },
  { path: 'judge/:campaignID', component: QuestionJudgingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
