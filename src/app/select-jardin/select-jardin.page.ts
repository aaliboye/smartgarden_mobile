import { JardinService } from 'src/app/services/jardin.service';
import { ModalController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-jardin',
  templateUrl: './select-jardin.page.html',
  styleUrls: ['./select-jardin.page.scss'],
})
export class SelectJardinPage implements OnInit {

  idJardin: any;
  jardins: any;
  zones:any;
  zone: any

  constructor(private jarService: JardinService, private actRoute: ActivatedRoute, 
    private navCtrl: NavController, private modCtrl: ModalController) { 


  }

  ngOnInit() {
    this.jardins = this.jarService.getJardins();

  }
}
