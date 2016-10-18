import { NgModule }from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CartComponent } from './components/cart.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [ CartComponent ],
    exports: [ CartComponent ],
})
export class CartModule { }
