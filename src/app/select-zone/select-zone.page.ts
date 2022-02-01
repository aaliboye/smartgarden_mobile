import { ModalController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { JardinService } from 'src/app/services/jardin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-zone',
  templateUrl: './select-zone.page.html',
  styleUrls: ['./select-zone.page.scss'],
})
export class SelectZonePage implements OnInit {

  idJardin: any;
  jardin: any;
  zones:any;
  zone: any

  constructor(private jarService: JardinService, private actRoute: ActivatedRoute, 
    private navCtrl: NavController, private modCtrl: ModalController) { 

    this.idJardin = this.actRoute.snapshot.paramMap.get('idjardin');

  }

  ngOnInit() {
    this.jardin = this.jarService.getJardin(this.idJardin);
    this.zones = this.jardin.zones;
  }

}
