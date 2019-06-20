import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule, MatSelectModule, MatInputModule, MatRadioModule, MatCheckboxModule } from '@angular/material';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarSearchComponent } from './car-search/car-search.component';
import { SearchBoxComponent } from './search-box/search-box.component';

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
    CarSearchComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
