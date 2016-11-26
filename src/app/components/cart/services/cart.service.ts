import { Injectable } from '@angular/core';

import { ItemModel } from '../../../models';

import { Observable } from 'rxjs/Rx';
import { Subscriber } from 'rxjs/Subscriber';

import { HttpRequestsService, SocketIoService } from './../../../services';

const itemsUrl: string = '/app/items/cart';

@Injectable()
export class CartService {

    errorMessage: string;
    public collection: ItemModel[] = [];
    public deleteItemUrl: string = '/app/items/reduce';

    constructor(
        private _httpRequestsService: HttpRequestsService,
        private _socketIoService: SocketIoService ) { }

    public deleteFromCart(singleItem: ItemModel, itemNum: number, queryString: string) {
        this._httpRequestsService.postToServer(singleItem, queryString)
            .subscribe(
            (item) => {
                this.collection.splice(itemNum, 1);
                this._socketIoService.socket.emit('addToItemLimit', item);
            })
    }
}
