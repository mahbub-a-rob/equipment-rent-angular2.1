import { NgModule }from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';

import { EquipmentComponent,
         SingleItemComponent } from '../index';

import { EquipmentListService } from '../index';


@NgModule({
    imports: [
        SharedModule,
        PipesModule
    ],
    declarations: [ EquipmentComponent,
                    SingleItemComponent ],
    exports: [ EquipmentComponent ],
    providers: [ EquipmentListService ],
        // providers: [SearchService],
})
export class EquipmentModule { }
