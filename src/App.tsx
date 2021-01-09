import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import './styles/global.css'
import './styles/pages/landing.css';

import logoImg from './images/LOGOOO.svg';

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt=""/>


        <main>
          <h1>Leve felicidade para os pets</h1>
          <p>Visite ongs de animais e mude a vida de muitos animaizinhos.</p>
        </main>

        <div className="location">
          <strong>Ubatuba</strong>
          <span>São Paulo</span>
        </div>
        <a href="" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </a>
      </div>
    </div>
  );
}

export default App;
