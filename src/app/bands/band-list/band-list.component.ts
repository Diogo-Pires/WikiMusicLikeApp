import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
  
import { Band } from '../band/band';
import { BandService } from '../band.services';

@Component({
  selector: 'wb-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css']
})
export class BandListComponent implements OnInit {
  bands: Band[] = [];
  filter: string = "";
  hasMore: Boolean = true;
  currentPage: number = 1;
  
  constructor(
    private bandService: BandService,
    private activateRoute: ActivatedRoute
    ) {}

  ngOnInit(): void{
    this.bands = this.activateRoute.snapshot.data.bands;
  }

  load(): void {
    this.bandService
        .listPaginated(++this.currentPage)
        .subscribe(bands => {
            this.filter = '';
            this.bands = this.bands.concat(bands);
            if(!bands.length) this.hasMore = false;
        });
  }
}
  