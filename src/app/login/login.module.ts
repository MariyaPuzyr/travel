import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './views/login/login.component';

import { LoginRoutingModule } from './login-routing.module';
import { LoginFormModule } from './modules/login-form/login-form.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    LoginFormModule
  ],
  declarations: [
    LoginComponent,
  ],

  providers: [],
})
export class LoginModule { }
