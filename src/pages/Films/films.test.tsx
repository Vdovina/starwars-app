import { render, screen, act, fireEvent } from '@testing-library/react';
import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { Films } from '.';
import { FilmInfo } from '../../components/film-info';
import { Loader } from '../../components/loader';
import { Film } from '../../types/Film';

const films: Film[] = [
  {
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
  },
];

function flushPromisesAndTimers(): Promise<void> {
  return act(
    () =>
      new Promise((resolve) => {
        setTimeout(resolve, 100);
        jest.runAllTimers();
      })
  );
}

describe('Film list testing', () => {
  test('On success data loading', async () => {
    const mockState = films;
    // global.fetch = jest.fn(() =>
    //   Promise.resolve({
    //     json: () => Promise.resolve(mockState),
    //   })
    // );
    render(
      <RecoilRoot>
        <Suspense fallback={<Loader />}>
          {/* <Films /> */}
          {/* <header>FILMS</header> */}
          {/* <div className="films">
            <div className="films-list">
              {films.map((film) => (
                <FilmInfo key={film.episode_id} film={film} />
              ))}
            </div>
          </div> */}
        </Suspense>
      </RecoilRoot>
    );
    await flushPromisesAndTimers();
  });
});
