import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Block } from '../../components/block';
import { GridWrapper } from '../../components/grid-wrapper';
import { ROUTES } from '../../constants/routes';
import { getId } from '../../utils/getId';
import { speciesCardState } from './atoms';
import './styles.scss';

type UrlParams = {
  id: string;
};

export const SpeciesCard = () => {
  const navigate = useNavigate();
  const { id } = useParams<UrlParams>();
  const data = useRecoilValue(speciesCardState(id ?? ''));

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
              <div className="field-name">Classification:</div>
              <div className="field-value">{data.classification}</div>
            </div>
            <div className="field">
              <div className="field-name">Designation:</div>
              <div className="field-value">{data.designation}</div>
            </div>
            <div className="field">
              <div className="field-name">Average height:</div>
              <div className="field-value">{data.average_height}</div>
            </div>
            <div className="field">
              <div className="field-name">Skin colors:</div>
              <div className="field-value">{data.skin_colors}</div>
            </div>
            <div className="field">
              <div className="field-name">Hair colors:</div>
              <div className="field-value">{data.hair_colors}</div>
            </div>
            <div className="field">
              <div className="field-name">Eye colors:</div>
              <div className="field-value">{data.eye_colors}</div>
            </div>
            <div className="field">
              <div className="field-name">Average lifespan:</div>
              <div className="field-value">{data.average_lifespan}</div>
            </div>
            <div className="field">
              <div className="field-name">Homeworld:</div>
              <div className="field-value">{data.homeworld}</div>
            </div>
            <div className="field">
              <div className="field-name">Language:</div>
              <div className="field-value">{data.language}</div>
            </div>
          </Block>
          {!!data.people?.length && (
            <Block>
              <div className="block-title">People</div>
              <div className="list">
                {data.people.map((item) => (
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
