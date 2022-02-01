import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidPhonePage } from './valid-phone.page';

const routes: Routes = [
  {
    path: '',
    component: ValidPhonePage
  },
  {
    path: 'confirm-code',
    loadChildren: () => import('./confirm-code/confirm-code.module').then( m => m.ConfirmCodePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidPhonePageRoutingModule {}
