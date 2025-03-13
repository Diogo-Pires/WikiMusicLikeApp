import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { Band } from '../band/band';
import { BandService } from '../band.services';

@Injectable({ providedIn: 'root' })
export class BandListResolver implements Resolve<Observable<Band[]>> {
    constructor(private service: BandService){}
    
    resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): Observable<Band[]> {
        return this.service.listPaginated(1);
    }
}