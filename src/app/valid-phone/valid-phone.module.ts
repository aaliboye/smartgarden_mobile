import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidPhonePageRoutingModule } from './valid-phone-routing.module';

import { ValidPhonePage } from './valid-phone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidPhonePageRoutingModule
  ],
  declarations: [ValidPhonePage]
})
export class ValidPhonePageModule {}
