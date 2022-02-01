import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: '',
    loadChildren: () => import('./valid-phone/valid-phone.module').then( m => m.ValidPhonePageModule)
  },
  {
    path: 'list-jardin',
    loadChildren: () => import('./list-jardin/list-jardin.module').then( m => m.ListJardinPageModule)
  },
  {
    path: 'select-zone',
    loadChildren: () => import('./select-zone/select-zone.module').then( m => m.SelectZonePageModule)
  },
  {
    path: 'select-jardin',
    loadChildren: () => import('./select-jardin/select-jardin.module').then( m => m.SelectJardinPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
