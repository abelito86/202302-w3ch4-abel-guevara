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
var _App_headerComponent, _App_seriesList;
import CardList from '../CardList/CardList.js';
import Component from '../Component.js';
import Header from '../Header/Header.js';
import { series } from '../series.js';
export default class App extends Component {
    constructor(parentElement) {
        super(parentElement, 'div');
        _App_headerComponent.set(this, void 0);
        _App_seriesList.set(this, void 0);
        const parent = document.querySelector('.container');
        __classPrivateFieldSet(this, _App_headerComponent, new Header('My Series', parent, 'main-header'), "f");
        __classPrivateFieldSet(this, _App_seriesList, new CardList(this.element, series.map(serie => (Object.assign(Object.assign({}, serie), { score: 5 })))), "f");
    }
    render() {
        super.render();
        __classPrivateFieldGet(this, _App_headerComponent, "f").render();
        __classPrivateFieldGet(this, _App_seriesList, "f").render();
    }
}
_App_headerComponent = new WeakMap(), _App_seriesList = new WeakMap();
