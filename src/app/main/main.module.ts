import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './views/main/main.component';
import { LoginFormModule } from '../login/modules/login-form/login-form.module';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  imports: [
    CommonModule,
    LoginFormModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule
  ],
  declarations: [
    HeaderComponent,
    MainComponent,
    ModalDialogComponent
  ],
  providers: [],
  exports: [
    HeaderComponent,
    MainComponent
  ]
})
export class MainModule { }
