import { API_ROUTES } from '../constants/routes';
import type { CollectionResponse } from '../types/collection-response';
import type { Film } from '../types/film';
import { getInfo, getList } from './collection-service';

export async function getFilmList(page: number): Promise<CollectionResponse<Film>> {
  return getList(API_ROUTES.GET_FILMS, page);
}

export async function getFilm(id: string): Promise<Film> {
  return getInfo(API_ROUTES.GET_FILM_INFO, id);
}
