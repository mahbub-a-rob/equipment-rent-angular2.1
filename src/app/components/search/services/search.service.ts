import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
    public searchValue: string = '';
    public isActive: boolean;
}
