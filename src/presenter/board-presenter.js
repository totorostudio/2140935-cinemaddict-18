import BoardView from '../view/board-view.js';
import FilmsListAllView from '../view/films-list-all-view.js';
import FilmsListTopView from '../view/films-list-top-view.js';
import FilmsListCommentedView from '../view/films-list-commented-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreView from '../view/show-more-view.js';
import {render} from '../render.js';
import PopupPresenter from '../presenter/popup-presenter.js';

const popupPresenter = new PopupPresenter();

export default class BoardPresenter {
  #boardComponent = new BoardView();
  #filmsListAllComponent = new FilmsListAllView();
  #filmsListAllContainerComponent = new FilmsListContainerView();
  #filmsListTopComponent = new FilmsListTopView();
  #filmsListTopContainerComponent = new FilmsListContainerView();
  #filmsListCommentedComponent = new FilmsListCommentedView();
  #filmsListCommentedContainerComponent = new FilmsListContainerView();
  #sitePopupElement = document.querySelector('.film-details__inner');

  #filmsContainer = null;
  #filmsModel = null;
  #cardFilms = [];

  init = (filmsContainer, filmsModel) => {
    this.#filmsContainer = filmsContainer;
    this.#filmsModel = filmsModel;
    this.#cardFilms = [...this.#filmsModel.films];

    render(this.#boardComponent, this.#filmsContainer);

    render(this.#filmsListAllComponent, this.#boardComponent.element);
    render(this.#filmsListAllContainerComponent, this.#filmsListAllComponent.element);
    for (let i = 0; i < this.#cardFilms.length; i++) {
      render(new FilmCardView(this.#cardFilms[i]), this.#filmsListAllContainerComponent.element);
    }
    render(new ShowMoreView(), this.#filmsListAllComponent.element);

    render(this.#filmsListTopComponent, this.#boardComponent.element);
    render(this.#filmsListTopContainerComponent, this.#filmsListTopComponent.element);
    for (let i = 0; i < 2; i++) {
      render(new FilmCardView(this.#cardFilms[i]), this.#filmsListTopContainerComponent.element);
    }

    render(this.#filmsListCommentedComponent, this.#boardComponent.element);
    render(this.#filmsListCommentedContainerComponent, this.#filmsListCommentedComponent.element);
    for (let i = 0; i < 2; i++) {
      render(new FilmCardView(this.#cardFilms[i]), this.#filmsListCommentedContainerComponent.element);
    }

    /*
    taskEditComponent.element.querySelector('form').addEventListener('click', (evt) => {
      evt.preventDefault();
      popupPresenter.init(this.#sitePopupElement, this.#filmsModel, 5);
    });*/

  };
}
