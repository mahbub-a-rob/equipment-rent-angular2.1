import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';

import { CartService,
         EquipmentListService,
         ItemModel} from '../../index';

@Component({
    selector: 'single-item',
    template: require('./single-item.component.html'),
    styles: [ require('./single-item.component.scss') ]
})
export class SingleItemComponent {

    @Input('singleItem') singleItem: ItemModel;

    constructor(private _router: Router,
                private _cartService: CartService,
                private _equipmentList: EquipmentListService) { }

    addToCart(rentedItem: ItemModel) {
        this._cartService.collection.push(this.singleItem);
        this._equipmentList.reduceFromCollection(this.singleItem);
        console.log(this._equipmentList.collection[this.singleItem.id].limit);
    }   

    goToDetails() {
        this._router.navigate(['/item-detail', this.singleItem.id]);
    }
}
