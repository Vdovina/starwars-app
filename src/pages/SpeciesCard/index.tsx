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
              <div className="field__name">Classification:</div>
              <div className="field__value">{data.classification}</div>
            </div>
            <div className="field">
              <div className="field__name">Designation:</div>
              <div className="field__value">{data.designation}</div>
            </div>
            <div className="field">
              <div className="field__name">Average height:</div>
              <div className="field__value">{data.average_height}</div>
            </div>
            <div className="field">
              <div className="field__name">Skin colors:</div>
              <div className="field__value">{data.skin_colors}</div>
            </div>
            <div className="field">
              <div className="field__name">Hair colors:</div>
              <div className="field__value">{data.hair_colors}</div>
            </div>
            <div className="field">
              <div className="field__name">Eye colors:</div>
              <div className="field__value">{data.eye_colors}</div>
            </div>
            <div className="field">
              <div className="field__name">Average lifespan:</div>
              <div className="field__value">{data.average_lifespan}</div>
            </div>
            <div className="field">
              <div className="field__name">Homeworld:</div>
              <div className="field__value">{data.homeworld}</div>
            </div>
            <div className="field">
              <div className="field__name">Language:</div>
              <div className="field__value">{data.language}</div>
            </div>
          </Block>
          {!!data.people?.length && (
            <Block title='People'>
              <div className="list">
                {data.people.map((item) => (
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
            <Block title='Films'>
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
