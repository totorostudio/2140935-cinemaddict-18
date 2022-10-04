import {createElement} from '../render.js';

const createPopupBottomTemplate = () => (
  `<div class="film-details__bottom-container">
    <section class="film-details__comments-wrap">

    </section>
  </div>`
);

export default class PopupBottomView {
  #element = null;

  get template() {
    return createPopupBottomTemplate();
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
