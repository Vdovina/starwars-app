import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Block } from '../../components/block';
import { GridWrapper } from '../../components/grid-wrapper';
import { ROUTES } from '../../constants/routes';
import { getId } from '../../utils/getId';
import { starshipCardState } from './atoms';
import './styles.css';

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
              <div className="field-name">Model:</div>
              <div className="field-value">{data.model}</div>
            </div>
            <div className="field">
              <div className="field-name">Manufacturer:</div>
              <div className="field-value">{data.manufacturer}</div>
            </div>
            <div className="field">
              <div className="field-name">Cost in credits:</div>
              <div className="field-value">{data.cost_in_credits}</div>
            </div>
            <div className="field">
              <div className="field-name">Length:</div>
              <div className="field-value">{data.length}</div>
            </div>
            <div className="field">
              <div className="field-name">Max atmosphering speed:</div>
              <div className="field-value">{data.max_atmosphering_speed}</div>
            </div>
            <div className="field">
              <div className="field-name">Crew:</div>
              <div className="field-value">{data.crew}</div>
            </div>
            <div className="field">
              <div className="field-name">Passengers:</div>
              <div className="field-value">{data.passengers}</div>
            </div>
            <div className="field">
              <div className="field-name">Cargo capacity:</div>
              <div className="field-value">{data.cargo_capacity}</div>
            </div>
            <div className="field">
              <div className="field-name">Consumables:</div>
              <div className="field-value">{data.consumables}</div>
            </div>
            <div className="field">
              <div className="field-name">Hyperdrive rating:</div>
              <div className="field-value">{data.hyperdrive_rating}</div>
            </div>
            <div className="field">
              <div className="field-name">MGLT:</div>
              <div className="field-value">{data.MGLT}</div>
            </div>
            <div className="field">
              <div className="field-name">Starship class:</div>
              <div className="field-value">{data.starship_class}</div>
            </div>
          </Block>
          {!!data.pilots?.length && (
            <Block>
              <div className="block-title">Pilots</div>
              <div className="list">
                {data.pilots.map((item) => (
                  <div key={item} onClick={() => navigate(ROUTES.CHARACTER_CARD.replace(':id', getId(item)))}>
                    {item}
                  </div>
                ))}
              </div>
            </Block>
          )}
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
        </GridWrapper>
      </div>
    </>
  );
};
