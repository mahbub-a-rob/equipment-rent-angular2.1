import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';

import { EquipmentListService } from './../../services/equipment-list.service';
import { CartService } from '../../../cart';
import { ItemModel} from '../../index';

@Component({
    selector: 'single-item',
    template: require('./single-item.component.html'),
    styles: [ require('./single-item.component.scss') ]
})
export class SingleItemComponent {

    @Input('singleItem') singleItem: ItemModel;

    constructor(private _router: Router,
                private _equipmentList: EquipmentListService) { }

    addToCart(rentedItem: ItemModel) {
        this._equipmentList.addToCart(this.singleItem);
        //this._cartService.collection.push(this.singleItem);
    }   

    goToDetails() {
        this._router.navigate(['/item-detail', this.singleItem.id]);
    }
}
