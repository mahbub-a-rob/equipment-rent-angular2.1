// import { RentListComponent,
//          StatisticsComponent,
//          ListViewComponent,
//          rentListRoutes } from '../rent-list';

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentComponent }   from './../equipment/components/equipment.component';
import { ItemDetailComponent }      from './../item-detail/item-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/equipment', pathMatch: 'full'},
    { path: 'equipment',  component: EquipmentComponent }
    // { path: 'item-detail/:id', component: ItemDetailComponent },
    // ...rentListRoutes,
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

