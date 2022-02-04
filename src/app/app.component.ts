import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Userid } from './model/userid';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  playerid: Userid
  constructor(private platform: Platform, private router: Router) {
    this.initializeApp();
    this.playerid = new Userid();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      /*this.splashScreen.hide();
      cordova.plugins.backgroundMode.setDefaults({ silent: true });
      cordova.plugins.backgroundMode.disableBatteryOptimizations();
      this.backgroundMode.enable();*/
      if (localStorage.getItem('log') === 'true') {
        this.router.navigateByUrl('/home');

      } else {
        this.router.navigateByUrl('/');

      }

      //this.oneSignalSetupPush();
      //this.downloadProgress();

      // get FCM token

      /*this.fcm.getToken().then(token => {
        console.log(token);
      });

      // ionic push notification example
      this.fcm.onNotification().subscribe(data => {
        console.log(data);
        if (data.wasTapped) {
          console.log('tapped');
          this.router.navigateByUrl('/info');
        } else {
          console.log('nottapped');
        }

      });

      // refresh the FCM token
      this.fcm.onTokenRefresh().subscribe(token => {
        console.log(token);
      });*/
    });
  }
}
