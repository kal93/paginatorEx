import { Component,
  OnDestroy ,
  ChangeDetectionStrategy,
  ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MenuIntl } from './MenuIntl';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  private _intlChanges: Subscription;

  constructor(public _intl: MenuIntl, private _changeDetectorRef: ChangeDetectorRef) {
    this._intlChanges = _intl.changes.subscribe(() => this._changeDetectorRef.markForCheck());

}

ngOnDestroy () {
    this._intlChanges.unsubscribe();
}

}
