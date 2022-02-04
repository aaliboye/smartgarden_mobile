import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListJardinPage } from './list-jardin.page';

const routes: Routes = [
  {
    path: '',
    component: ListJardinPage
  },
  {
    path: 'jardin/:idjardin',
    loadChildren: () => import('./jardin/jardin.module').then( m => m.JardinPageModule)
  },
  {
    path: 'add-jardin',
    loadChildren: () => import('./add-jardin/add-jardin.module').then( m => m.AddJardinPageModule)
  },
  {
    path: 'edit-jardin/:idjardin',
    loadChildren: () => import('./edit-jardin/edit-jardin.module').then( m => m.EditJardinPageModule)
  },
  {
    path: 'zone',
    loadChildren: () => import('./zone/zone.module').then( m => m.ZonePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListJardinPageRoutingModule {}
