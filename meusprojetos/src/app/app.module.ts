import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MeuPrimeiroComponent } from './meuprimeiro/meuprimeiro.component';
import { HelloComponent } from './hello/hello.component'

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
