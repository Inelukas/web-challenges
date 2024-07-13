import { Header } from "../Header/Header.js";
import { Form } from "../Form/Form.js";
import { CardList } from "../CardList/CardList.js";

export function App() {
    const app = document.createElement("main");
    app.classList.add("app");
    app.append(Header(), Form(), CardList());
  
    return app;
  }
  
  // The render function renders the app to the DOM
  export function render() {
    const root = document.querySelector("#root");
    root.append(App());
  }
  
