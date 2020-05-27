import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './views/main/main.component';
import {LoginFormComponent} from '../login/modules/login-form/components/login-form/login-form.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    MainComponent,
    LoginFormComponent
  ],
  providers: [],
  exports: [
    HeaderComponent,
    MainComponent,
    LoginFormComponent
  ]
})
export class MainModule { }
