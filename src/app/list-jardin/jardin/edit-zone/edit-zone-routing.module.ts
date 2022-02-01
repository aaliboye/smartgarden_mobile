import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditZonePage } from './edit-zone.page';

const routes: Routes = [
  {
    path: '',
    component: EditZonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditZonePageRoutingModule {}
