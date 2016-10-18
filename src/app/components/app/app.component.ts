import { Component, ViewEncapsulation } from '@angular/core';
// import { ROUTER_DIRECTIVES } from '@angular/router';

// import { CartComponent, CartService } from '../cart';

import { ItemModel } from '../../models';

// import { EquipmentComponent, EquipmentListService } from './components/equipment';
import { CommunicationService, HttpRequestsService } from './../../services';
// import { RentListService } from './components/rent-list';
// import { SearchService } from './components/search';
// import { ValidatorService } from './forms';


// import { ItemDetailComponent } from './components/item-detail';
// import { SearchComponent } from './components/search';

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  styles: [ require('./app.component.scss') ],
  encapsulation: ViewEncapsulation.None
  // directives: [EquipmentComponent,
  //              CartComponent,
  //              ROUTER_DIRECTIVES,
  //              SearchComponent],
  // providers: [ CommunicationService,
  //              CartService,
  //              RentListService,
  //              EquipmentListService,
  //              ROUTER_DIRECTIVES,
  //              SearchService,
  //              HttpRequestsService,
  //              ValidatorService ]
})

export class AppComponent {
  selectedItem: ItemModel;
  // imgPath = `https://raw.githubusercontent.com/angular/angular.io
  //            /master/public/resources/images/logos/angular2/angular.png`;
  constructor( private _communicationService: CommunicationService,
               ) {
    _communicationService.selectionConfirmed$.subscribe(
      selectedItem => { this.selectedItem = selectedItem; });
  }
  //private _searchService: SearchService
}
