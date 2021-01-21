import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/iconmap.svg';

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

      <MapContainer
        center={[-23.4360882,-45.0805191]}
        zoom={15}
        style={{ width: '100%', height:'100%' }}
       >
         <TileLayer 
         url= "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
         
         />
         
        </MapContainer>

        

      <Link to="" className="create-ong">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default PetsMap;