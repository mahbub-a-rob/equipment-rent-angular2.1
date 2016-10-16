import { NgModule }from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CartComponent } from './components/cart.component';
// import { SearchService } from './services/search.service';


@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [ CartComponent ],
    // providers: [SearchService],
    exports: [ CartComponent ],
})
export class CartModule { }
