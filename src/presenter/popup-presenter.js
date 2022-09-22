import PopupTopView from '../view/popup-top-view.js';
import PopupBottomView from '../view/popup-bottom-view.js';
import CommentListContainerView from '../view/comment-list-container-view.js';
import CommentsCountView from '../view/comments-count-view.js';
import CommentCardView from '../view/comment-card-view.js';
import NewCommentView from '../view/new-comment-view.js';
import {render} from '../render.js';

export default class PopupPresenter {
  popupBottomComponent = new PopupBottomView();
  commentListContainerComponent = new CommentListContainerView();

  init = (popupContainer, filmsModel) => {
    this.popupContainer = popupContainer;
    this.filmsModel = filmsModel;
    this.cardFilms = [...this.filmsModel.getFilms()];
    this.cardComment = [...this.filmsModel.getCommentsText()];

    render(new PopupTopView(this.cardFilms[0]), this.popupContainer);

    render(this.popupBottomComponent, this.popupContainer);

    render(new CommentsCountView(this.cardFilms[0]), this.popupBottomComponent.getElement());

    render(this.commentListContainerComponent, this.popupBottomComponent.getElement());

    for (const card of this.cardComment) {
      if (this.cardFilms[0].comments.includes(card.id)) {
        render(new CommentCardView(card), this.commentListContainerComponent.getElement());
      }
    }

    render(new NewCommentView(), this.commentListContainerComponent.getElement());

  };
}
