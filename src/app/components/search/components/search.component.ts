import { Component, OnInit } from '@angular/core';
import { SearchService } from '../index';

@Component({
    selector: 'search',
    template: require('./search.component.html'),
    styles: [ require('./search.component.scss') ]
})
export class SearchComponent {

    public searchValue: string;

    constructor( private _searchService: SearchService) {}

    sendValue(event: any) {
        this._searchService.searchValue = event.target.value;
    }

    clearSearch(event: any) {
        if (event.target.value === '') { this._searchService.searchValue = event.target.value; }
    }

    ngOnInit() {
       this.searchValue = this._searchService.searchValue;
    }
}
