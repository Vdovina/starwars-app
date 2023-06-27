const SERVER = 'https://swapi.dev/api';

export const ROUTES = {
  HOME: '/',
  FILMS: '/films',
  FILM_CARD: '/films/:id',
  CHARACTERS: '/characters',
  CHARACTER_CARD: '/characters/:id',
  STARSHIPS: '/starships',
  STARSHIP_CARD: '/starships/:id',
  PLANETS: '/planets',
  PLANET_CARD: '/planets/:id',
  SPECIES: '/species',
  SPECIES_CARD: '/species/:id',
  VEHICLES: '/vehicles',
  VEHICLE_CARD: '/vehicles/:id'
};

export const API_ROUTES = {
  GET_FILMS: `${SERVER}/films`,
  GET_FILM_INFO: `${SERVER}/films/:id`,
  GET_CHARACTERS: `${SERVER}/people`,
  GET_CHARACTER_INFO: `${SERVER}/people/:id`,
  GET_STARSHIPS: `${SERVER}/starships`,
  GET_STARSHIP_INFO: `${SERVER}/starships/:id`,
  GET_PLANETS: `${SERVER}/planets`,
  GET_PLANET_INFO: `${SERVER}/planets/:id`,
  GET_SPECIES: `${SERVER}/species`,
  GET_SPECIES_INFO: `${SERVER}/species/:id`,
  GET_VEHICLES: `${SERVER}/vehicles`,
  GET_VEHICLE_INFO: `${SERVER}/vehicles/:id`,
};
