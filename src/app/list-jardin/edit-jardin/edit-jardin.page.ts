import { ActivatedRoute } from '@angular/router';
import { JardinService } from 'src/app/services/jardin.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-jardin',
  templateUrl: './edit-jardin.page.html',
  styleUrls: ['./edit-jardin.page.scss'],
})
export class EditJardinPage implements OnInit {

  updateLocationForm: FormGroup
  id:any;

  constructor(private fb: FormBuilder, private jarService: JardinService, private actRoute: ActivatedRoute) { 
    this.id = this.actRoute.snapshot.paramMap.get('idjardin');
  }

  ngOnInit() {
    this.getLocationData(this.id);
    this.updateLocationForm = this.fb.group({
      name: [''],
      description: ['']
    })
  }

  getLocationData(id: any) {
    this.jarService.getLocation(id).subscribe(res => {
      console.log(res);
      this.updateLocationForm.setValue({
        name: res['name'],
        description: res['description']
      });
    });
  }
  onFormSubmit(){
    
  }

}
