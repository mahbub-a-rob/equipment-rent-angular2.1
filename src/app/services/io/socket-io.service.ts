import { Injectable } from '@angular/core';

import { ItemModel } from '../../models';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

let io = require('../../../../node_modules/socket.io-client/socket.io.js');

@Injectable()
export class SocketIoService {

    errorMessage: string;
    singleItem: ItemModel;
    
    public socket:any = null;

    constructor( ) {
                this.socket = io.connect('http://localhost:8080');

                this.socket.on('substraction', (item: ItemModel) => {
                    //this.collection[item.id].limit--;
                    console.log('got request from service about substraction');
                })

                this.socket.on('addToItemLimit', (item: ItemModel) => {
                    //this.collection[item.id].limit++;
                    console.log('got request from service about addToItemLimit');
                })
    }

}
