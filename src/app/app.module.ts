import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CampagneComponent } from './campagne/campagne.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CampagneCreateComponent } from './campagne-create/campagne-create.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { RapportComponent } from './rapport/rapport.component';
import { RapportParticipantsComponent } from './rapport-participants/rapport-participants.component';
import { RapportParticipantQuestionComponent } from './rapport-participant-question/rapport-participant-question.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { VragenComponent } from './vragen/vragen.component';
import { OpenQuestionCreateComponent } from './open-question-create/open-question-create.component';
import { QuestionCreateComponent } from './question-create/question-create.component';
import { MultipleChoiceQuestionCreateComponent } from './multiple-choice-question-create/multiple-choice-question-create.component';
import {MatCheckboxModule} from '@angular/material';
import { QuestionJudgingComponent } from './question-judging/question-judging.component';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CampagneComponent,
    CampagneComponent,
    CampagneCreateComponent,
    VragenComponent,
    OpenQuestionCreateComponent,
    QuestionCreateComponent,
    MultipleChoiceQuestionCreateComponent,
    QuestionJudgingComponent,
    RapportComponent,
    RapportParticipantsComponent,
    RapportParticipantQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatExpansionModule,
    MatChipsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
