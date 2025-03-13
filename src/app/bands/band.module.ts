import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { BandComponent } from './band/band.component';
import { BandListComponent } from './band-list/band-list.component';
import { BandFormComponent } from './band-form/band-form.component';
import { BandsComponent } from './band-list/bands/bands.component';
import { FilterByDescriptionPipe } from './band-list/filter-by-description.pipe';
import { LoadButtonComponent } from './band-list/load-button/load-button.component';
import { UtilsModule } from '../utils/utils.modules';
import { SearchComponent } from './band-list/search/search.component';
import { DarkenOnHoverDirective } from '../utils/directives/darken-on-hover/darken-on-hover.directive';

@NgModule({
    declarations: [ 
        BandComponent, 
        BandListComponent, 
        BandFormComponent, 
        BandsComponent, 
        FilterByDescriptionPipe, 
        LoadButtonComponent, 
        SearchComponent,
        DarkenOnHoverDirective
    ],
    imports:[ 
        HttpClientModule, 
        CommonModule,
        UtilsModule
    ]
})
export class BandModule{}