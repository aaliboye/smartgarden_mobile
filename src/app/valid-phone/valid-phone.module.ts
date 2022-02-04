import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidPhonePageRoutingModule } from './valid-phone-routing.module';

import { ValidPhonePage } from './valid-phone.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    ValidPhonePageRoutingModule
  ],
  declarations: [ValidPhonePage],
})
export class ValidPhonePageModule {}
