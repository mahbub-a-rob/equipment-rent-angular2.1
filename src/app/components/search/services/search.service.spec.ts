import { addProviders, inject } from '@angular/core/testing';
import { SearchService } from '../index';

describe('Search Service:', () => {

    beforeEach(() => {
        addProviders([
            SearchService
        ]);
    });

    it('initial value of isActive should be undefined', 
        inject([SearchService], (searchService: SearchService) => {
            expect(searchService.isActive).toBeUndefined
        })
    )

    it('initial value of searchValue should be empty string', 
        inject([SearchService], (searchService: SearchService) => {
            expect(searchService.searchValue).toBe('');
        })
    )

});