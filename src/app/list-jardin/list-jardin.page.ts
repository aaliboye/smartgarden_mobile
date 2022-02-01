import { Router, ActivatedRoute } from '@angular/router';
import { PopoverComponent } from './../components/popover/popover.component';
import { JardinService } from './../services/jardin.service';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PopoverController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-list-jardin',
  templateUrl: './list-jardin.page.html',
  styleUrls: ['./list-jardin.page.scss'],
})
export class ListJardinPage implements OnInit {

  locations: any[]
  loc: any;
  image='https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  idjardin: any;
  jardin: any;


  constructor(private jarService: JardinService, private camera: Camera, private poCtrl: PopoverController, private navCtrl: NavController,
    private router: Router, private actRoute: ActivatedRoute) {

      this.idjardin = this.actRoute.snapshot.paramMap.get('idJardin');
    }

  ngOnInit(): void {
      this.locations = this.jarService.getJardins();
      this.jardin = this.jarService.getJardin(this.idjardin);
  }

  async addPhoto(id: any) {
    this.jardin = this.jarService.getJardin(id);
    const libraryImage = await this.openLibrary();
    this.jardin.imageUrl = 'data:image/jpg;base64,' + libraryImage;
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

async openPopover(ev: any){
  const popover =  await this.poCtrl.create({
    component: PopoverComponent,
    event: ev
  })
  return await popover.present();
}

goJardin(){
  console.log('ok')
  console.log(this.idjardin);

}

addJar(){
  this.router.navigateByUrl('/list-jardin/add-jardin');
}

  
}
