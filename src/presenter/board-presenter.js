import BoardView from '../view/board-view.js';
import FilmsListAllView from '../view/films-list-all-view.js';
import FilmsListTopView from '../view/films-list-top-view.js';
import FilmsListCommentedView from '../view/films-list-commented-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreView from '../view/show-more-view.js';
import {render} from '../render.js';
import PopupPresenter from '../presenter/popup-presenter.js';
<<<<<<< HEAD
//import PopupTopView from '../view/popup-top-view.js';
=======
>>>>>>> master

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
      this.#renderCard(this.#cardFilms[i], this.#filmsListAllContainerComponent.element, i);
    }

    render(new ShowMoreView(), this.#filmsListAllComponent.element);

    render(this.#filmsListTopComponent, this.#boardComponent.element);
    render(this.#filmsListTopContainerComponent, this.#filmsListTopComponent.element);
    for (let i = 0; i < 2; i++) {
      this.#renderCard(this.#cardFilms[i], this.#filmsListTopContainerComponent.element, i);
    }

    render(this.#filmsListCommentedComponent, this.#boardComponent.element);
    render(this.#filmsListCommentedContainerComponent, this.#filmsListCommentedComponent.element);
    for (let i = 0; i < 2; i++) {
      this.#renderCard(this.#cardFilms[i], this.#filmsListCommentedContainerComponent.element, i);
    }

    /*
    taskEditComponent.element.querySelector('form').addEventListener('click', (evt) => {
      evt.preventDefault();
      popupPresenter.init(this.#sitePopupElement, this.#filmsModel, 5);
    });*/

  };

  #renderCard = (card, container, number) => {
    const cardComponent = new FilmCardView(card);

    cardComponent.element.querySelector('.film-card__poster').addEventListener('click', () => {
      popupPresenter.init(this.#sitePopupElement, this.#filmsModel, number);
    });

    /*
    this.#sitePopupElement.querySelector('.film-details__close-btn').addEventListener('click', () => {
      //this.#sitePopupElement.firstChild.remove();
      console.log('Клик на крестик!');
    });*/

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        this.#sitePopupElement.firstChild.remove();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    document.addEventListener('keydown', onEscKeyDown);

    /*popupTopView.element.querySelector('.film-details__close-btn').addEventListener('click', () => {
      //popupPresenter.init(this.#sitePopupElement, this.#filmsModel, number);
      console.log('close');
    });  */

    render(cardComponent, container);
  };

}
