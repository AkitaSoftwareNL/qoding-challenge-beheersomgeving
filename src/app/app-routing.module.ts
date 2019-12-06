import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CampagneComponent} from './campagne/campagne.component';
import {CampagneCreateComponent} from './campagne-create/campagne-create.component';
import {VragenComponent} from './vragen/vragen.component';

const routes: Routes = [
  { path: '', redirectTo: '/campagnes', pathMatch: 'full' },
  { path: 'campagnes', component: CampagneComponent },
  { path: 'campagne-create', component: CampagneCreateComponent },
  { path: 'vragen', component: VragenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
