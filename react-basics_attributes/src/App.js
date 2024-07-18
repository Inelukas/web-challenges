import React from "react";
import "./styles.css";

function MyArticle() {
  return (
    <article className="article">
      <h2 className="article__title">My title</h2>
      <label htmlFor="myinput"></label>
      <input id="myinput" />
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/Wikipedia:Random"
      >
        Link to random page
      </a>
    </article>
  );
}

export default function App() {
  return <MyArticle/>;
}
