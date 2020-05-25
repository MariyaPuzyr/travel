import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MainModule } from './main/main.module';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    CoreModule,
    MainModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
