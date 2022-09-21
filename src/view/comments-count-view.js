import {createElement} from '../render.js';

const createCommentsCountViewTemplate = (film) => {
  const {comments} = film;
  return(`<h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>`);
};

export default class CommentsCountView {
  constructor(film) {
    this.film = film;
  }

  getTemplate() {
    return createCommentsCountViewTemplate(this.film);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
