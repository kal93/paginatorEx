import { Component, OnInit } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  constructor(private _intl: MatPaginatorIntl) {
    _intl.nextPageLabel = 'Sonraki Sayfa';
    _intl.previousPageLabel = 'Önceki sayfa';
  }

  ngOnInit() {
  }

}
