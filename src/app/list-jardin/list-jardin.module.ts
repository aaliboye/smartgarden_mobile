import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListJardinPageRoutingModule } from './list-jardin-routing.module';

import { ListJardinPage } from './list-jardin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListJardinPageRoutingModule
  ],
  declarations: [ListJardinPage]
})
export class ListJardinPageModule {}
