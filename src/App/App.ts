import Component from '../Component.js';
import Header from '../Header/Header.js';

export default class App extends Component {
  #children: Component[];
  #createHeader: Header;
  constructor(parentElement: HTMLElement | null) {
    super(parentElement, 'div');
    const parent = document.querySelector('.container') as HTMLElement;
    this.#createHeader = new Header('My Series', parent, 'container__header');
    this.#children = [];
  }

  render(): void {
    super.render();
    this.#createHeader.render();
  }
}
