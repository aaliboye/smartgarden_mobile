import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectJardinPage } from './select-jardin.page';

const routes: Routes = [
  {
    path: '',
    component: SelectJardinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectJardinPageRoutingModule {}
