import { create, act as testAct, ReactTestRenderer } from 'react-test-renderer';
import { FilmInfo } from './';
import { Film } from '../../types/film';

const film: Film = {
  title: 'Title',
  episode_id: 1,
  opening_crawl: 'Caption',
  director: 'DirectorName',
  producer: 'ProducerName',
  release_date: '2000-01-01',
  characters: ['some-url/1/'],
  planets: ['some-url/1/'],
  starships: ['some-url/2/'],
  vehicles: ['some-url/4/'],
  species: ['some-url/1/'],
  created: '2000-01-01',
  edited: '2000-01-01',
  url: 'some-url/1/',
};

describe('FilmInfo Tests', () => {
  it('FilmInfo render', () => {
    let component: ReactTestRenderer;
    testAct(() => {
      component = create(<FilmInfo film={film} />);
    });
    expect(component.toJSON()).toMatchSnapshot();
  });
});
