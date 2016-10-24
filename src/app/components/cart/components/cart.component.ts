import { Component, Input, OnInit } from '@angular/core';
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

export class CartComponent implements OnInit {

    rentAllTriggered: Boolean = false;

    @Input('selectedItem') selectedItem: ItemModel;

    constructor ( private _equipmentListService: EquipmentListService,
                  private _router: Router,
                  private _rentListService: RentListService,
                  private _cartService: CartService ) { }

    ngOnInit() {
        this._cartService.getItems();
    }

    goToDetails() {
        this._router.navigate(['/item-detail', this.selectedItem.id]);
    }

    rentAll(cart: ItemModel[]) {
        this._cartService.rentAll(cart);
        this.selectedItem = undefined;
    }

    deleteFromCollection(itemNum: number) {
        this._cartService.deleteSingleItem(itemNum);
        this._equipmentListService.collection[itemNum].limit++;
    }
}
