import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';


@NgModule({
  declarations: [
    AppComponent,
    JsonFormatterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
