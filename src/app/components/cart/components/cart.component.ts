import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../services/cart.service';
import { EquipmentListService } from '../../equipment/services/equipment-list.service';
import { RentListService } from '../../rent-list';
import { ItemModel } from '../../../models';

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

    deleteFromCollection(item: ItemModel, itemNum: number) {
        let deletedId = this._cartService.collection[itemNum].id;
        this._cartService.deleteFromCart(item, itemNum);
        this._equipmentListService.collection[item.id].limit++;
    }
}
