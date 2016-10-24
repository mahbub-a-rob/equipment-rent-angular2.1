import { NgModule }from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ItemDetailComponent } from './item-detail.component';

import { EquipmentListService } from '../equipment/services/equipment-list.service';
import { HttpRequestsService } from '../../services';


@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [ ItemDetailComponent ],
    exports: [ ItemDetailComponent ]
})
export class ItemDetailModule { }
