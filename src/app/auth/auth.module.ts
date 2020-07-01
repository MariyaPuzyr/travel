import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {ResetPasswordComponent} from './components/reset-password/reset-password.component';



@NgModule({
  declarations: [LoginComponent, RegistrationComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    RegistrationComponent,
    ResetPasswordComponent
  ]
})
export class AuthModule {
}
