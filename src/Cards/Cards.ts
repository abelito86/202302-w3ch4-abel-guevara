import Component from '../Component.js';
import Serie from '../Types.ts/TypesSeries.js';
export default class Card extends Component {
  #mySeries: Serie;
  constructor(
    parentElement: HTMLElement | null,
    seriesList: Serie,
    cssClasses: string = '',
  ) {
    super(parentElement, 'main', cssClasses);
    this.#mySeries = seriesList;
  }

  render(): void {
    super.render();
    this.element.innerHTML = `
    <section class="series">
    <ul class="series-list">
    <li class="serie">
    <img class="serie__poster"
     src="${this.#mySeries.poster}"
     alt="${this.#mySeries.name}" />
     <h4 class ="serie__title">${this.#mySeries.name}</h4>
     <p class="serie__info">${this.#mySeries.creator} ${this.#mySeries.year}</p>
     <ul class="score">
     <li class="score__star">
     <i class="icon--score fas fa-star" title="1/5"></i>
     </li>
     <li class="score__star">
     <i class="icon--score fas fa-star" title="2/5"></i>
     </li>
     <li class="score__star">
     <i class="icon--score fas fa-star" title="3/5"></i>
     </li>
     <li class="score__star">
     <i class="icon--score fas fa-star" title="4/5"></i>
     </li>
     <li class="score__star">
     <i class="icon--score fas fa-star" title="5/5"></i>
     </li>
     </ul>
     </ul>
     </section>
    `;
  }
}
