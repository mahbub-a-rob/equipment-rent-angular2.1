import { NgModule }from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';

import { EquipmentComponent,
         SingleItemComponent,
         AddItemComponent,
         AddFormComponent } from '../index';

import { EquipmentListService } from '../index';


@NgModule({
    imports: [
        SharedModule,
        PipesModule
    ],
    declarations: [ EquipmentComponent,
                    SingleItemComponent,
                    AddItemComponent,
                    AddFormComponent ],
    exports: [ EquipmentComponent ],
    providers: [ EquipmentListService ],
        // providers: [SearchService],
})
export class EquipmentModule { }
