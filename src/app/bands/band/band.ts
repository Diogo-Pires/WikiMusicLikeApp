import { Style } from 'src/app/styles/style/style';
import { Album } from 'src/app/albums/album/album';

export interface Band {
    id: number,
    nome: string,
    style: Style,
    albums: Album[],
    likes: number,
    comment: string
}