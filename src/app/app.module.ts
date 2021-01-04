import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { CreatorComponent } from './creator/creator.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    CreatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
