import FilmsListView from '../view/films-list-view.js';
import FilmsListAllView from '../view/films-list-all-view.js';
import FilmsListTopView from '../view/films-list-top-view.js';
import FilmsListCommentedView from '../view/films-list-commented-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreView from '../view/show-more-view.js';
import {render} from '../render.js';

export default class FilmsPresenter {
  filmsComponent = new FilmsListView();
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

    render(this.filmsComponent, this.filmsContainer);

    render(this.filmsListAllComponent, this.filmsComponent.getElement());
    render(this.filmsListAllContainerComponent, this.filmsListAllComponent.getElement());
    for (let i = 0; i < this.cardFilms.length; i++) {
      render(new FilmCardView(this.cardFilms[i]), this.filmsListAllContainerComponent.getElement());
    }
    render(new ShowMoreView(), this.filmsListAllComponent.getElement());

    render(this.filmsListTopComponent, this.filmsComponent.getElement());
    render(this.filmsListTopContainerComponent, this.filmsListTopComponent.getElement());
    for (let i = 0; i < 2; i++) {
      render(new FilmCardView(), this.filmsListTopContainerComponent.getElement());
    }

    render(this.filmsListCommentedComponent, this.filmsComponent.getElement());
    render(this.filmsListCommentedContainerComponent, this.filmsListCommentedComponent.getElement());
    for (let i = 0; i < 2; i++) {
      render(new FilmCardView(), this.filmsListCommentedContainerComponent.getElement());
    }
  };
}
