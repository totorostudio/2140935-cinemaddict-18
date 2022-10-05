import {createElement} from '../render.js';

const createCommentsCountViewTemplate = (film) => {
  const {comments} = film;
  return(`<h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>`);
};

export default class CommentsCountView {
  #element = null;
  #film = null;

  constructor(film) {
    this.#film = film;
  }

  get template() {
    return createCommentsCountViewTemplate(this.#film);
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
