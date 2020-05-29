import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


import { LoginFormComponent } from './components/login-form/login-form.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
  ],
  declarations: [
    LoginFormComponent
  ],
  exports: [
    LoginFormComponent
  ],
  providers: [],
})
export class LoginFormModule { }
