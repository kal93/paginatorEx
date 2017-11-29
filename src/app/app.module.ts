import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {MatPaginatorModule } from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginatorComponent,
    // MatPaginatorIntl
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    // MatPaginatorIntl
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
