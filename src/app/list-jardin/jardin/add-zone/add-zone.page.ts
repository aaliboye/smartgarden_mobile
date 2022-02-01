import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-add-zone',
  templateUrl: './add-zone.page.html',
  styleUrls: ['./add-zone.page.scss'],
})
export class AddZonePage implements OnInit {

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
