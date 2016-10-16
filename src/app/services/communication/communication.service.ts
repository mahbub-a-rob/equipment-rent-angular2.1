import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { ItemModel } from '../index.ts';

@Injectable()
export class CommunicationService {

  // Observable string sources
  private selectionConfirmed = new Subject<ItemModel>();
  private sendRentedItem = new Subject<ItemModel>();

  // Observable string streams

  selectionConfirmed$ = this.selectionConfirmed.asObservable();
  sendRentedItem$ = this.sendRentedItem.asObservable();

  // Service message commands

  confirmSelection(selectedItem: ItemModel) {
    this.selectionConfirmed.next(selectedItem);
  }

  rentItem(rentedItem: ItemModel) {
    this.sendRentedItem.next(rentedItem);
  }
}
