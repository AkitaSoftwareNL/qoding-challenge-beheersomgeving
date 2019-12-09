import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {CampagneService} from '../campagne.service';
import {Campagne} from '../class/campagne';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-campagne-create',
  templateUrl: './campagne-create.component.html',
  styleUrls: ['./campagne-create.component.css']
})
export class CampagneCreateComponent {
  campagneForm = this.fb.group({
    name: [null, Validators.required],
    amountOfQuestions: [3, Validators.required],
  });

  title = 'Campagne aanmaken';

  constructor(private toast: ToastrService, private fb: FormBuilder, private campagneService: CampagneService) {}

  onSubmit(info: Campagne) {
    console.log(info);
    this.add(info);
  }

  add(campagne: Campagne): void {
    campagne.name = campagne.name.trim();
    if (!campagne.name) { return; }
    this.campagneService.addCampagne(campagne)
      .subscribe(success => {});
  }
}
