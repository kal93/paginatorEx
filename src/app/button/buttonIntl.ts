
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/**
 * To modify the labels and text displayed, create a new instance of buttonIntl and
 * include it in a custom provider
 */
@Injectable()
export class ButtonIntl {
    /**
     * Stream that emits whenever the labels here are changed. Use this to notify
     * components if the labels have changed after initialization.
     */
    changes: Subject<void> = new Subject<void>();

    /** A label for the button name. */
    buttonLabel = 'Crisis on Infinite Earths';
}
