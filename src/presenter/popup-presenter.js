import PopupTopView from '../view/popup-top-view.js';
import PopupBottomView from '../view/popup-bottom-view.js';
import CommentListContainerView from '../view/comment-list-container-view.js';
import CommentsCountView from '../view/comments-count-view.js';
import CommentCardView from '../view/comment-card-view.js';
import NewCommentView from '../view/new-comment-view.js';
import {render} from '../render.js';

export default class PopupPresenter {
  #popupBottomComponent = new PopupBottomView();
  #commentListContainerComponent = new CommentListContainerView();
  #popupContainer = null;
  #filmsModel = null;
  #cardFilms = [];
  #cardComment = [];

  init = (popupContainer, filmsModel, number) => {
    this.#popupContainer = popupContainer;
    this.#filmsModel = filmsModel;
    this.#cardFilms = [...this.#filmsModel.films];
    this.#cardComment = [...this.#filmsModel.commentText];

    render(new PopupTopView(this.#cardFilms[number]), this.#popupContainer);

    render(this.#popupBottomComponent, this.#popupContainer);

    render(new CommentsCountView(this.#cardFilms[number]), this.#popupBottomComponent.element);

    render(this.#commentListContainerComponent, this.#popupBottomComponent.element);

    for (const card of this.#cardComment) {
      if (this.#cardFilms[number].comments.includes(card.id)) {
        render(new CommentCardView(card), this.#commentListContainerComponent.element);
      }
    }

    render(new NewCommentView(), this.#commentListContainerComponent.element);

  };
}
