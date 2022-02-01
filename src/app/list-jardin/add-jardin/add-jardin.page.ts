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
    private zone: NgZone,) 
    {
    this.locationForm = this.fb.group({
      name: [''],
      description: ['']
    })
   }

  ngOnInit() {
  }

  onFormSubmit(){

  }

}
