import { NgModule }from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { SearchComponent } from './components/search.component';
// import { SearchService } from './services/search.service';


@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [ SearchComponent ],
    // providers: [SearchService],
    exports: [ SearchComponent ],
})
export class SearchModule { }
