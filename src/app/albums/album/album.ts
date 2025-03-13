import { Band } from 'src/app/bands/band/band';

export interface Album {
    id: number,
    nome: string,
    year: number,
    band: Band
}