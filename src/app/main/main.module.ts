import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './views/main/main.component';
import { LoginFormModule } from '../login/modules/login-form/login-form.module';


@NgModule({
  imports: [
    CommonModule,
    LoginFormModule
  ],
  declarations: [
    HeaderComponent,
    MainComponent
  ],
  providers: [],
  exports: [
    HeaderComponent,
    MainComponent
  ]
})
export class MainModule { }
