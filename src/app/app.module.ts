import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ZonaNorteComponent } from './components/zona-norte/zona-norte.component';
import { ZonaCentroComponent } from './components/zona-centro/zona-centro.component';
import { ZonaSurComponent } from './components/zona-sur/zona-sur.component';

@NgModule({
  declarations: [
    AppComponent,
    ZonaNorteComponent,
    ZonaCentroComponent,
    ZonaSurComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
