import { Component } from '@angular/core';
import { RentListService, MenuService } from '../../index';

@Component({
    selector: 'statistics',
    template: require('./statistics.component.html'),
    styles: [ require('./statistics.component.scss')]
})
export class StatisticsComponent {
    constructor( private _rentListService: RentListService,
                 private _menuService: MenuService) {}

    ngOnInit() {
        setTimeout(() => {
            this._menuService.showIfHidden();
            this._rentListService.rentListHeader = 'Rent List';
        }, 0);
    }

    countAllItems(): number {
        let itemsNum: number = 0;
        for (let singleRent of this._rentListService.collection) {
            itemsNum += singleRent.list.length;
        }
        return itemsNum;
    }
}
