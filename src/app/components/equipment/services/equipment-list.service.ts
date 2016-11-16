import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpRequestsService, SocketIoService } from '../../../services';
import { CartService } from '../../cart/services/cart.service';

import { ItemModel } from '../index';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

let io = require('../../../../../node_modules/socket.io-client/socket.io.js');

const itemsUrl: string = '/app/items';
const updateItemsUrl: string = '/app/items/update';

@Injectable()
export class EquipmentListService {

    formActivated: boolean;
    errorMessage: string;
    singleItem: ItemModel;
    
    public socket:any = null;

    public collection: ItemModel[] = [];

    constructor( private _httpRequestsService: HttpRequestsService,
                 private _cartService: CartService,
                 private _socketIoService: SocketIoService ) {
                this.getItems();

                this._socketIoService.socket.on('substraction', (item: ItemModel) => {
                    this.collection[item.id].limit--;
                })

                this._socketIoService.socket.on('addToItemLimit', (item: ItemModel) => {
                    this.collection[item.id].limit++;
                })
    }

    public getItems() {
        this._httpRequestsService.getItemsFromServer(itemsUrl)
                          .subscribe(
                            (items) => {
                                this.collection = items;
                            },
                            error =>  this.errorMessage = <any>error);
    }

    public addToCollection(newItemName: ItemModel) {
        this._httpRequestsService.postToServer(newItemName, itemsUrl)
                          .subscribe(
                              item => this.collection = this.collection.concat(item));
    }

    public addToCart(singleItem: ItemModel) {
        this._httpRequestsService.postToServer(singleItem, updateItemsUrl)
                    .subscribe(
                        (item) => {
                            console.log('equipment list service resp:', item);
                            this._cartService.collection.push(singleItem);
                            this.collection[item.id].limit--;
                            this._socketIoService.socket.emit('substraction', item);
                        } )
    }
}
