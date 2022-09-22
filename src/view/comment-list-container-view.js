import {createElement} from '../render.js';

const createCommentListContainerTemplate = () => (
  `<ul class="film-details__comments-list">

  </ul>`
);

export default class CommentListContainerView {
  #element = null;

  get template() {
    return createCommentListContainerTemplate();
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
