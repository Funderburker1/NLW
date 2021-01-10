import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';

import logoImg from '../images/pet2.svg';


function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="" />

        <main>
          <h1>Leve felicidade para os pets</h1>
          <p>Visite ongs de animais e mude a vida de muitos animaizinhos.</p>
        </main>

        <div className="location">
          <strong>Ubatuba</strong>
          <span>São Paulo</span>
        </div>
        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;