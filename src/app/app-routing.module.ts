import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import { MainComponent } from './main/views/main/main.component';

const routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent,
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
