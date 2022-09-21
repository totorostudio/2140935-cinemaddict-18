import {createElement} from '../render.js';

const createCommentListContainerTemplate = () => (
  `<ul class="film-details__comments-list">

  </ul>`
);

export default class CommentListContainerView {
  getTemplate() {
    return createCommentListContainerTemplate();
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
