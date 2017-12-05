import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { ButtonLabelsModel } from './buttonLabels.model';

import * as trLocaleText from './labels.tr.json';
import * as enLocaleText from './labels.locale.json';


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

    // buttonLabel: string ;

    labelCollections: ButtonLabelsModel;

    constructor( ) {

        this.labelCollections = new ButtonLabelsModel();

        const locale = document ['locale'] as string;
    switch (locale) {
        case 'tr':
                    this.labelCollections = JSON.parse(JSON.stringify(trLocaleText));
                    console.log(this.labelCollections);
            break;
        default:
                 this.labelCollections = JSON.parse(JSON.stringify(enLocaleText));
                 console.log(this.labelCollections);
            break;
    }
    }
}
