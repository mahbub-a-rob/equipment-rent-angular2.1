import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpRequestsService } from '../../../services/http/http-requests.service';
import { ItemModel } from '../index';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

const itemsUrl: string = '/app/items';
const updateItemsUrl: string = '/app/items/update';

@Injectable()
export class EquipmentListService {

    formActivated: boolean;
    errorMessage: string;
    singleItem: ItemModel;
    oneItem: ItemModel;

    public collection: ItemModel[] = [];

    constructor( private _httpRequestsService: HttpRequestsService ) {
        this.getItems();
    }

    public getItems() {
        this._httpRequestsService.getItemsFromServer()
                          .subscribe(
                            (items) => {
                                this.collection = items;
                            },
                            error =>  this.errorMessage = <any>error);
    }

    public getOneItem(id: number) {
        this._httpRequestsService.getItemsFromServer()
                          .subscribe(
                            items => this.oneItem = items[id],
                            error =>  this.errorMessage = <any>error);
    }

    public addToCollection(newItemName: ItemModel) {
        this._httpRequestsService.postToServer(newItemName, itemsUrl)
                          .subscribe(
                              item => this.collection = this.collection.concat(item));
    }

    public reduceFromCollection(singleItem: ItemModel) {
        this._httpRequestsService.updateNumber(singleItem, updateItemsUrl)
                            .subscribe(
                                item => this.collection[item.id].limit-- )
    }
}
