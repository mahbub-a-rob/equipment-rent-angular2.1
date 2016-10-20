import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { StatisticsComponent,
         RentListComponent } from '../index';

const rentListRoutes: Routes = [
    { path: 'rent-list',  component: RentListComponent },
    { path: 'rent-list', component: RentListComponent, children: [
    //     { path: '', component: ListViewComponent },
    //     { path: 'list-view', component: ListViewComponent },
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