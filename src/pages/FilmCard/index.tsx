import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Block } from '../../components/block';
import { GridWrapper } from '../../components/grid-wrapper';
import { ROUTES } from '../../constants/routes';
import { getId } from '../../utils/getId';
import { filmCardState } from './atoms';
import './styles.css';

type UrlParams = {
  id: string;
};

export const FilmCard = () => {
  const navigate = useNavigate();
  const { id } = useParams<UrlParams>();
  const data = useRecoilValue(filmCardState(id ?? ''));

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
              <div className="field-name">Episode:</div>
              <div className="field-value">{data.episode_id}</div>
            </div>
            <div className="field">
              <div className="field-name">Director:</div>
              <div className="field-value">{data.director}</div>
            </div>
            <div className="field">
              <div className="field-name">Producers:</div>
              <div className="field-value">{data.producer}</div>
            </div>
            <div className="field">
              <div className="field-name">Release date:</div>
              <div className="field-value">{data.release_date}</div>
            </div>
          </Block>
          <Block>
            <div className="block-title">Characters</div>
            <div className="list">
              {data.characters.map((item) => (
                <div key={item} onClick={() => navigate(ROUTES.CHARACTER_CARD.replace(':id', getId(item)))}>
                  {item}
                </div>
              ))}
            </div>
          </Block>
          <Block>
            <div className="block-title">Starships</div>
            <div className="list">
              {data.starships.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </Block>
          <Block>
            <div className="block-title">Planets</div>
            <div className="list">
              {data.planets.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </Block>
          <Block>
            <div className="block-title">Species</div>
            <div className="list">
              {data.species.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </Block>
        </GridWrapper>
      </div>
    </>
  );
};
