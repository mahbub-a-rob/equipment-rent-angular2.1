import { Component } from '@angular/core';
// import { ROUTER_DIRECTIVES } from '@angular/router';
// import { RentListService, MenuService } from '../index';

@Component({
    selector: 'rent-list',
    template: require('./rent-list.component.html'),
    styles: [ require('./rent-list.component.scss') ]
    // directives: [ ROUTER_DIRECTIVES ],
    // providers: [ MenuService ]
})
export class RentListComponent {

    // constructor( private _rentListService: RentListService,
    //              private _menuService: MenuService ) { }
}
