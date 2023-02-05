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
var _CardList_series;
import Card from '../Card/Card.js';
import Component from '../Component.js';
export default class CardList extends Component {
    constructor(parentElement, seriesList, type = 'ul') {
        super(parentElement, type, 'series-list');
        _CardList_series.set(this, void 0);
        __classPrivateFieldSet(this, _CardList_series, seriesList, "f");
    }
    render() {
        super.render();
        __classPrivateFieldGet(this, _CardList_series, "f").forEach(serie => {
            const liElement = document.createElement('li'); // <li>
            const serieCard = new Card(liElement, serie); // <li> <article>....</article></li>
            serieCard.render(); // Meto el article dentro de su parent, es decir, el liElement
            this.element.appendChild(liElement); // <ul><li>....</li></ul>
        });
    }
}
_CardList_series = new WeakMap();
