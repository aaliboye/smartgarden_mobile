import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectJardinPageRoutingModule } from './select-jardin-routing.module';

import { SelectJardinPage } from './select-jardin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectJardinPageRoutingModule
  ],
  declarations: [SelectJardinPage]
})
export class SelectJardinPageModule {}
