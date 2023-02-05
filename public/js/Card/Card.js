var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Card_instances, _Card_mySerie, _Card_renderScoreFillStars, _Card_renderScoreEmptyStars;
import Component from '../Component.js';
export default class Card extends Component {
    constructor(parentElement, serie, cssClasses = 'serie') {
        super(parentElement, 'article', cssClasses);
        _Card_instances.add(this);
        _Card_mySerie.set(this, void 0);
        __classPrivateFieldSet(this, _Card_mySerie, serie, "f");
    }
    render() {
        super.render();
        this.element.innerHTML = `
     <img class="serie__poster"
         src="${__classPrivateFieldGet(this, _Card_mySerie, "f").poster}"
         alt="${__classPrivateFieldGet(this, _Card_mySerie, "f").name}" />
     <h4 class ="serie__title">${__classPrivateFieldGet(this, _Card_mySerie, "f").name}</h4>
     <p class="serie__info">${__classPrivateFieldGet(this, _Card_mySerie, "f").creator} ${__classPrivateFieldGet(this, _Card_mySerie, "f").year}</p>
     <ul class="score">
       ${__classPrivateFieldGet(this, _Card_instances, "m", _Card_renderScoreFillStars).call(this, __classPrivateFieldGet(this, _Card_mySerie, "f").score)}
       ${__classPrivateFieldGet(this, _Card_instances, "m", _Card_renderScoreEmptyStars).call(this, __classPrivateFieldGet(this, _Card_mySerie, "f").score)}
     </ul>
    `;
    }
}
_Card_mySerie = new WeakMap(), _Card_instances = new WeakSet(), _Card_renderScoreFillStars = function _Card_renderScoreFillStars(score) {
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
}, _Card_renderScoreEmptyStars = function _Card_renderScoreEmptyStars(score) {
    let stars = '';
    for (let i = score + 1; i <= 5; i++) {
        stars += `
        <li class="score__star">
          <i class="icon--score far fa-star" title="${i}/5"></i>
        </li>
      `;
    }
    return stars;
};
