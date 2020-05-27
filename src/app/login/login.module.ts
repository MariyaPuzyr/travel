import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LoginComponent} from './views/login/login.component';

import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './modules/login-form/components/login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  exports: [
    LoginFormComponent
  ],
  providers: [],
})
export class LoginModule { }
