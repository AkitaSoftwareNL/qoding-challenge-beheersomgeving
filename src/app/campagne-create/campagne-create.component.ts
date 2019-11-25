import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {CampagneService} from '../campagne.service';
import {Campagne} from '../campagne';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-campagne-create',
  templateUrl: './campagne-create.component.html',
  styleUrls: ['./campagne-create.component.css']
})
export class CampagneCreateComponent {
  campagneForm = this.fb.group({
    naam: [null, Validators.required],
  });

  title = 'Campagne aanmaken';

  constructor(private toast: ToastrService, private fb: FormBuilder, private campagneService: CampagneService) {}

  onSubmit(campagne) {
    this.add(campagne.naam);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.campagneService.addCampagne({ name } as Campagne)
      .subscribe(success => {});
  }
}
