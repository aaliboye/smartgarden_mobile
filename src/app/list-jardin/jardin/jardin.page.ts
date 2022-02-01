import { ZonePage } from './../zone/zone.page';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { JardinService } from 'src/app/services/jardin.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-jardin',
  templateUrl: './jardin.page.html',
  styleUrls: ['./jardin.page.scss'],
})
export class JardinPage implements OnInit {

  idJardin: any;
  jardin: any;
  zones:any;
  zone: any

  constructor(private jarService: JardinService, private actRoute: ActivatedRoute, 
    private navCtrl: NavController, private modCtrl: ModalController, private camera: Camera) { 

    this.idJardin = this.actRoute.snapshot.paramMap.get('idjardin');

  }

  ngOnInit() {
    this.jardin = this.jarService.getJardin(this.idJardin);
    this.zones = this.jardin.zones;
  }

  async openModal(){
    
    const modal = await this.modCtrl.create({
      component: ZonePage,
      componentProps: {
        'devices': ['sortie', 'sotie']
      }
    })

    return await modal.present();
  }

  async addPhoto(idzone: any) {
    this.zone = this.zones[idzone]
    const libraryImage = await this.openLibrary();
    this.zone.imageUrl = 'data:image/jpg;base64,' + libraryImage;
}

async openLibrary() {
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    targetWidth: 1000,
    targetHeight: 1000,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  };
  return await this.camera.getPicture(options);
}

deleteZone(){

}

updateZone(){

}




}
