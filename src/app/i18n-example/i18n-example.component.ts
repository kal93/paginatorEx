import { Component, OnInit } from '@angular/core';
import { MenuIntl } from '../menu/MenuIntl';


@Component({
  selector: 'app-i18n-example',
  templateUrl: './i18n-example.component.html',
  styleUrls: ['./i18n-example.component.css']
})
export class I18nExampleComponent implements OnInit {

  constructor(_intl:MenuIntl) {

    //  _intl.menuLabels = {
    //   "pinColumnText":"Maaz",
    //   "autoSizeColumnText":"Maaz",
    //   "resetColumnText":"Maaz",
    //   "toolPanelText":"Maaz"
    // };

  }

  ngOnInit() {
  }

}
