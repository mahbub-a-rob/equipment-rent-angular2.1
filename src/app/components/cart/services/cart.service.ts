import { Injectable } from '@angular/core';

import { ItemModel } from '../../../models';

import { Observable } from 'rxjs/Rx';
import { Subscriber } from 'rxjs/Subscriber';

import { HttpRequestsService } from './../../../services/http/http-requests.service';


const itemsUrl: string = '/app/items/cart';

@Injectable()
export class CartService {

    errorMessage: string;
    public collection: ItemModel[] = [];
    public itemsUrl: string = '/app/items/cart';
    public deleteItemUrl: string = '/app/items/cart/reduce';

    constructor(
        private _httpRequestsService: HttpRequestsService) {  }

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

    public rentAll(cart: ItemModel[]) {
        this._httpRequestsService.rentAll(cart, itemsUrl)
                            .subscribe(
                                response => {
                                    this.collection = response;
                                },
                                error => this.errorMessage = <any>error);
    }

    public deleteSingleItem(deletedId: number){
        this._httpRequestsService.deleteSingle({id: deletedId}, this.deleteItemUrl)
                            .subscribe(
                                response => {
                                    this.collection.splice(response.id, 1);
                                },
                                error => this.errorMessage = <any>error);
    }
}
