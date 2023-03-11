import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { SideBar } from './components/side-bar';
import { ROUTES } from './constants/routes';
import { CharacterCard } from './pages/CharacterCard';
import { Characters } from './pages/Characters';
import { FilmCard } from './pages/FilmCard';
import { Films } from './pages/Films';
import { PlanetCard } from './pages/PlanetCard';
import { Planets } from './pages/Planets';
import { Species } from './pages/Species';
import { SpeciesCard } from './pages/SpeciesCard';
import { StarshipCard } from './pages/StarshipCard';
import { Starships } from './pages/Starships';
import { Loader } from './components/loader';
import './styles/styles.scss';

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
              <Route path="/*" element={<Navigate to="/films" />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
