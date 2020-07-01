import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './views/main/main.component';
import { LoginFormModule } from '../login/modules/login-form/login-form.module';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {LoginComponent} from '../login/views/login/login.component';
import {RegistrationComponent} from '../login/views/registration/registration.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';


const routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [
    CommonModule,
    LoginFormModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    // RouterModule.forRoot(routes),
    RouterModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
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
