import Card from '../Cards/Cards.js';
import Component from '../Component.js';
import Header from '../Header/Header.js';
import { series } from '../series.js';

export default class App extends Component {
  #children: Component[];
  #createHeader: Header;

  constructor(parentElement: HTMLElement | null) {
    super(parentElement, 'div');
    const parent = document.querySelector('.container') as HTMLElement;
    this.#createHeader = new Header('My Series', parent, 'main-header');

    this.#children = [
      new Card(parent, series[0]),
      new Card(parent, series[1]),
      new Card(parent, series[2]),
      new Card(parent, series[3]),
    ];
  }

  render(): void {
    super.render();
    this.#createHeader.render();
    this.#children.forEach(component => component.render());
  }
}
