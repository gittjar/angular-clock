import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';

// Locale
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFi from '@angular/common/locales/fi';

registerLocaleData(localeFi);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DatePipe, { provide: LOCALE_ID, useValue: 'fi' }], // this provides
  bootstrap: [AppComponent]
})
export class AppModule { }
