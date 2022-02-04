import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmCodePageRoutingModule } from './confirm-code-routing.module';

import { ConfirmCodePage } from './confirm-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ConfirmCodePageRoutingModule
  ],
  declarations: [ConfirmCodePage]
})
export class ConfirmCodePageModule {}
