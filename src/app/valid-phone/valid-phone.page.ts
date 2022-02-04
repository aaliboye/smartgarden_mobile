import { AuthService } from './../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import * as moment from 'moment';


@Component({
  selector: 'app-valid-phone',
  templateUrl: './valid-phone.page.html',
  styleUrls: ['./valid-phone.page.scss'],
})
export class ValidPhonePage implements OnInit {

  validationPhone: FormGroup;

  countriesPhoneCode: Array<any>;
  isCodeValid = true;
  loading: any;

  displayResentCode = false;
  countDown = 1;

  constructor(private navCtrl: NavController, private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private loadingController: LoadingController,
    ) { }

    ngOnInit() {
      this.validationPhone = this.formBuilder.group({
        phone: ['', Validators.required],
        dialCode: ['+221'],
      });
    }
  

  startCountdown(seconds) {
    let counter = seconds;
    const interval = setInterval(() => {
      counter -= 1000;
      this.countDown = counter;
      if (counter < 0) {
        clearInterval(interval);
        this.displayResentCode = true;
      }
    }, 1000);
  }
  formatCountDown() {
    return moment.utc(this.countDown).format('mm:ss');
  }




  async presentLoading(message) {
    this.loading = await this.loadingController.create({
      message,
    });
    await this.loading.present();
  }

  slideToCodeVerification(resubmit = false) {
    this.presentLoading('Envoie en cours...');
      this.authService
        .register({
          phone: `${this.validationPhone.value.dialCode}${this.validationPhone.value.phone}`,
        })
        .subscribe(
          (res: any) => {
            this.loading.dismiss();
            console.log(res);
            this.authService.saveToken(res.token);
            this.authService.saveIdUser(res.idUser);
            console.log('validation phone = ' + res.idUser);
            this.displayResentCode = false;
            this.startCountdown(1 * 60 * 1000);
            if (!resubmit) {
              this.router.navigateByUrl('/confirm-code')
              }
            
          },
          (err) => {
            this.loading.dismiss();
            alert('Une erreur est survenue. Merci de réessayer.');
          },
        );
  }

}
