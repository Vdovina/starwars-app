import { useEffect } from 'react';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { FilmInfo } from '../../components/film-info';
import { filmsState } from './atoms';
import './styles.css';

export const Films = () => {
  const films = useRecoilValue(filmsState);

  return (
    <>
      <header>FILMS</header>
      <div className="films">
        <div className="films-list">
          {films.map((film) => (
            <FilmInfo key={film.episode_id} film={film} />
          ))}
        </div>
      </div>
    </>
  );
};
