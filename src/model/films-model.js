import {generateFilm} from '../mock/film.js';
import {generateComment} from '../mock/comment.js';

export default class FilmsModel {
  #films = Array.from({length: 9}, generateFilm);
  #commentText = Array.from({length: 9}, generateComment);

  get films() {
    return this.#films;
  }

  get commentText() {
    return this.#commentText;
  }
}
