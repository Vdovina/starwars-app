import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { SideBar } from './components/side-bar';
import { ROUTES } from './constants/routes';
import { CharacterCard } from './pages/character-card';
import { Characters } from './pages/characters';
import { FilmCard } from './pages/film-card';
import { Films } from './pages/films';
import { PlanetCard } from './pages/planet-card';
import { Planets } from './pages/planets';
import { Species } from './pages/species';
import { SpeciesCard } from './pages/species-card';
import { StarshipCard } from './pages/starship-card';
import { Starships } from './pages/starships';
import { Loader } from './components/loader';
import './styles/styles.scss';
import { Vehicles } from './pages/vehicles';
import { VehicleCard } from './pages/vehicle-card';

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
