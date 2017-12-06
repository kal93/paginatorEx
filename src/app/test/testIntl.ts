import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { LabelsModel } from './labels.model';

import * as trLabels from './labels.tr.json';
import * as enLabels from './labels.en.json';




/**
 * To modify the labels and text displayed, create a new instance of buttonIntl and
 * include it in a custom provider
 */
@Injectable()
export class TestIntl {
    /**
     * Stream that emits whenever the labels here are changed. Use this to notify
     * components if the labels have changed after initialization.
     */
    changes: Subject<void> = new Subject<void>();

    // buttonLabel: string ;

    toolTipLabel: LabelsModel;

    constructor() {

        this.toolTipLabel = new LabelsModel();

        const locale = document ['locale'] as string;
    switch (locale) {
        case 'tr':
                    this.toolTipLabel = JSON.parse(JSON.stringify(trLabels));
                    console.log(this.toolTipLabel);
            break;
        default:
                 this.toolTipLabel = JSON.parse(JSON.stringify(enLabels));
                 console.log(this.toolTipLabel);
            break;
    }
    }
}
