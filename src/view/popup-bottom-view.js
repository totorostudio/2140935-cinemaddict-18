import {createElement} from '../render.js';

const createPopupBottomTemplate = () => (
  `<div class="film-details__bottom-container">
    <section class="film-details__comments-wrap">

    </section>
  </div>`
);

export default class PopupBottomView {
  getTemplate() {
    return createPopupBottomTemplate();
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
