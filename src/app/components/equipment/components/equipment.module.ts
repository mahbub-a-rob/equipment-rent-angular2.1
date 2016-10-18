import { NgModule }from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { EquipmentComponent,
         SingleItemComponent } from '../index';

import { EquipmentListService } from '../index';


@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [ EquipmentComponent,
                    SingleItemComponent ],
    exports: [ EquipmentComponent,
               SingleItemComponent ],
    providers: [ EquipmentListService ],
        // providers: [SearchService],
})
export class EquipmentModule { }
