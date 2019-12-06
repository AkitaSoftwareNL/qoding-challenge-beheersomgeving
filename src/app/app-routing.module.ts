import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CampagneComponent} from './campagne/campagne.component';
import {CampagneCreateComponent} from './campagne-create/campagne-create.component';
import {VragenComponent} from './vragen/vragen.component';
import { QuestionCreateComponent } from './question-create/question-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/campagnes', pathMatch: 'full' },
  { path: 'campagnes', component: CampagneComponent },
  { path: 'campagne-create', component: CampagneCreateComponent },
  { path: 'vragen', component: VragenComponent},
  { path: 'question-create', component: QuestionCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
