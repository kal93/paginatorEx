import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

// this gets the label text from ts file
import { LocaleText } from './labels.locale';
// this gets the label text from json file
import * as localeText from './labels.locale.json';
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

    buttonLabel: string ;

    constructor( _localeText: LocaleText) {
        // get text from json starts below
        console.log ( typeof localeText + '\tlocaleText\t' + localeText);
        const labels = JSON.stringify(localeText);
        console.log(typeof labels + '\tlabels\t' + labels);
        const temp = JSON.parse(labels);
        console.log(typeof temp + '\ttemp\t' + temp);
        console.log(temp.tr.buttonLabel);
        // get text from json ends above


        const locale = document ['locale'] as string;
    switch (locale) {
        case 'tr':  // this.buttonLabel = _localeText.localeText.tr.buttonLabel;
                    this.buttonLabel = temp.tr.buttonLabel;
            break;
        default: // this.buttonLabel = _localeText.localeText.en.buttonLabel;
                 this.buttonLabel = temp.en.buttonLabel;
            break;
    }
    }
    // buttonLabel;
    // constructor() {
    // const locale = document['locale'] as string;
    // console.log(locale);
    // if ( locale === 'tr') {
    //     this.buttonLabel = 'Sonsuz Dünyada Kriz';
    // } else {

    // /** A label for the button name. */
    // this.buttonLabel = 'Crisis on Infinite Earths';
    //      }
    // }
}
