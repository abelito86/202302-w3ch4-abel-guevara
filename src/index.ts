import App from './App/App.js';

const appContainer = document.querySelector<HTMLElement>('.container');
const app = new App(appContainer);
app.render();
