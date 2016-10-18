import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { CartService,
         EquipmentListService,
         RentListService,
         ItemModel } from '../index';

@Component({
    selector: 'cart',
    template: require('./cart.component.html'),
    styles: [ require('./cart.component.scss') ]
})

export class CartComponent {

    rentAllTriggered: Boolean = false;

    @Input('selectedItem') selectedItem: ItemModel;

    constructor ( private _equipmentListService: EquipmentListService,
                  private _router: Router,
                  private _rentListService: RentListService,
                  private _cartService: CartService ) { }

    goToDetails() {
        this._router.navigate(['/item-detail', this.selectedItem.id]);
    }

    rentAll(cart: ItemModel[]) {
        this._rentListService.addToCollection(cart);
        this._cartService.collection = [];
        this.selectedItem = undefined;
    }

    deleteFromCollection(itemNum: number) {
        let deletedId = this._cartService.collection[itemNum].id;
        this._cartService.collection.splice(itemNum, 1);
        this._equipmentListService.collection[deletedId].limit++;
    }
}
