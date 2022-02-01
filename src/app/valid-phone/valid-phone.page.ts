import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-valid-phone',
  templateUrl: './valid-phone.page.html',
  styleUrls: ['./valid-phone.page.scss'],
})
export class ValidPhonePage implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  onClick(){
    this.router.navigateByUrl('/confirm-code')
  }

}
