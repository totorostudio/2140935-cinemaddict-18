import {getRandomInteger} from '../utils.js';

const generateTitle = () => {
  const titles = [
    'Heat',
    'Scent of a Woman',
    'Twin Peaks: Fire Walk with Me',
    '1408',
    'Lisey`s Story',
    'Love in the Time of Cholera',
    'The French Dispatch',
    'The Grand Budapest Hotel',
    'The Darjeeling Limited',
    'The Elephant Man',
    'Wild at Heart',
    'Cry Macho',
    'Once Upon a Time in Hollywood',
    'Once Upon a Time in Ireland',
  ];

  const randomIndex = getRandomInteger(0, titles.length - 1);
  return titles[randomIndex];
};

const generatePosters = () => {
  const posters = [
    './images/posters/made-for-each-other.png',
    './images/posters/popeye-meets-sinbad.png',
    './images/posters/sagebrush-trail.jpg',
    './images/posters/santa-claus-conquers-the-martians.jpg',
    './images/posters/the-dance-of-life.jpg',
    './images/posters/the-great-flamarion.jpg',
    './images/posters/the-man-with-the-golden-arm.jpg',
  ];

  const randomIndex = getRandomInteger(0, posters.length - 1);
  return posters[randomIndex];
};

const generateDescriptions = () => {
  const descriptions = [
    'Master criminal Neil McCauley (Robert De Niro) is trying to control the rogue actions of one of his men, while also planning one last big heist before retiring. Meanwhile, Lieutenant Hanna (Al Pacino) attempts to track down McCauley as he deals with the chaos in his own life, including the infidelity of his wife (Diane Venora) and the mental health of his stepdaughter (Natalie Portman).',
    'Scent of a Woman is a 1992 American drama film produced and directed by Martin Brest that tells the story of a preparatory school student who takes a job as an assistant to an irritable, blind, medically retired Army lieutenant colonel.',
    'Twin Peaks: Fire Walk with Me is a 1992 psychological horror[3][4] film directed by David Lynch and written by Lynch and Robert Engels. It serves as a prequel to the television series Twin Peaks (1990–1991), created by Mark Frost and Lynch, who were also executive producers. It revolves around the investigation into the murder of Teresa Banks (Pamela Gidley) and the last seven days in the life of Laura Palmer (Sheryl Lee), a popular high school student in the fictional Washington town of Twin Peaks.',
    'The film was released in the United States on June 22, 2007. The film follows Mike Enslin, an author who investigates allegedly haunted houses and rents the titular room 1408 at a New York City hotel. Although skeptical of the paranormal, he is soon trapped in the room where he experiences bizarre events.',
    'Lisey`s Story is a novel by American writer Stephen King that combines elements of psychological horror and romance.',
    'A love letter to journalists set in an outpost of an American newspaper in a fictional twentieth century French city that brings to life a collection of stories published in `The French Dispatch Magazine`.',
    'A group of anti treaty fighters are trapped by troops before they can go on their raid. A group of anti treaty fighters are trapped by troops before they can go on their raid. A group of anti treaty fighters are trapped by troops before they can go on their raid.',
    'The Darjeeling Limited is the fifth feature-length film written and directed by Wes Anderson. The story focuses on three brothers (Jason Schwartzman, Owen Wilson, and Adrien Brody) as they embarque on a soul-searching journey on a train through India after the passing of their father.',
    'The Elephant Man is a 1980 biographical drama film about Joseph Merrick (named in the film as John Merrick), a severely deformed man in late 19th-century London. The film was directed by David Lynch and stars John Hurt, Anthony Hopkins, Anne Bancroft, John Gielgud, Wendy Hiller, Michael Elphick, Hannah Gordon, and Freddie Jones.',
  ];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);
  return descriptions[randomIndex];
};

export const generateFilm = () => ({
  id: '0',
  comments: [
    0, 1
  ],
  filmInfo: {
    title: generateTitle(),
    alternativeTitle: 'Laziness Who Sold Themselves',
    totalRating: '5.3',
    poster: generatePosters(),
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
    description: generateDescriptions(),
  },
  userDetails: {
    watchlist: false,
    alreadyWatched: true,
    watchingDate: '2019-04-12T16:12:32.554Z',
    favorite: false
  },
});
