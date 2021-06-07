import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

// Название, жанр и дата выхода промо-фильма
const film = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: '2014',
};

// Данные для карточек
const cards = [
  {
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    imgPath: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  },
  {
    title: 'Bohemian Rhapsody',
    imgPath: 'img/bohemian-rhapsody.jpg',
  },
  {
    title: 'Macbeth',
    imgPath: 'img/macbeth.jpg',
  },
  {
    title: 'Aviator',
    imgPath: 'img/aviator.jpg',
  },
  {
    title: 'We need to talk about Kevin',
    imgPath: 'img/we-need-to-talk-about-kevin.jpg',
  },
  {
    title: 'What We Do in the Shadows',
    imgPath: 'img/what-we-do-in-the-shadows.jpg',
  },
  {
    title: 'Revenant',
    imgPath: 'img/revenant.jpg',
  },
  {
    title: 'Johnny English',
    imgPath: 'img/johnny-english.jpg',
  },
  {
    title: 'Shutter Island',
    imgPath: 'img/shutter-island.jpg',
  },
  {
    title: 'Pulp Fiction',
    imgPath: 'img/pulp-fiction.jpg',
  },
  {
    title: 'No Country for Old Men',
    imgPath: 'img/no-country-for-old-men.jpg',
  },
  {
    title: 'Snatch',
    imgPath: 'img/snatch.jpg',
  },
  {
    title: 'Moonrise Kingdom',
    imgPath: 'img/moonrise-kingdom.jpg',
  },
  {
    title: 'Seven Years in Tibet',
    imgPath: 'img/seven-years-in-tibet.jpg',
  },
  {
    title: 'Midnight Special',
    imgPath: 'img/midnight-special.jpg',
  },
  {
    title: 'War of the Worlds',
    imgPath: 'img/war-of-the-worlds.jpg',
  },
  {
    title: 'Dardjeeling Limited',
    imgPath: 'img/dardjeeling-limited.jpg',
  },
  {
    title: 'Orlando',
    imgPath: 'img/orlando.jpg',
  },
  {
    title: 'Mindhunter',
    imgPath: 'img/mindhunter.jpg',
  },
  {
    title: 'Midnight Special',
    imgPath: 'img/midnight-special.jpg',
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App film={film} cards={cards} />
  </React.StrictMode>,
  document.getElementById('root'));
