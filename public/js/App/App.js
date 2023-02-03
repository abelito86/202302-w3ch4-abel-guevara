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
var _App_children, _App_createHeader;
import Card from '../Cards/Cards.js';
import Component from '../Component.js';
import Header from '../Header/Header.js';
import { series } from '../series.js';
export default class App extends Component {
    constructor(parentElement) {
        super(parentElement, 'div');
        _App_children.set(this, void 0);
        _App_createHeader.set(this, void 0);
        const parent = document.querySelector('.container');
        __classPrivateFieldSet(this, _App_createHeader, new Header('My Series', parent, 'main-header'), "f");
        __classPrivateFieldSet(this, _App_children, [
            new Card(parent, series[0]),
            new Card(parent, series[1]),
            new Card(parent, series[2]),
            new Card(parent, series[3]),
        ], "f");
    }
    render() {
        super.render();
        __classPrivateFieldGet(this, _App_createHeader, "f").render();
        __classPrivateFieldGet(this, _App_children, "f").forEach(component => component.render());
    }
}
_App_children = new WeakMap(), _App_createHeader = new WeakMap();
