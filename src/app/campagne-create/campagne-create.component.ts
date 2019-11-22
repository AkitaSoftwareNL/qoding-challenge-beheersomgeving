import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-campagne-create',
  templateUrl: './campagne-create.component.html',
  styleUrls: ['./campagne-create.component.css']
})
export class CampagneCreateComponent {
  campagneForm = this.fb.group({
    naam: [null, Validators.required],
  });

  title = "Campagne aanmaken";

  constructor(private fb: FormBuilder, private toast: ToastrService) {}

  onSubmit(campagne) {
    if (!campagne.naam)
    this.toast.info(`Campagne is aangemaakt met de naam: ${campagne.naam}`);
  }
}
