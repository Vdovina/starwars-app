import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { StarWarsOutlineLogo } from '../../icons/star-wars-outline';
import './styles.scss';

const MENU_OPTIONS = [
  {
    link: ROUTES.FILMS,
    label: 'Films',
  },
  {
    link: ROUTES.CHARACTERS,
    label: 'Characters',
  },
  {
    link: ROUTES.STARSHIPS,
    label: 'Starships',
  },
  {
    link: ROUTES.PLANETS,
    label: 'Planets',
  },
  {
    link: ROUTES.SPECIES,
    label: 'Species',
  },
];

export const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar__logo">
        <StarWarsOutlineLogo />
      </div>
      {MENU_OPTIONS.map((option) => (
        <Link key={option.label} className="side-bar__link" to={option.link}>
          {option.label}
        </Link>
      ))}
    </div>
  );
};
