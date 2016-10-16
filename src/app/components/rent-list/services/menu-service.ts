import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
    public showMenu: boolean = true;

    showIfHidden() {
        if (!this.showMenu) this.showMenu = true;
    }
}
