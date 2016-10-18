import { Pipe, PipeTransform } from '@angular/core';
import { ItemModel } from '../index';


@Pipe({name: 'search'})
export class SearchPipe implements PipeTransform {
  private filtration(allItems: ItemModel[], searchValue: string) {
      return searchValue === undefined || searchValue === '' ?
                             allItems :
                             allItems.filter(item => this.search(item, searchValue));
    }

  transform(allItems: ItemModel[], searchValue: string): ItemModel[] {
    return allItems ? this.filtration(allItems, searchValue) : [];
  }

  search(item: ItemModel, searchValue: string) {
      let matchSearched = new RegExp(searchValue, 'gi');
      return item.name.match(matchSearched) ? true : false;
  }
}
