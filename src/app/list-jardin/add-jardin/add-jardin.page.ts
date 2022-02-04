import { JardinService } from './../../services/jardin.service';
import { Router } from '@angular/router';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-jardin',
  templateUrl: './add-jardin.page.html',
  styleUrls: ['./add-jardin.page.scss'],
})
export class AddJardinPage implements OnInit {
  locationForm: FormGroup

  constructor(private router: Router,
    public fb: FormBuilder,
    private zone: NgZone,
    private jarService: JardinService,
    ) 
    {
    this.locationForm = this.fb.group({
      name: [''],
      description: ['']
    })
   }

  ngOnInit() {
  }

  onFormSubmit(){
    if (!this.locationForm.valid) {
      return false;
    } else {
      this.jarService.addLocation(this.locationForm.value)
        .subscribe((res) => {
          this.zone.run(() => {
            console.log(res)
            this.locationForm.reset();
            this.router.navigate(['/list-jardin']);
          })
        });
    }
  }


}
