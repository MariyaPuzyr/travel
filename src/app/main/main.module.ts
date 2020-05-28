import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './views/main/main.component';
import { LoginFormModule } from '../login/modules/login-form/login-form.module';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    LoginFormModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatButtonModule
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
