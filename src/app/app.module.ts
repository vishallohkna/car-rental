import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarSearchComponent } from './car-search/car-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarListComponent,
    CarSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
