import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpRequestsService } from '../../../services/http/http-requests.service';
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
    itemsUrl: string = '/app/items';
    
    public socket:any = null;

    public collection: ItemModel[] = [];

    constructor( private _httpRequestsService: HttpRequestsService ) {
        this.getItems();
        this.socket = io.connect('http://localhost:8080');

        this.socket.on('substraction', (item: ItemModel) => {
            this.collection[item.id].limit--;
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

    public reduceFromCollection(singleItem: ItemModel) {
        this._httpRequestsService.postToServer(singleItem, updateItemsUrl)
                    .subscribe(
                        (item) => {
                            this.collection[item.id].limit--;
                            this.socket.emit('substraction', item)
                        } )
    }
}
