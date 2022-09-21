import dayjs from 'dayjs';

// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const formatRuntime = (runtime) => {
  if (runtime < 60) {
    return `${runtime}m`;
  } else {
    const hours = Math.floor(runtime / 60);
    const min = runtime - (hours * 60);
    return `${hours}h ${min}m`;
  }
};

const formatReleaseDate = (releaseDate) => dayjs(releaseDate).format('YYYY');
const formatReleaseDatePopup = (releaseDate) => dayjs(releaseDate).format('DD MMMM YYYY');
const formatCommentDate = (commentDate) => dayjs(commentDate).format('YYYY/MM/DD HH:MM');

export {getRandomInteger, formatRuntime, formatReleaseDate, formatReleaseDatePopup, formatCommentDate};
