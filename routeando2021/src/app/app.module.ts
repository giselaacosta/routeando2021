import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidosComponent } from './general/page/bienvenidos/bienvenidos.component';
import { PageNotFoundComponent } from './general/page/page-not-found/page-not-found.component';
import { ContactoComponent } from './general/page/contacto/contacto.component';
import { CuadroComponent } from './general/componente/cuadro/cuadro.component';

@NgModule({ 
  declarations: [
    AppComponent,
    BienvenidosComponent,
    PageNotFoundComponent,
    ContactoComponent,
    CuadroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
