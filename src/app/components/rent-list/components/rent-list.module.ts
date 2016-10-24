import { NgModule }from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { RentListRoutingModule } from './rent-list-routing.module'

import { RentListComponent } from './rent-list.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MenuService } from '../services/menu-service'
import { ListViewComponent } from './list-view/list-view.component';
import { FinalizeComponent } from './finalize/finalize.component';
import { SubmitedStateComponent } from './submited/submited-state.component';

import { FinalizeForm, ValidatorService } from '../../../forms';


@NgModule({
    imports: [
        SharedModule,
        RentListRoutingModule,
    ],
    declarations: [ RentListComponent,
                    StatisticsComponent,
                    ListViewComponent,
                    FinalizeComponent,
                    SubmitedStateComponent ],
    providers: [ MenuService, FinalizeForm, ValidatorService ]
})
export class RentListModule { }
