import {getRandomInteger} from '../utils.js';

const generateName = () => {
  const names = [
    'Ilya O`Reilly',
    'Brian O`Connor',
    'Steve Rid',
    'Sarah Dogherty',
    'Wesley Bring',
    'Jivan Makaryan',
    'Mo Balah',
  ];

  const randomIndex = getRandomInteger(0, names.length - 1);
  return names[randomIndex];
};

const generateText = () => {
  const textes = [
    'A film that changed my life',
    'Its a great movie',
    'A true masterpiece',
    'Post-credit scene was just amazing omg',
    'Nice movie',
    'Thanks a lot! Great!',
    'Amazing!',
  ];

  const randomIndex = getRandomInteger(0, textes.length - 1);
  return textes[randomIndex];
};

const generateEmotion = () => {
  const emotions = [
    'smile',
    'sleeping',
    'puke',
    'angry',
  ];

  const randomIndex = getRandomInteger(0, emotions.length - 1);
  return emotions[randomIndex];
};

const generateDate = () => `${getRandomInteger(2020, 2022)}-0${getRandomInteger(1, 9)}-1${getRandomInteger(0, 9)}T16:12:32.554Z`;

let commentsIdCount = 0;
const generateCommentsId = () => {
  commentsIdCount++;
  return (commentsIdCount - 1);
};

export const generateComment = () => ({
  id: generateCommentsId(),
  author: generateName(),
  comment: generateText(),
  date: generateDate(),
  emotion: generateEmotion(),
});
