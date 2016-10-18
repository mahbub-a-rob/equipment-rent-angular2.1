// import { StatisticsComponent,
//          ListViewComponent,
//          rentListRoutes } from '../rent-list';
// import { rentListRoutes } from '../rent-list';

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EquipmentComponent }   from './../equipment/components/equipment.component';
import { ItemDetailComponent }      from './../item-detail/item-detail.component';
import { RentListComponent } from './../rent-list/components/rent-list.component'

const routes: Routes = [
    { path: '', redirectTo: '/equipment', pathMatch: 'full'},
    { path: 'equipment',  component: EquipmentComponent },
    { path: 'rent-list',  component: RentListComponent },
    { path: 'item-detail/:id', component: ItemDetailComponent },
    // rentListRoutes,
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

