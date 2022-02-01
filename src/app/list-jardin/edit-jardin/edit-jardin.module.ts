import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditJardinPageRoutingModule } from './edit-jardin-routing.module';

import { EditJardinPage } from './edit-jardin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditJardinPageRoutingModule
  ],
  declarations: [EditJardinPage]
})
export class EditJardinPageModule {}
