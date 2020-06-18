import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginComponent} from './views/login/login.component';

import {LoginRoutingModule} from './login-routing.module';
import {LoginFormModule} from './modules/login-form/login-form.module';
import {RegistrationComponent} from './views/registration/registration.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    LoginFormModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
  ],

  providers: [],
})
export class LoginModule {
}
