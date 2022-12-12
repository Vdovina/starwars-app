import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Block } from '../../components/block';
import { ROUTES } from '../../constants/routes';
import { getId } from '../../utils/getId';
import { characterCardState } from './atoms';
import './styles.css';

type UrlParams = {
  id: string;
};

export const CharacterCard = () => {
  const navigate = useNavigate();
  const { id } = useParams<UrlParams>();
  const data = useRecoilValue(characterCardState(id ?? ''));

  if (!data) {
    return <div>No information</div>;
  }

  return (
    <>
      <header>{data.name}</header>
      <div className="item-card">
        <Block>
          <div className="field">
            <div className="field-name">Birth Year:</div>
            <div className="field-value">{data.birth_year}</div>
          </div>
          <div className="field">
            <div className="field-name">Gender:</div>
            <div className="field-value">{data.gender}</div>
          </div>
          <div className="field">
            <div className="field-name">Mass:</div>
            <div className="field-value">{data.mass}</div>
          </div>
          <div className="field">
            <div className="field-name">Height:</div>
            <div className="field-value">{data.height}</div>
          </div>
          <div className="field">
            <div className="field-name">Hair color:</div>
            <div className="field-value">{data.hair_color}</div>
          </div>
          <div className="field">
            <div className="field-name">Skin color:</div>
            <div className="field-value">{data.skin_color}</div>
          </div>
          <div className="field">
            <div className="field-name">Eye color:</div>
            <div className="field-value">{data.eye_color}</div>
          </div>
          <div className="field">
            <div className="field-name">Homeworld:</div>
            <div className="field-value">{data.homeworld}</div>
          </div>
        </Block>
        {!!data.films?.length && (
          <Block>
            <div className="block-title">Films</div>
            <div className="list">
              {data.films.map((item) => (
                <div key={item} onClick={() => navigate(ROUTES.FILM_CARD.replace(':id', getId(item)))}>
                  {item}
                </div>
              ))}
            </div>
          </Block>
        )}
        {!!data.species?.length && (
          <Block>
            <div className="block-title">Species</div>
            <div className="list">
              {data.species.map((item) => (
                <div
                  key={item}
                  // onClick={() => navigate(ROUTES.CHARACTER_CARD.replace(':id', getId(item)))}
                >
                  {item}
                </div>
              ))}
            </div>
          </Block>
        )}
        {!!data.vehicles?.length && (
          <Block>
            <div className="block-title">Vehicle</div>
            <div className="list">
              {data.vehicles.map((item) => (
                <div
                  key={item}
                  // onClick={() => navigate(ROUTES.CHARACTER_CARD.replace(':id', getId(item)))}
                >
                  {item}
                </div>
              ))}
            </div>
          </Block>
        )}
        {!!data.starships?.length && (
          <Block>
            <div className="block-title">Starships</div>
            <div className="list">
              {data.starships.map((item) => (
                <div
                  key={item}
                  // onClick={() => navigate(ROUTES.CHARACTER_CARD.replace(':id', getId(item)))}
                >
                  {item}
                </div>
              ))}
            </div>
          </Block>
        )}
      </div>
    </>
  );
};
