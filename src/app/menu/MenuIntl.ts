
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { MenuLabelsModel } from './menuLabels.model';

import * as trLocaleText from './labels.tr.json';
import * as enLocaleText from './labels.en.json';


/**
 * To modify the labels and text displayed, create a new instance of buttonIntl and
 * include it in a custom provider
 */
@Injectable()
export class MenuIntl {
    /**
     * Stream that emits whenever the labels here are changed. Use this to notify
     * components if the labels have changed after initialization.
     */
    changes: Subject<void> = new Subject<void>();

    // buttonLabel: string ;

    menuLabels: MenuLabelsModel;

    constructor() {

        this.menuLabels = new MenuLabelsModel();

        const locale = document ['locale'] as string;
    switch (locale) {
        case 'tr':
                    this.menuLabels = JSON.parse(JSON.stringify(trLocaleText));
                    console.log(this.menuLabels);
            break;
        default:
                 this.menuLabels = JSON.parse(JSON.stringify(enLocaleText));
                 console.log(this.menuLabels);
            break;
    }
    }
}
