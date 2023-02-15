import { render, screen, act, fireEvent } from '@testing-library/react';
import { Film } from '../../types/Film';

const film : Film = {
  title: 'The Name',
  episode_id: 1,
  opening_crawl: 'Something happened',
  director: 'Director',
  producer: 'Producer',
  release_date: '1977-05-25',
  characters: [],
  planets: [],
  starships: [],
  vehicles: [],
  species: [],
  created: '2014-12-10T14:23:31.880000Z',
  edited: '2014-12-20T19:49:45.256000Z',
  url: '',
};

describe('Film card testing', () => {
  
});