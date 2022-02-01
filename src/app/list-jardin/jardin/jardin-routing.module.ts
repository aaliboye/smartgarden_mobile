import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JardinPage } from './jardin.page';

const routes: Routes = [
  {
    path: '',
    component: JardinPage
  },
  {
    path: 'add-zone',
    loadChildren: () => import('./add-zone/add-zone.module').then( m => m.AddZonePageModule)
  },
  {
    path: 'edit-zone/:id',
    loadChildren: () => import('./edit-zone/edit-zone.module').then( m => m.EditZonePageModule)
  },
  {
    path: 'add-raspi',
    loadChildren: () => import('./add-raspi/add-raspi.module').then( m => m.AddRaspiPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JardinPageRoutingModule {}
