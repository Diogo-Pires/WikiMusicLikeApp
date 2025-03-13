import { Pipe, PipeTransform } from '@angular/core';

import { Band } from '../band/band';

@Pipe({ name: 'filterByDescription' })
export class FilterByDescriptionPipe implements PipeTransform{
    transform(bands: Band[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery.trim().toLowerCase();

        if(descriptionQuery) {
            return bands.filter(band => 
                band.nome.trim().toLowerCase().includes(descriptionQuery)
            );
        }

        return bands;
    }
} 