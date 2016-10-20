import { NgModule }from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { RentListRoutingModule } from './rent-list-routing.module'

import { RentListComponent } from './rent-list.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MenuService } from '../services/menu-service'
import { ListViewComponent } from './list-view/list-view.component';
import { FinalizeComponent } from './finalize/finalize.component';


@NgModule({
    imports: [
        SharedModule,
        RentListRoutingModule
    ],
    declarations: [ RentListComponent,
                    StatisticsComponent,
                    ListViewComponent,
                    FinalizeComponent ],
    providers: [ MenuService ]
})
export class RentListModule { }
