import {generateFilm} from '../mock/film.js';
import {generateComment} from '../mock/comment.js';

export default class FilmsModel {
  films = Array.from({length: 9}, generateFilm);
  comments = Array.from({length: 5}, generateComment);

  getFilms = () => this.films;

  getComments = () => this.comments;
}
