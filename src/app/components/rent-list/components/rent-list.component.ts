import { Component } from '@angular/core';
import { RentListService, MenuService } from '../index';

@Component({
    selector: 'rent-list',
    template: require('./rent-list.component.html'),
    styles: [ require('./rent-list.component.scss') ]
})
export class RentListComponent {

    constructor( private _rentListService: RentListService,
                 private _menuService: MenuService ) { }
}
