import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Block } from '../../components/block';
import { GridWrapper } from '../../components/grid-wrapper';
import { ROUTES } from '../../constants/routes';
import { getId } from '../../utils/get-id';
import { characterCardState } from './atoms';
import './styles.scss';
import classNames from 'classnames';

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
      <div className="character-card">
        <GridWrapper>
          <Block>
            <div className="field">
              <div className="field__name">Birth Year:</div>
              <div className="field__value">{data.birth_year}</div>
            </div>
            <div className="field">
              <div className="field__name">Gender:</div>
              <div className="field__value">{data.gender}</div>
            </div>
            <div className="field">
              <div className="field__name">Mass:</div>
              <div className="field__value">{data.mass}</div>
            </div>
            <div className="field">
              <div className="field__name">Height:</div>
              <div className="field__value">{data.height}</div>
            </div>
            <div className="field">
              <div className="field__name">Hair color:</div>
              <div className="field__value">{data.hair_color}</div>
            </div>
            <div className="field">
              <div className="field__name">Skin color:</div>
              <div className="field__value">{data.skin_color}</div>
            </div>
            <div className="field">
              <div className="field__name">Eye color:</div>
              <div className="field__value">{data.eye_color}</div>
            </div>
            <div className="field">
              <div className="field__name">Homeworld:</div>
              <div
                className={classNames('field__value', 'field__link')}
                onClick={() => navigate(ROUTES.PLANET_CARD.replace(':id', getId(data.homeworld)))}
              >
                {data.homeworld}
              </div>
            </div>
          </Block>
          {!!data.films?.length && (
            <Block title="Films">
              <div className="list">
                {data.films.map((item) => (
                  <div
                    key={item}
                    className="field__link"
                    onClick={() => navigate(ROUTES.FILM_CARD.replace(':id', getId(item)))}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Block>
          )}
          {!!data.species?.length && (
            <Block title="Species">
              <div className="list">
                {data.species.map((item) => (
                  <div
                    key={item}
                    className="field__link"
                    onClick={() => navigate(ROUTES.SPECIES_CARD.replace(':id', getId(item)))}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Block>
          )}
          {!!data.vehicles?.length && (
            <Block title="Vehicle">
              <div className="list">
                {data.vehicles.map((item) => (
                  <div
                    key={item}
                    className="field__link"
                    // onClick={() => navigate(ROUTES.CHARACTER_CARD.replace(':id', getId(item)))}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Block>
          )}
          {!!data.starships?.length && (
            <Block title="Starships">
              <div className="list">
                {data.starships.map((item) => (
                  <div
                    key={item}
                    className="field__link"
                    onClick={() => navigate(ROUTES.STARSHIP_CARD.replace(':id', getId(item)))}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Block>
          )}
        </GridWrapper>
      </div>
    </>
  );
};
