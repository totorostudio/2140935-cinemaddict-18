import PopupView from '../view/popup-view.js';
import PopupSecondContainerView from '../view/popup-second-container-view.js';
import {render} from '../render.js';

export default class PopupPresenter {
  popupComponent = new PopupSecondContainerView();

  init = (popupContainer, filmsModel) => {
    this.popupContainer = popupContainer;
    this.filmsModel = filmsModel;
    this.cardFilms = [...this.filmsModel.getFilms()];

    render(this.popupComponent, this.popupContainer);
    render(new PopupView(this.cardFilms[0]), this.popupComponent.getElement());
  };
}
