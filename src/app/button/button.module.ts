
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button.component';
import { ButtonIntl } from './buttonIntl';
import { LocaleText } from './labels.locale';


@NgModule({
 imports: [
   CommonModule,
   MatButtonModule,
 ],
 exports: [ ButtonComponent ],
 declarations: [ ButtonComponent ],
 providers: [ ButtonIntl , LocaleText ],
})
export class MatPaginatorModule { }
