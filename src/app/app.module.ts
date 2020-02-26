import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GaugeTestComponent } from './gauge-test/gauge-test.component';
import { GaugeModule } from 'angular-gauge';

@NgModule({
  declarations: [
    AppComponent,
    GaugeTestComponent
  ],
  imports: [
    BrowserModule,
    GaugeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
