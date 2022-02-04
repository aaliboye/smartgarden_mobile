import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { SIMULATION } from 'src/environments/environment';

@Component({
  selector: 'app-confirm-code',
  templateUrl: './confirm-code.page.html',
  styleUrls: ['./confirm-code.page.scss'],
})
export class ConfirmCodePage implements OnInit {

  isCodeValid = true;
  isCodeReady = false;
  loading: any;

  code: any;
  codeArray = [];
  confirmCode: FormGroup;

  constructor(private loadingController: LoadingController, private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.confirmCode = this.formBuilder.group({
      code: ['', Validators.required],
    });
  }

  verifyOtp() {
    if (SIMULATION) {
      this.router.navigateByUrl('/home')
    }
    else{

      this.isCodeValid = true;
      if (!this.isCodeReady) {
        return;
      }
  this.codeArray = this.code.split('');
  this.presentLoading('Vérification en cours...');
  this.authService.validateCode(this.code).subscribe(
    (res) => {
      this.router.navigateByUrl('/home')
    },
    (err) => {
      this.loading.dismiss();
      alert('Code invalide.');
    },
    );
  }
}

setOtpValue(otp: string) {
  this.code = otp;
  this.isCodeReady = this.code.length === 4;
}

async presentLoading(message) {
  this.loading = await this.loadingController.create({
    message,
  });
  await this.loading.present();
}


}

