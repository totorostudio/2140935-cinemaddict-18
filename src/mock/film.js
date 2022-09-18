import {getRandomInteger} from '../utils.js';

const generateTitle = () => {
  const titles = [
    'Heat (1995)',
    'Scent of a Woman (1992)',
    'Twin Peaks: Fire Walk with Me (1992)',
    '1408 (2007)',
    'Lisey-s Story (2021)',
    'Love in the Time of Cholera (2007)',
    'The French Dispatch (2021)',
    'The Grand Budapest Hotel (2014)',
    'The Darjeeling Limited (2007)',
    'The The Elephant Man (1980)',
    'Wild at Heart (1990)',
    'Cry Macho (2021)',
    'Once Upon a Time in Hollywood (2019)',
    'Once Upon a Time in Ireland (2021)',
  ];

  const randomIndex = getRandomInteger(0, titles.length - 1);
  return titles[randomIndex];
};

export const generateFilm = () => ({
  title: generateTitle(),
  alternativeTitle: 'Laziness Who Sold Themselves',
  totalRating: '5.3',
  poster: './images/posters/sagebrush-trail.jpg',
  ageRating: '0',
  director: 'Tom Ford',
  writers: [
    'Takeshi Kitano'
  ],
  actors: [
    'Morgan Freeman'
  ],
  release: {
    date: '2019-05-11T00:00:00.000Z',
    releaseCountry: 'Finland'
  },
  runtime: '77',
  genre: [
    'Comedy'
  ],
  description: 'Lisey`s Story is a novel by American writer Stephen King that combines elements of psychological horror and romance.'
});
