import Component from '../Component.js';
import Serie from '../Types.ts/TypesSeries.js';
export default class Card extends Component {
  #mySerie: Serie;
  constructor(
    parentElement: HTMLElement | null,
    serie: Serie,
    cssClasses: string = 'serie',
  ) {
    super(parentElement, 'article', cssClasses);
    this.#mySerie = serie;
  }

  #renderScoreFillStars(score: number): string {
    let stars = '';
    for (let i = 1; i <= score; i++) {
      stars += `
        <li class="score__star">
          <i class="icon--score fas fa-star" title="${i}/5"></i>
        </li>
      `;
    }

    return stars;

    /* Array(score) // Creo un array de tamaño score
      .fill(null) // Lo relleno de nada porque no uso su valor
      .reduce((acc, _, i) => {
        acc += `
          <li class="score__star">
            <i class="icon--score fas fa-star" title="${i}/5"></i>
          </li>
        `;
        return acc;
      }, '');
    */
  }

  #renderScoreEmptyStars(score: number): string {
    let stars = '';
    for (let i = score + 1; i <= 5; i++) {
      stars += `
        <li class="score__star">
          <i class="icon--score far fa-star" title="${i}/5"></i>
        </li>
      `;
    }

    return stars;
  }

  render(): void {
    super.render();
    this.element.innerHTML = `
     <img class="serie__poster"
         src="${this.#mySerie.poster}"
         alt="${this.#mySerie.name}" />
     <h4 class ="serie__title">${this.#mySerie.name}</h4>
     <p class="serie__info">${this.#mySerie.creator} ${this.#mySerie.year}</p>
     <ul class="score">
       ${this.#renderScoreFillStars(this.#mySerie.score)}
       ${this.#renderScoreEmptyStars(this.#mySerie.score)}
     </ul>
    `;
  }
}
