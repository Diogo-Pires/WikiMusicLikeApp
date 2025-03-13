import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Service } from '../band.services';

@Component({
    selector: 'wb-band',
    templateUrl: 'band.component.html'
})
export class BandComponent {
  @Input() nome: string;
  @Input() estilo: string;

  constructor(
      private bandService: BandService,
      private activateRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    const band = this.activateRoute.snapshot.params.band;
    
    if(band) {
      this.bandService
        .getByName(band)
        .subscribe(x => {
          this.nome = x.nome;
          this.estilo = x.estilo.nome;
        });
    }
  }
}