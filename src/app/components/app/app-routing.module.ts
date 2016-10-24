import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EquipmentComponent }   from './../equipment/components/equipment.component';
import { ItemDetailComponent }      from './../item-detail/item-detail.component';
import { RentListComponent,
         ListViewComponent } from './../rent-list';

const routes: Routes = [
    { path: '', redirectTo: '/equipment', pathMatch: 'full'},
    { path: 'equipment',  component: EquipmentComponent },
    { path: 'rent-list',  component: RentListComponent, children: [
       { path: '', component: ListViewComponent }
    ] },
    { path: 'item-detail/:id', component: ItemDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

