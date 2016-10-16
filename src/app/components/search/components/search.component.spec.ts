import { addProviders, inject } from '@angular/core/testing';
import { SearchComponent, SearchService } from '../index'

describe('search component:', () => {
    beforeEach(() => {
        addProviders([
            SearchService,
            SearchComponent
        ]);
    });

    it(`input's value should be equal to searchValue in a searchService when component initializes`, 

        inject([SearchComponent, SearchService],
        (searchComponent: SearchComponent, searchService: SearchService) => {
            searchComponent.ngOnInit();
            expect(searchComponent.searchValue).toBe(searchService.searchValue);

        })
    )

    it('should send the inputed value to the searchValue in a SearchService',
        inject([SearchComponent, SearchService],
        (searchComponent: SearchComponent, searchService: SearchService) => {
            let sampleSearchVal = 'Carabiners';
            let enterEvent = {target: {value: sampleSearchVal}};
            searchComponent.sendValue(enterEvent);

            expect(searchService.searchValue).toBe(sampleSearchVal)
        })
    );

    it('should remove the searchValue when input value is empty string',
        inject([SearchComponent, SearchService],
        (searchComponent: SearchComponent, searchService: SearchService) => {
            searchComponent.ngOnInit();
            let delEvent = {target: {value: ''}};
            searchComponent.clearSearch(delEvent);
            
            expect(searchComponent.searchValue).toBe('');
            expect(searchService.searchValue).toBe('');
        })
    );

    it('should NOT remove the searchValue when input value is NOT empty string',
        inject([SearchComponent, SearchService],
        (searchComponent: SearchComponent, searchService: SearchService) => {
            searchComponent.ngOnInit();
            let delEvent = {target: {value: ''}};
            searchComponent.clearSearch(delEvent);
            
            expect(searchComponent.searchValue).toBe('');
            expect(searchService.searchValue).toBe('');
        })
    );

});