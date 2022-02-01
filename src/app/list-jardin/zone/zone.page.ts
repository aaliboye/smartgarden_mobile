import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.page.html',
  styleUrls: ['./zone.page.scss'],
})
export class ZonePage implements OnInit {
  @Input() devices: any[];

  constructor(private modCtrl: ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modCtrl.dismiss()
  }

}
