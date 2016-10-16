import { NgModule }from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { EquipmentComponent } from './equipment.component';


@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [ EquipmentComponent ],
    // providers: [SearchService],
    exports: [ EquipmentComponent ],
})
export class EquipmentModule { }
