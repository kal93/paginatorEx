import { Component, OnInit , Input, Output, EventEmitter, OnDestroy ,
  ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { TestIntl } from './testIntl';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


  private _intlChanges :Subscription;

     sqType: string;
    @Input() sqClass: string;
    @Input() sqValue: string;
    //@Input() sqName: string;

    @Input() sqDisabled: boolean;
    @Output() sqClick = new EventEmitter();

    constructor (private _intl : TestIntl , private _changeDetectorRef: ChangeDetectorRef ) {
         this._intlChanges = _intl.changes.subscribe(() => this._changeDetectorRef.markForCheck());

         
    }

    ngOnDestroy() {
        this._intlChanges.unsubscribe();
    }

    clickEvent() {
        this.sqClick.emit();
    }

  ngOnInit() {
  }

}
