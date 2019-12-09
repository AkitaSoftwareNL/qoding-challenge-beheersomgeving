import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CampagneComponent} from './campagne/campagne.component';
import {CampagneCreateComponent} from './campagne-create/campagne-create.component';
import {RapportComponent} from './rapport/rapport.component';
import {RapportParticipantsComponent} from './rapport-participants/rapport-participants.component';
import {RapportParticipantQuestionComponent} from './rapport-participant-question/rapport-participant-question.component';
import {VragenComponent} from './vragen/vragen.component';
import { QuestionCreateComponent } from './question-create/question-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/campagnes', pathMatch: 'full' },
  { path: 'campagnes', component: CampagneComponent },
  { path: 'campagne-create', component: CampagneCreateComponent },
  { path: 'vragen', component: VragenComponent},
  { path: 'question-create', component: QuestionCreateComponent },
  { path: 'rapportage', component: RapportComponent },
  { path: 'rapportage/:campaignID', component: RapportParticipantsComponent },
  { path: 'rapportage/:campaignID/:participantID', component: RapportParticipantQuestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
