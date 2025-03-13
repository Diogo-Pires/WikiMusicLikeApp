import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from './cards/card/card.component';

@NgModule({
    declarations: [ PhotoComponent, CardComponent ],
    imports: [ CommonModule ],
    exports: [ PhotoComponent, CardComponent ]
})
export class UtilsModule{}