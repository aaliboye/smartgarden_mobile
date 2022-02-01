import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-jardin',
  templateUrl: './edit-jardin.page.html',
  styleUrls: ['./edit-jardin.page.scss'],
})
export class EditJardinPage implements OnInit {

  locationForm: FormGroup

  constructor(private fb: FormBuilder) { 
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
