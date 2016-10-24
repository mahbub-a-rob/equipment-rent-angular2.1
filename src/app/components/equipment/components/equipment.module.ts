import { NgModule }from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';

import { EquipmentComponent,
         SingleItemComponent,
         AddItemComponent,
         AddFormComponent } from '../index';


@NgModule({
    imports: [
        SharedModule,
        PipesModule
    ],
    declarations: [ EquipmentComponent,
                    SingleItemComponent,
                    AddItemComponent,
                    AddFormComponent ],
    exports: [ EquipmentComponent ]
})
export class EquipmentModule { }
