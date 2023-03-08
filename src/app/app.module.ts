import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { HomeComponent } from './core/pages/components/home/home.component';
import { SobreComponent } from './core/pages/components/sobre/sobre.component';
import { ContatoComponent } from './core/pages/components/contato/contato.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SobreComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // GoogleMapsModule

  ],
  providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
