import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { MainModule } from './main/main.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAppModule } from './ngmaterial.module';
import {LoginFormModule} from './login/modules/login-form/login-form.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {AuthModule} from './auth/auth.module';
import { MindMapComponent } from './mind-map/mind-map.component';


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
    AuthModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    MindMapComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
