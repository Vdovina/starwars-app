import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { SideBar } from './components/side-bar';
import { ROUTES } from './constants/routes';
import { CharacterCard } from './pages/CharacterCard';
import { Characters } from './pages/Characters';
import { FilmCard } from './pages/FilmCard';
import { Films } from './pages/Films';
import { Planets } from './pages/Planets';
import { Species } from './pages/Species';
import { Starships } from './pages/Starships';
import './styles.css';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <div className="app-container">
          <SideBar />
          <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path={ROUTES.FILMS} element={<Films />} />
              <Route path={ROUTES.FILM_CARD} element={<FilmCard />} />
              <Route path={ROUTES.CHARACTERS} element={<Characters />} />
              <Route path={ROUTES.CHARACTER_CARD} element={<CharacterCard />} />
              <Route path={ROUTES.STARSHIPS} element={<Starships />} />
              <Route path={ROUTES.PLANETS} element={<Planets />} />
              <Route path={ROUTES.SPECIES} element={<Species />} />
            </Routes>
          </React.Suspense>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
