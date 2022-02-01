import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditJardinPage } from './edit-jardin.page';

const routes: Routes = [
  {
    path: '',
    component: EditJardinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditJardinPageRoutingModule {}
