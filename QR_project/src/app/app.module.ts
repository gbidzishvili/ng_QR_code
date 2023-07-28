import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QrComponent } from './qr/qr.component';
import { TextContentComponent } from './text-content/text-content.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    QrComponent,
    TextContentComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
