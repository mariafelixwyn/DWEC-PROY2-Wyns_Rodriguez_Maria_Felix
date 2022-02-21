import foto_perfil from '../foto_perfil.jpeg';
import React from "react";

export default class About extends React.Component {
  state = {};

  render() {
    return (
      <div class="apartados" id='about'>
        <div><img id="foto_perfil" src={foto_perfil} ></img></div>
        <div>
          <p className="titulo">About</p>
          <p className="segundo_titulo">María Félix Simonne Wyns Rodríguez</p>
          <p className="texto">mariafelixwyns@gmail.com</p>
          <p class="texto">674357409</p>
          <p class="texto">Estudiante y profesora de Inglés</p>
          <p class="texto">Benalup-Casas Viejas</p>
        </div>
      </div>
    );
  }
}