import { Injectable } from '@angular/core';

import { RentListModel, ItemModel } from '../index';

import { Observable } from 'rxjs/Rx';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class RentListService {


    rentListHeader: string = 'Rent List';
    public collection: RentListModel[] = [];
    public objectListed = {};

    addToCollection(cart: ItemModel[]) {
        this.collection.push({who: 'user', list: cart});
    }
}
