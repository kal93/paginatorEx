import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ButtonComponent } from './button/button.component';
import { ButtonIntl } from './button/buttonIntl';
import { LocaleText } from './button/labels.locale';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginatorComponent,
    ButtonComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatButtonModule,
  ],
  providers: [ButtonIntl, LocaleText],
  bootstrap: [AppComponent]
})
export class AppModule { }
