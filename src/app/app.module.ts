import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainModule } from './main/main.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAppModule } from './ngmaterial.module';
import {LoginFormModule} from './login/modules/login-form/login-form.module';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    MainModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialAppModule,
    LoginFormModule,
    FormsModule,
    MatInputModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
