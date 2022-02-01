import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddJardinPageRoutingModule } from './add-jardin-routing.module';

import { AddJardinPage } from './add-jardin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddJardinPageRoutingModule
  ],
  declarations: [AddJardinPage]
})
export class AddJardinPageModule {}
