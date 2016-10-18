import { Component, ViewEncapsulation } from '@angular/core';

// import { CartComponent, CartService } from '../cart';

import { ItemModel } from '../../models';
import { CommunicationService, HttpRequestsService } from '../../services';
// import { RentListService } from './components/rent-list';
import { SearchService } from '../search';
// import { ValidatorService } from './forms';


// import { ItemDetailComponent } from './components/item-detail';

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  styles: [ require('./app.component.scss') ],
  encapsulation: ViewEncapsulation.None
  // directives: [
  //              CartComponent,
  //              
  //              ],
  // providers: [ CartService,
  //              RentListService,
  //              ValidatorService ]
})

export class AppComponent {
  selectedItem: ItemModel;
  imgPath = `https://raw.githubusercontent.com/angular/angular.io
             /master/public/resources/images/logos/angular2/angular.png`;
  constructor( private _communicationService: CommunicationService,
               private _searchService: SearchService) {
    _communicationService.selectionConfirmed$.subscribe(
        selectedItem => { this.selectedItem = selectedItem; });
  }
}
