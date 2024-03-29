import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Block } from '../../components/block';
import { GridWrapper } from '../../components/grid-wrapper';
import { ROUTES } from '../../constants/routes';
import { getId } from '../../utils/get-id';
import { filmCardState } from './atoms';
import './styles.scss';

type UrlParams = {
  id: string;
};

function FilmCard() {
  const navigate = useNavigate();
  const { id } = useParams<UrlParams>();
  const data = useRecoilValue(filmCardState(id));

  if (!data) {
    return <div>No information</div>;
  }

  return (
    <>
      <header>{data.title}</header>
      <div className="film-card">
        <Block>{data.opening_crawl}</Block>
        <GridWrapper>
          <Block>
            <div className="field">
              <div className="field__name">Episode:</div>
              <div className="field__value">{data.episode_id}</div>
            </div>
            <div className="field">
              <div className="field__name">Director:</div>
              <div className="field__value">{data.director}</div>
            </div>
            <div className="field">
              <div className="field__name">Producers:</div>
              <div className="field__value">{data.producer}</div>
            </div>
            <div className="field">
              <div className="field__name">Release date:</div>
              <div className="field__value">{data.release_date}</div>
            </div>
          </Block>
          <Block title="Characters">
            <div className="list">
              {data.characters.map(item => (
                <div
                  key={item}
                  className="field__link"
                  onClick={() =>
                    navigate(ROUTES.CHARACTER_CARD.replace(':id', getId(item)))
                  }>
                  {item}
                </div>
              ))}
            </div>
          </Block>
          <Block title="Starships">
            <div className="list">
              {data.starships.map(item => (
                <div
                  key={item}
                  className="field__link"
                  onClick={() =>
                    navigate(ROUTES.STARSHIP_CARD.replace(':id', getId(item)))
                  }>
                  {item}
                </div>
              ))}
            </div>
          </Block>
          <Block title="Planets">
            <div className="list">
              {data.planets.map(item => (
                <div
                  key={item}
                  className="field__link"
                  onClick={() =>
                    navigate(ROUTES.PLANET_CARD.replace(':id', getId(item)))
                  }>
                  {item}
                </div>
              ))}
            </div>
          </Block>
          <Block title="Species">
            <div className="list">
              {data.species.map(item => (
                <div
                  key={item}
                  className="field__link"
                  onClick={() =>
                    navigate(ROUTES.SPECIES_CARD.replace(':id', getId(item)))
                  }>
                  {item}
                </div>
              ))}
            </div>
          </Block>
        </GridWrapper>
      </div>
    </>
  );
}

export default FilmCard;
