import { Injectable } from '@angular/core';

import { ItemModel } from '../../../models';

import { Observable } from 'rxjs/Rx';
import { Subscriber } from 'rxjs/Subscriber';

import { HttpRequestsService } from './../../../services/http/http-requests.service';


const itemsUrl: string = '/app/items';

@Injectable()
export class CartService {

    errorMessage: string;
    public collection: ItemModel[] = [];
    public itemsUrl: string = '/app/items/cart';

    constructor(
        private _httpRequestsService: HttpRequestsService
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
