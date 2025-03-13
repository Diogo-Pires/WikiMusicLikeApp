import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Band } from './band/band';

const API = 'https://localhost:5001/webapitest/';

@Injectable({ providedIn: 'root' })
export class BandService {
    constructor(private http: HttpClient) {}

    list(){
        return this.http.get<Band[]>(API + 'Band');
    }

    listPaginated(page: number){
        const params = new HttpParams().append('page', page.toString());
        return this.http.get<Band[]>(API + 'band', { params });
    }

    getByName(Band: string){
        return this.http.get<Band>(API + 'band/' + Band);
    }
}