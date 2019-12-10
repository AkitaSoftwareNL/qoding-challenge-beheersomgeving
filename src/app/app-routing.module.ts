import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignCreateComponent } from './campaign-create/campaign-create.component';
import { ReportComponent } from './report/report.component';
import { ReportParticipantsComponent } from './report-participants/report-participants.component';
import { ReportParticipantQuestionComponent } from './report-participant-question/report-participant-question.component';
import { VragenComponent } from './vragen/vragen.component';
import { QuestionCreateComponent } from './question-create/question-create.component';
import { QuestionReviewComponent } from './question-review/question-review.component';

const routes: Routes = [
  { path: '', redirectTo: '/campagnes', pathMatch: 'full' },
  { path: 'campagnes', component: CampaignComponent },
  { path: 'campagne-create', component: CampaignCreateComponent },
  { path: 'vragen', component: VragenComponent },
  { path: 'question-create', component: QuestionCreateComponent },
  { path: 'rapportage', component: ReportComponent },
  { path: 'rapportage/:campaignID', component: ReportParticipantsComponent },
  { path: 'rapportage/:campaignID/:participantID', component: ReportParticipantQuestionComponent },
  { path: 'judge/:campaignID', component: QuestionReviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
