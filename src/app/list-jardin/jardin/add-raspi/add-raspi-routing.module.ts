import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRaspiPage } from './add-raspi.page';

const routes: Routes = [
  {
    path: '',
    component: AddRaspiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRaspiPageRoutingModule {}
