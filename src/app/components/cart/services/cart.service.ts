import { Injectable } from '@angular/core';

import { ItemModel } from '../index';

import { Observable } from 'rxjs/Rx';
import { Subscriber } from 'rxjs/Subscriber';

import { HttpRequestsService } from './../../../services/http/http-requests.service';
import { EquipmentListService } from '../../equipment/services/equipment-list.service';


const itemsUrl: string = '/app/items';

@Injectable()
export class CartService {

    errorMessage: string;
    public collection: ItemModel[] = [];
    public itemsUrl: string = '/app/items/cart';

    constructor(
        private _httpRequestsService: HttpRequestsService,
        private _equipmentListService: EquipmentListService
        ) {
        this.getItems();
    }

    public getItems() {
        this._httpRequestsService.getItemsFromServer(this.itemsUrl)
                          .subscribe(
                            (items) => {
                                items.forEach((element: ItemModel) => {
                                    this.collection.push(element);
                                });
                            },
                            error =>  this.errorMessage = <any>error);
    }
}
