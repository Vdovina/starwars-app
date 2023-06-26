import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Block } from '../../components/block';
import { GridWrapper } from '../../components/grid-wrapper';
import { ROUTES } from '../../constants/routes';
import { getId } from '../../utils/get-id';
import { starshipCardState } from './atoms';
import './styles.scss';

type UrlParams = {
  id: string;
};

export const StarshipCard = () => {
  const navigate = useNavigate();
  const { id } = useParams<UrlParams>();
  const data = useRecoilValue(starshipCardState(id ?? ''));

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
              <div className="field__name">Model:</div>
              <div className="field__value">{data.model}</div>
            </div>
            <div className="field">
              <div className="field__name">Manufacturer:</div>
              <div className="field__value">{data.manufacturer}</div>
            </div>
            <div className="field">
              <div className="field__name">Cost in credits:</div>
              <div className="field__value">{data.cost_in_credits}</div>
            </div>
            <div className="field">
              <div className="field__name">Length:</div>
              <div className="field__value">{data.length}</div>
            </div>
            <div className="field">
              <div className="field__name">Max atmosphering speed:</div>
              <div className="field__value">{data.max_atmosphering_speed}</div>
            </div>
            <div className="field">
              <div className="field__name">Crew:</div>
              <div className="field__value">{data.crew}</div>
            </div>
            <div className="field">
              <div className="field__name">Passengers:</div>
              <div className="field__value">{data.passengers}</div>
            </div>
            <div className="field">
              <div className="field__name">Cargo capacity:</div>
              <div className="field__value">{data.cargo_capacity}</div>
            </div>
            <div className="field">
              <div className="field__name">Consumables:</div>
              <div className="field__value">{data.consumables}</div>
            </div>
            <div className="field">
              <div className="field__name">Hyperdrive rating:</div>
              <div className="field__value">{data.hyperdrive_rating}</div>
            </div>
            <div className="field">
              <div className="field__name">MGLT:</div>
              <div className="field__value">{data.MGLT}</div>
            </div>
            <div className="field">
              <div className="field__name">Starship class:</div>
              <div className="field__value">{data.starship_class}</div>
            </div>
          </Block>
          {!!data.pilots?.length && (
            <Block title="Pilots">
              <div className="list">
                {data.pilots.map((item) => (
                  <div
                    key={item}
                    className="field__link"
                    onClick={() => navigate(ROUTES.CHARACTER_CARD.replace(':id', getId(item)))}
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
