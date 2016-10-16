import { provideRouter, RouterConfig } from '@angular/router';
import { EquipmentComponent } from '../equipment';
import { RentListComponent,
         StatisticsComponent,
         ListViewComponent,
         rentListRoutes } from '../rent-list';
import { ItemDetailComponent } from '../item-detail';

const routes: RouterConfig = [
    { path: '', redirectTo: '/equipment', pathMatch: 'full'},
    { path: 'equipment',  component: EquipmentComponent },
    { path: 'item-detail/:id', component: ItemDetailComponent },
    ...rentListRoutes,
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
