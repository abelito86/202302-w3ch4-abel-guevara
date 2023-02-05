import Card from '../Card/Card.js';
import Component from '../Component.js';
import Serie from '../Types.ts/TypesSeries.js';

export default class CardList extends Component {
  #series: Serie[];
  constructor(
    parentElement: HTMLElement | null,
    seriesList: Serie[],
    type: 'ul' | 'ol' = 'ul',
  ) {
    super(parentElement, type, 'series-list');
    this.#series = seriesList;
  }

  render() {
    super.render();
    this.#series.forEach(serie => {
      const liElement = document.createElement('li'); // <li>
      const serieCard = new Card(liElement, serie); // <li> <article>....</article></li>
      serieCard.render(); // Meto el article dentro de su parent, es decir, el liElement
      this.element.appendChild(liElement); // <ul><li>....</li></ul>
    });
  }
}
