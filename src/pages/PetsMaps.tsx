import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/ongpet-map.css';

function PetsMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="mapa"/>

          <h2>Escolha uma Ong no mapa</h2>
          <p>Muitos animais estão esperando a sua visista :)</p>
        </header>

        <footer>
          <strong>Ubatuba</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <div>

      </div>

      <Link to="" className="create-ong">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default PetsMap;