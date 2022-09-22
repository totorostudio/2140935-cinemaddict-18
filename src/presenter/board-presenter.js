import BoardView from '../view/board-view.js';
import FilmsListAllView from '../view/films-list-all-view.js';
import FilmsListTopView from '../view/films-list-top-view.js';
import FilmsListCommentedView from '../view/films-list-commented-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreView from '../view/show-more-view.js';
import {render} from '../render.js';

export default class BoardPresenter {
  boardComponent = new BoardView();
  filmsListAllComponent = new FilmsListAllView();
  filmsListAllContainerComponent = new FilmsListContainerView();
  filmsListTopComponent = new FilmsListTopView();
  filmsListTopContainerComponent = new FilmsListContainerView();
  filmsListCommentedComponent = new FilmsListCommentedView();
  filmsListCommentedContainerComponent = new FilmsListContainerView();


  init = (filmsContainer, filmsModel) => {
    this.filmsContainer = filmsContainer;
    this.filmsModel = filmsModel;
    this.cardFilms = [...this.filmsModel.getFilms()];

    render(this.boardComponent, this.filmsContainer);

    render(this.filmsListAllComponent, this.boardComponent.getElement());
    render(this.filmsListAllContainerComponent, this.filmsListAllComponent.getElement());
    for (let i = 0; i < this.cardFilms.length; i++) {
      render(new FilmCardView(this.cardFilms[i]), this.filmsListAllContainerComponent.getElement());
    }
    render(new ShowMoreView(), this.filmsListAllComponent.getElement());

    render(this.filmsListTopComponent, this.boardComponent.getElement());
    render(this.filmsListTopContainerComponent, this.filmsListTopComponent.getElement());
    for (let i = 0; i < 2; i++) {
      render(new FilmCardView(this.cardFilms[i]), this.filmsListTopContainerComponent.getElement());
    }

    render(this.filmsListCommentedComponent, this.boardComponent.getElement());
    render(this.filmsListCommentedContainerComponent, this.filmsListCommentedComponent.getElement());
    for (let i = 0; i < 2; i++) {
      render(new FilmCardView(this.cardFilms[i]), this.filmsListCommentedContainerComponent.getElement());
    }
  };
}
