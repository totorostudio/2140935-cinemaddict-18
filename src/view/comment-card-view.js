import {createElement} from '../render.js';
import {formatCommentDate} from '../utils.js';

const createCommentCardTemplate = (commentCard) => {
  const {author, comment, date, emotion} = commentCard;
  return(`<li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-smile">
            </span>
            <div>
              <p class="film-details__comment-text">${comment}</p>
              <p class="film-details__comment-info">
                <span class="film-details__comment-author">${author}</span>
                <span class="film-details__comment-day">${formatCommentDate(date)}</span>
                <button class="film-details__comment-delete">Delete</button>
              </p>
            </div>
          </li>`);
};

export default class CommentCardView {
  #element = null;
  #comment = null;

  constructor(commentCard) {
    this.#comment = commentCard;
  }

  get template() {
    return createCommentCardTemplate(this.#comment);
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
