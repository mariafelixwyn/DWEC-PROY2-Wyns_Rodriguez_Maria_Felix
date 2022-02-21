import React from "react";

export default class Portfolio extends React.Component {
  state = {};

  render() {
    return (
        <div class="apartados" id="portfolio">
        <div><img src="https://picsum.photos/id/0/500/300"></img></div>
        <div>
          <p class="titulo">Portfolio</p>
          <p class="segundo_titulo">Ecocity</p>
          <p class="texto"><a>https://proyectoclientemariafelixwyns.000webhostapp.com/</a></p>
          <p class="segundo_titulo">Github</p>
          <p class="texto"><a>https://github.com/mariafelixwyn</a></p>
        </div>
      </div>
    );
  }
}