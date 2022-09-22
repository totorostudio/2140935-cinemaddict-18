import {createElement} from '../render.js';
import {formatRuntime, formatReleaseDatePopup} from '../utils.js';

const createPopupTopTemplate = (film) => {
  const {filmInfo, userDetails} = film;

  const watchlistClassName = userDetails.watchlist
    ? 'film-details__control-button--active'
    : '';

  const watchedClassName = userDetails.alreadyWatched
    ? 'film-details__control-button--active'
    : '';

  const favoritesClassName = userDetails.favorite
    ? 'film-details__control-button--active'
    : '';

  return(`
      <div class="film-details__top-container">
        <div class="film-details__close">
          <button class="film-details__close-btn" type="button">close</button>
        </div>
        <div class="film-details__info-wrap">
         <div class="film-details__poster">
            <img class="film-details__poster-img" src="${filmInfo.poster}" alt="">

            <p class="film-details__age">${filmInfo.ageRating}</p>
          </div>

         <div class="film-details__info">
            <div class="film-details__info-head">
              <div class="film-details__title-wrap">
                <h3 class="film-details__title">${filmInfo.title}</h3>
                <p class="film-details__title-original">${filmInfo.alternativeTitle}</p>
              </div>

              <div class="film-details__rating">
                <p class="film-details__total-rating">${filmInfo.totalRating}</p>
              </div>
            </div>

            <table class="film-details__table">
             <tr class="film-details__row">
                <td class="film-details__term">Director</td>
                <td class="film-details__cell">${filmInfo.director}</td>
              </tr>
             <tr class="film-details__row">
                <td class="film-details__term">Writers</td>
                <td class="film-details__cell">${filmInfo.writers.join(', ')}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Actors</td>
                <td class="film-details__cell">${filmInfo.actors.join(', ')}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Release Date</td>
                <td class="film-details__cell">${formatReleaseDatePopup(filmInfo.release.date)}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Runtime</td>
                <td class="film-details__cell">${formatRuntime(filmInfo.runtime)}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Country</td>
                  <td class="film-details__cell">${filmInfo.release.releaseCountry}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">${filmInfo.genre[1] !== undefined ? 'Genres' : 'Genre'}</td>
                <td class="film-details__cell">
                  <span class="film-details__genre">${filmInfo.genre[0] !== undefined ? filmInfo.genre[0] : ''}</span>
                  <span class="film-details__genre">${filmInfo.genre[1] !== undefined ? filmInfo.genre[1] : ''}</span>
                  <span class="film-details__genre">${filmInfo.genre[2] !== undefined ? filmInfo.genre[2] : ''}</span>
                </td>
              </tr>
            </table>

            <p class="film-details__film-description">
              ${filmInfo.description}
            </p>
          </div>
        </div>

        <section class="film-details__controls">
          <button type="button" class="film-details__control-button ${watchlistClassName} film-details__control-button--watchlist" id="watchlist" name="watchlist">Add to watchlist</button>
          <button type="button" class="film-details__control-button ${watchedClassName} film-details__control-button--watched" id="watched" name="watched">Already watched</button>
          <button type="button" class="film-details__control-button ${favoritesClassName} film-details__control-button--favorite" id="favorite" name="favorite">Add to favorites</button>
        </section>
      </div>`);
};

export default class PopupTopView {
  #element = null;
  #film = null;

  constructor(film) {
    this.#film = film;
  }

  get template() {
    return createPopupTopTemplate(this.#film);
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
