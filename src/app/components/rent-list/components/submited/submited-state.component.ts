import { Component, OnInit } from '@angular/core';

import { RentListService, MenuService, FinalizeForm } from '../../index';

@Component({
    selector: 'finalize',
    template: require('./submited-state.component.html'),
    styles: [ require('./submited-state.component.scss') ]
})
export class SubmitedStateComponent implements OnInit {

    constructor( private _rentListService: RentListService,
                 private _menuService: MenuService) { }

    ngOnInit() {
        setTimeout(() => {
            this._menuService.showMenu = false;
            this._rentListService.rentListHeader = 'Form Submitted';
        }, 0);
    }
}
