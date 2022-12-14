import BoardPresenter from './presenter/board-presenter.js';
import PopupPresenter from './presenter/popup-presenter.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import ProfileRatingView from './view/profile-rating-view.js';
import StatisticsView from './view/statistics-view.js';
import {render} from './render.js';
import FilmsModel from './model/films-model.js';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const siteFooterElement = document.querySelector('.footer__statistics');
const sitePopupElement = document.querySelector('.film-details__inner');
const boardPresenter = new BoardPresenter();
const popupPresenter = new PopupPresenter();
const filmsModel = new FilmsModel();

render(new FilterView(), siteMainElement);
render(new SortView(), siteMainElement);
render(new ProfileRatingView(), siteHeaderElement);
render(new StatisticsView(), siteFooterElement);

boardPresenter.init(siteMainElement, filmsModel);
popupPresenter.init(sitePopupElement, filmsModel);
