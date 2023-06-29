import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { SideBar } from './components/side-bar';
import { ROUTES } from './constants/routes';
import { Loader } from './components/loader';
import './styles/styles.scss';

const Films = React.lazy(() => import('./pages/films'));
const FilmCard = React.lazy(() => import('./pages/film-card'));
const Characters = React.lazy(() => import('./pages/characters'));
const CharacterCard = React.lazy(() => import('./pages/character-card'));
const Planets = React.lazy(() => import('./pages/planets'));
const PlanetCard = React.lazy(() => import('./pages/planet-card'));
const Species = React.lazy(() => import('./pages/species'));
const SpeciesCard = React.lazy(() => import('./pages/species-card'));
const Starships = React.lazy(() => import('./pages/starships'));
const StarshipCard = React.lazy(() => import('./pages/starship-card'));
const Vehicles = React.lazy(() => import('./pages/vehicles'));
const VehicleCard = React.lazy(() => import('./pages/vehicle-card'));

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <div className="app-container">
          <SideBar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path={ROUTES.FILMS} element={<Films />} />
              <Route path={ROUTES.FILM_CARD} element={<FilmCard />} />
              <Route path={ROUTES.CHARACTERS} element={<Characters />} />
              <Route path={ROUTES.CHARACTER_CARD} element={<CharacterCard />} />
              <Route path={ROUTES.STARSHIPS} element={<Starships />} />
              <Route path={ROUTES.STARSHIP_CARD} element={<StarshipCard />} />
              <Route path={ROUTES.PLANETS} element={<Planets />} />
              <Route path={ROUTES.PLANET_CARD} element={<PlanetCard />} />
              <Route path={ROUTES.SPECIES} element={<Species />} />
              <Route path={ROUTES.SPECIES_CARD} element={<SpeciesCard />} />
              <Route path={ROUTES.VEHICLES} element={<Vehicles />} />
              <Route path={ROUTES.VEHICLE_CARD} element={<VehicleCard />} />
              <Route path="/*" element={<Navigate to="/films" />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
