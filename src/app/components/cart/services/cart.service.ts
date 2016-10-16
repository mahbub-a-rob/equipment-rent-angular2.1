import { Injectable } from '@angular/core';

import { ItemModel } from '../index';

import { Observable } from 'rxjs/Rx';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class CartService {
    public collection: ItemModel[] = [];
}
