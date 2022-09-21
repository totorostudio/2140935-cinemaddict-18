import {generateFilm} from '../mock/film.js';
import {generateComment} from '../mock/comment.js';

export default class FilmsModel {
  films = Array.from({length: 9}, generateFilm);
  commentText = Array.from({length: 9}, generateComment);

  getFilms = () => this.films;

  getCommentsText = () => this.commentText;
}
