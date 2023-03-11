import { Link } from 'react-router-dom';
import { NextIcon } from '../../icons/next-icon';
import { ROUTES } from '../../constants/routes';
import './styles.scss';
import { Film } from '../../types/Film';
import { getId } from '../../utils/getId';
import { Block } from '../block';

interface IFilmInfoProps {
  film: Film;
}

export const FilmInfo = ({
  film: { title, episode_id, director, producer, release_date, opening_crawl, url },
}: IFilmInfoProps) => {
  const id = getId(url);

  return (
    <Block className="film-info">
      <div className="film-info__title">{title}</div>
      <div className="film-info__info">
        <div className="field-name">Episode:</div>
        <div className="field-value">{episode_id}</div>
      </div>
      <div className="film-info__info">
        <div className="field-name">Director:</div>
        <div className="field-value">{director}</div>
      </div>
      <div className="film-info__info">
        <div className="field-name">Producers:</div>
        <div className="field-value">{producer}</div>
      </div>
      <div className="film-info__info">
        <div className="field-name">Release date:</div>
        <div className="field-value">{release_date}</div>
      </div>
      <div className="film-info__summary">{opening_crawl}</div>
      <Link className="film-info__button" to={ROUTES.FILM_CARD.replace(':id', id)}>
        <NextIcon />
      </Link>
    </Block>
  );
};
