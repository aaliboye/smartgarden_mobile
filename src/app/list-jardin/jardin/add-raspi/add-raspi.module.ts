import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRaspiPageRoutingModule } from './add-raspi-routing.module';

import { AddRaspiPage } from './add-raspi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRaspiPageRoutingModule
  ],
  declarations: [AddRaspiPage]
})
export class AddRaspiPageModule {}
