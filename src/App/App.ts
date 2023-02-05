import CardList from '../CardList/CardList.js';
import Component from '../Component.js';
import Header from '../Header/Header.js';
import { series } from '../series.js';

export default class App extends Component {
  #headerComponent: Header;
  #seriesList: CardList;

  constructor(parentElement: HTMLElement | null) {
    super(parentElement, 'div');
    const parent = document.querySelector('.container') as HTMLElement;
    this.#headerComponent = new Header('My Series', parent, 'main-header');
    this.#seriesList = new CardList(
      this.element,
      series.map(serie => ({ ...serie, score: 5 })),
    );
  }

  render(): void {
    super.render();
    this.#headerComponent.render();
    this.#seriesList.render();
  }
}
