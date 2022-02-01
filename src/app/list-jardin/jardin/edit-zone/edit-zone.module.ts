import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditZonePageRoutingModule } from './edit-zone-routing.module';

import { EditZonePage } from './edit-zone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditZonePageRoutingModule
  ],
  declarations: [EditZonePage]
})
export class EditZonePageModule {}
