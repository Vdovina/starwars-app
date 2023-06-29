import { useRecoilValue } from 'recoil';
import { FilmInfo } from '../../components/film-info';
import { filmsState } from './atoms';
import './styles.scss';

function Films() {
  const films = useRecoilValue(filmsState);

  if (!films) {
    return <div>No information</div>;
  }

  return (
    <>
      <header>FILMS</header>
      <div className="films">
        <div className="films-list">
          {films.map(film => (
            <FilmInfo key={film.episode_id} film={film} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Films;
