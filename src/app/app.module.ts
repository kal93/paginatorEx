import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ButtonComponent } from './button/button.component';
import { ButtonIntl } from './button/buttonIntl';
import { MenuIntl } from './menu/MenuIntl';
import { LocaleText } from './button/labels.locale';
import { TestComponent } from './test/test.component';
import { TestIntl } from './test/testIntl';
import { MenuComponent } from './menu/menu.component';
import { I18nExampleComponent } from './i18n-example/i18n-example.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginatorComponent,
    ButtonComponent,
    TestComponent,
    MenuComponent,
    I18nExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [ButtonIntl, LocaleText , TestIntl, MenuIntl],
  bootstrap: [AppComponent]
})
export class AppModule { }
