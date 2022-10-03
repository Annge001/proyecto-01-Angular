import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ZonaNorteComponent } from './components/zona-norte/zona-norte.component';
import { ZonaCentroComponent } from './components/zona-centro/zona-centro.component';
import { ZonaSurComponent } from './components/zona-sur/zona-sur.component';
import { InterpolacionesComponent } from './components/interpolaciones/interpolaciones.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { PadreComponent } from './components/ejComunicacionComponentes/padre/padre.component';
import { FormularioComponent } from './components/ejComunicacionComponentes/formulario/formulario.component';
import { TablaComponent } from './components/ejComunicacionComponentes/tabla/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    ZonaNorteComponent,
    ZonaCentroComponent,
    ZonaSurComponent,
    InterpolacionesComponent,
    DirectivasComponent,
    NavbarComponent,
    ContentComponent,
    PadreComponent,
    FormularioComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
