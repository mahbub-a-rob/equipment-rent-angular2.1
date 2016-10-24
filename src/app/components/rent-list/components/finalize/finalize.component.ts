import { Component, OnInit } from '@angular/core';
// import {
//   REACTIVE_FORM_DIRECTIVES,
// } from '@angular/forms';
import { Router } from '@angular/router';

import { RentListService, MenuService, FinalizeForm } from '../../index';


@Component({
    selector: 'finalize',
    template: require('./finalize.component.html'),
    styles: [ require('./finalize.component.scss') ],
})
export class FinalizeComponent implements OnInit {

    agreed: boolean = false;
    showError: boolean = false;

    constructor( private _rentListService: RentListService,
                 private _menuService: MenuService,
                 private _form: FinalizeForm,
                 private _router : Router) { }

    ngOnInit() {
        setTimeout(() => {
            this._menuService.showMenu = false;
            this._rentListService.rentListHeader = 'Finalize form';
        }, 0);
    }

    agreement() {
        this.agreed = !this.agreed;
    }

    onSubmit(validationStatus: boolean) {
      if (validationStatus) {
          this._rentListService.collection = [];
          this._router.navigate(['/rent-list/submited']);
      } else {
        this.showError = true;
      }
    }

}
