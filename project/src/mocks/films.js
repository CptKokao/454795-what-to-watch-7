const films = [
  {
    name: 'Macbeth',
    posterImage:
      'https://7.react.pages.academy/static/film/poster/Macbeth.jpg',
    previewImage:
      'https://7.react.pages.academy/static/film/preview/macbeth.jpg',
    backgroundImage:
      'https://7.react.pages.academy/static/film/background/Macbeth.jpg',
    backgroundColor: '#F1E9CE',
    description:
      'Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.',
    rating: 3.3,
    scoresCount: 48798,
    director: 'Justin Kurzel',
    starring: ['Michael Fassbender', 'Marion Cotillard', 'Jack Madigan'],
    runTime: 113,
    genre: 'Drama',
    released: 2015,
    id: 1,
    isFavorite: false,
    videoLink: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
    previewVideoLink:
      'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    name: 'Aviator',
    posterImage:
      'https://7.react.pages.academy/static/film/poster/Aviator.jpg',
    previewImage:
      'https://7.react.pages.academy/static/film/preview/aviator.jpg',
    backgroundImage:
      'https://7.react.pages.academy/static/film/background/Aviator.jpg',
    backgroundColor: '#D6CDAF',
    description:
      'A biopic depicting the early years of legendary Director and aviator Howard Hughes\' career from the late 1920s to the mid 1940s.',
    rating: 9.8,
    scoresCount: 307174,
    director: 'Martin Scorsese',
    starring: ['Leonardo DiCaprio', 'Cate Blanchett', 'Kate Beckinsale'],
    runTime: 170,
    genre: 'Drama',
    released: 2014,
    id: 2,
    isFavorite: false,
    videoLink:
      'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
    previewVideoLink:
      'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    name: 'War of the Worlds',
    posterImage:
      'https://7.react.pages.academy/static/film/poster/War_of_the_Worlds.jpg',
    previewImage:
      'https://7.react.pages.academy/static/film/preview/war-of-the-worlds.jpg',
    backgroundImage:
      'https://7.react.pages.academy/static/film/background/War_of_the_Worlds.jpg',
    backgroundColor: '#9B7E61',
    description:
      'As Earth is invaded by alien tripod fighting machines, one family fights for survival.',
    rating: 9.3,
    scoresCount: 386834,
    director: 'Steven Spielberg',
    starring: ['Tom Cruise', 'Dakota Fanning', 'Tim Robbins'],
    runTime: 116,
    genre: 'Adventure',
    released: 2005,
    id: 3,
    isFavorite: false,
    videoLink: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
    previewVideoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    name: 'Shutter Island',
    posterImage:
      'https://7.react.pages.academy/static/film/poster/Shutter_Island.jpg',
    previewImage:
      'https://7.react.pages.academy/static/film/preview/shutter-island.jpg',
    backgroundImage:
      'https://7.react.pages.academy/static/film/background/Shutter_Island.jpg',
    backgroundColor: '#977461',
    description:
      'In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.',
    rating: 4.1,
    scoresCount: 1002557,
    director: 'Martin Scorsese',
    starring: ['Leonardo DiCaprio', 'Emily Mortimer', 'Mark Ruffalo'],
    runTime: 138,
    genre: 'Thriller',
    released: 2010,
    id: 4,
    isFavorite: false,
    videoLink: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
    previewVideoLink:
      'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    name: 'Dardjeeling Limited',
    posterImage:
      'https://7.react.pages.academy/static/film/poster/Dardjeeling_Limited.jpg',
    previewImage:
      'https://7.react.pages.academy/static/film/preview/dardjeeling_limited.jpg',
    backgroundImage:
      'https://7.react.pages.academy/static/film/background/Dardjeeling_Limited.jpg',
    backgroundColor: '#AD9F8B',
    description:
      'A year after their father\'s funeral, three brothers travel across India by train in an attempt to bond with each other.',
    rating: 3.6,
    scoresCount: 165106,
    director: 'Wes Anderson',
    starring: ['Owen Wilson', 'Adrien Brody', 'Jason Schwartzman'],
    runTime: 91,
    genre: 'Adventure',
    released: 2007,
    id: 5,
    isFavorite: false,
    videoLink:
      'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
    previewVideoLink:
      'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    name: 'No Country for Old Men',
    posterImage:
      'https://7.react.pages.academy/static/film/poster/No_Country_for_Old_Men.jpg',
    previewImage:
      'https://7.react.pages.academy/static/film/preview/no-country-for-old-men.jpg',
    backgroundImage:
      'https://7.react.pages.academy/static/film/background/No_Country_for_Old_Men.jpg',
    backgroundColor: '#BDAD8F',
    description:
      'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.',
    rating: 4.1,
    scoresCount: 764976,
    director: 'Ethan Coen',
    starring: ['Tommy Lee Jones', 'Javier Bardem', 'Josh Brolin'],
    runTime: 122,
    genre: 'Crime',
    released: 2007,
    id: 6,
    isFavorite: false,
    videoLink: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
    previewVideoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    name: 'Matrix',
    posterImage: 'https://7.react.pages.academy/static/film/poster/matrix.jpg',
    previewImage:
      'https://7.react.pages.academy/static/film/preview/matrix.jpg',
    backgroundImage:
      'https://7.react.pages.academy/static/film/background/matrix.jpg',
    backgroundColor: '#B9B27E',
    description:
      'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    rating: 4.4,
    scoresCount: 1503092,
    director: 'Wachowski Brothers',
    starring: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
    runTime: 136,
    genre: 'Action',
    released: 1999,
    id: 7,
    isFavorite: false,
    videoLink:
      'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
    previewVideoLink:
      'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    name: 'Moonrise Kingdom',
    posterImage:
      'https://7.react.pages.academy/static/film/poster/Moonrise_Kingdom.jpg',
    previewImage:
      'https://7.react.pages.academy/static/film/preview/moonrise-kingdom.jpg',
    backgroundImage:
      'https://7.react.pages.academy/static/film/background/Moonrise_Kingdom.jpg',
    backgroundColor: '#D8E3E5',
    description:
      'A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.',
    rating: 7.9,
    scoresCount: 291183,
    director: 'Wes Anderson',
    starring: ['Jared Gilman', 'Kara Hayward', 'Bruce Willis'],
    runTime: 94,
    genre: 'Adventure',
    released: 2012,
    id: 8,
    isFavorite: false,
    videoLink: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
    previewVideoLink:
      'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
];

export default films;
