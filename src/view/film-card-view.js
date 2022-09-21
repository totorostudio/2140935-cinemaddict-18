import {createElement} from '../render.js';
import {formatRuntime, formatReleaseDate} from '../utils.js';

const createFilmCardTemplate = (film) => {
  const {filmInfo, comments, userDetails} = film;

  const watchlistClassName = userDetails.watchlist
    ? 'film-card__controls-item--active'
    : '';

  const watchedClassName = userDetails.alreadyWatched
    ? 'film-card__controls-item--active'
    : '';

  const favoritesClassName = userDetails.favorite
    ? 'film-card__controls-item--active'
    : '';

  return (`<article class="film-card">
    <a class="film-card__link">
      <h3 class="film-card__title">${filmInfo.title}</h3>
      <p class="film-card__rating">${filmInfo.totalRating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${formatReleaseDate(filmInfo.release.date)}</span>
        <span class="film-card__duration">${formatRuntime(filmInfo.runtime)}</span>
        <span class="film-card__genre">${filmInfo.genre[0]}</span>
      </p>
      <img src="${filmInfo.poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${filmInfo.description.length <= 140 ? filmInfo.description : filmInfo.description.substr(0, 138)}…</p>

      <span class="film-card__comments">${comments.length} ${comments.length === 1 ? 'comment' : 'comments'}</span>
    </a>
    <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${watchlistClassName}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${watchedClassName}" type="button">Mark as watched</button>
      <button class="film-card__controls-item film-card__controls-item--favorite ${favoritesClassName}" type="button">Mark as favorite</button>
    </div>
  </article>`);
};

export default class FilmCardView {
  constructor(film) {
    this.film = film;
  }

  getTemplate() {
    return createFilmCardTemplate(this.film);
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
