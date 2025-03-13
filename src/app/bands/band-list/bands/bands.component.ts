import { Component, Input, OnChanges } from '@angular/core';
import { Band } from '../../band/band';
import { of } from 'rxjs';

@Component({
  selector: 'wb-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})
export class BandsComponent implements OnChanges {
  
  @Input() bands: Band[] = [];
  rows : any[] = [];
  
  constructor() { }
  
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if(changes.bands)
      this.rows = this.groupColumns(this.bands);
  }

  groupColumns(bands: Band[]): any[] {
    const newRows = [];

    for(let index = 0; index<bands.length; index+=3){
      newRows.push(bands.slice(index, index + 3));
    }

    return newRows;
  }
}
