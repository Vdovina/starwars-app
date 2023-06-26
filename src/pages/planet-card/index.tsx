import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Block } from '../../components/block';
import { GridWrapper } from '../../components/grid-wrapper';
import { ROUTES } from '../../constants/routes';
import { getId } from '../../utils/get-id';
import { planetCardState } from './atoms';
import './styles.scss';

type UrlParams = {
  id: string;
};

export const PlanetCard = () => {
  const navigate = useNavigate();
  const { id } = useParams<UrlParams>();
  const data = useRecoilValue(planetCardState(id ?? ''));

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
              <div className="field__name">Rotation period:</div>
              <div className="field__value">{data.rotation_period}</div>
            </div>
            <div className="field">
              <div className="field__name">Orbital period:</div>
              <div className="field__value">{data.orbital_period}</div>
            </div>
            <div className="field">
              <div className="field__name">Diameter:</div>
              <div className="field__value">{data.diameter}</div>
            </div>
            <div className="field">
              <div className="field__name">Climate:</div>
              <div className="field__value">{data.climate}</div>
            </div>
            <div className="field">
              <div className="field__name">Gravity:</div>
              <div className="field__value">{data.gravity}</div>
            </div>
            <div className="field">
              <div className="field__name">Terrain:</div>
              <div className="field__value">{data.terrain}</div>
            </div>
            <div className="field">
              <div className="field__name">Surface water:</div>
              <div className="field__value">{data.surface_water}</div>
            </div>
            <div className="field">
              <div className="field__name">Population:</div>
              <div className="field__value">{data.population}</div>
            </div>
          </Block>
          {!!data.residents?.length && (
            <Block title="Residents">
              <div className="list">
                {data.residents.map((item) => (
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
        </GridWrapper>
      </div>
    </>
  );
};
