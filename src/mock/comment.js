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

let idCount = 0;
const generateId = () => {
  idCount++;
  return (idCount - 1);
};

export const generateComment = () => ({
  id: generateId(),
  author: generateName(),
  comment: 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
  date: '2019-05-11T16:12:32.554Z',
  emotion: 'smile',
});
