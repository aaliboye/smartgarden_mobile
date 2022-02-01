import { JardinService } from 'src/app/services/jardin.service';
import { NavController, PopoverController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  idJardin: any;
  jardin:any;
  jardins:any;

  constructor(private route: Router, private navCtrl: NavController, private popCtrl: PopoverController,
    private actRoute: ActivatedRoute, private jarService: JardinService
    
    ) { 
    this.idJardin = this.actRoute.snapshot.paramMap.get('idJardin');
  }

  ngOnInit() {
    this.getLoc();
  }


  getLoc(){
    this.jardins = this.jarService.getJardins();
  }

  goJardin(){
    console.log('ok')
    console.log(this.jardins[0].id)
    this.navCtrl.navigateRoot('/list-jardin/jardin/'+ 0);
    this.popCtrl.dismiss();
  }
  

}
