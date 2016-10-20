import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { StatisticsComponent,
         RentListComponent,
         ListViewComponent } from '../index';

const rentListRoutes: Routes = [
    { path: 'rent-list', component: RentListComponent, children: [
        { path: 'list-view', component: ListViewComponent },
        { path: 'statistics', component: StatisticsComponent } ] }
    //     { path: 'finalize', component: FinalizeComponent },
    //     { path: 'submited', component: SubmitedStateComponent }
    // ] }
];

@NgModule({
    imports:  [ 
        RouterModule.forChild(rentListRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class RentListRoutingModule { }