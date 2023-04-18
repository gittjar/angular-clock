import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

// Locale
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFi from '@angular/common/locales/fi';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

registerLocaleData(localeFi);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [DatePipe, { provide: LOCALE_ID, useValue: 'fi' }], // this provides FIN 
  bootstrap: [AppComponent]
})
export class AppModule { }
