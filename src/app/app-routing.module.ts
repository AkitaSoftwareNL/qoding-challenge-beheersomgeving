import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampagneComponent } from './campagne/campagne.component';
import { CampagneCreateComponent } from './campagne-create/campagne-create.component';
import { OpenQuestionCreateComponent } from './open-question-create/open-question-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/campagnes', pathMatch: 'full' },
  { path: 'campagnes', component: CampagneComponent },
  { path: 'campagne-create', component: CampagneCreateComponent },
  { path: 'open-question-create', component: OpenQuestionCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
