import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarSearchComponent } from './car-search/car-search.component';

// Routes
const routes: Routes = [
  { path: '', redirectTo: 'car-search', pathMatch: 'full' },
  { path: 'car-search', component: CarSearchComponent},
  { path: 'car-list', component: CarListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarListComponent,
    CarSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
