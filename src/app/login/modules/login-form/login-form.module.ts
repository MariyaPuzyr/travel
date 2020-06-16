import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxMatIntlTelInputModule} from 'ngx-mat-intl-tel-input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


import { LoginFormComponent } from './components/login-form/login-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MaterialAppModule} from '../../../ngmaterial.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCheckboxModule,
    NgxMatIntlTelInputModule,
    MaterialAppModule
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
