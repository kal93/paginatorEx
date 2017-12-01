import { Component,
  OnDestroy ,
  ChangeDetectionStrategy,
  ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ButtonIntl } from './buttonIntl';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnDestroy {
  private _intlChanges: Subscription;

  constructor(public _intl: ButtonIntl, private _changeDetectorRef: ChangeDetectorRef) {
          this._intlChanges = _intl.changes.subscribe(() => this._changeDetectorRef.markForCheck());
            // _intl.buttonLabel = 'Button';
      }

      ngOnDestroy () {
          this._intlChanges.unsubscribe();
      }
}
