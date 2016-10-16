import { NgModule }from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { RentListComponent } from './rent-list.component';


@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [ RentListComponent ],
    // providers: [SearchService],
    exports: [ RentListComponent ],
})
export class RentListModule { }
