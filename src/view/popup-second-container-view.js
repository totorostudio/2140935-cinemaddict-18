import {createElement} from '../render.js';

const createPopupSecondContainerTemplate = () => (
  `<div class="film-details__inner">

  </div>`
);

export default class PopupSecondContainerView {
  constructor(film) {
    this.film = film;
  }

  getTemplate() {
    return createPopupSecondContainerTemplate();
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
