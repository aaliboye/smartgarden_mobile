import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddJardinPage } from './add-jardin.page';

const routes: Routes = [
  {
    path: '',
    component: AddJardinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddJardinPageRoutingModule {}
