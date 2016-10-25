import { Injectable } from '@angular/core';

import { ItemModel } from '../../../models';

import { Observable } from 'rxjs/Rx';
import { Subscriber } from 'rxjs/Subscriber';

import { HttpRequestsService } from './../../../services/http/http-requests.service';

let io = require('../../../../../node_modules/socket.io-client/socket.io.js');

const itemsUrl: string = '/app/items/cart';

@Injectable()
export class CartService {

    errorMessage: string;
    public socket:any = null;
    public collection: ItemModel[] = [];
    public deleteItemUrl: string = '/app/items/reduce';

    constructor(
        private _httpRequestsService: HttpRequestsService) { 
                this.socket = io.connect('http://localhost:8080');
         }

    public deleteFromCart(singleItem: ItemModel, itemNum: number) {
        this._httpRequestsService.postToServer(singleItem, this.deleteItemUrl)
            .subscribe(
            (item) => {
                this.collection.splice(itemNum, 1);
                this.socket.emit('addToItemLimit', item);
            })
    }
}
