import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../images/Local.svg';


import '../styles/pages/orphanages-map.css'

function OrpahnpagesMap(){
    return (
     <div id="page-map">
         <aside>
             <header>
                 <img src={mapMarkerImg} alt="Happy"/>

                 <h2>Escolha um orfanato do mapa</h2>
                 <p>Muitas crianças estão esperando a sua visita :)</p>
             </header>

             <footer>
                 <strong>Lapa</strong>
                 <span>Sao Paulo</span>
             </footer>
         </aside>

        <Map 
            center={[-23.5229859,-46.6995142]}
            zoom={15}
            style={{ width: '100%', height: '100%'}}
        >
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {/* <TileLayer 
                url={`htpps://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                /> */}
        </Map>

        <Link to="" className="create-orphanpage">
            <FiPlus size={32} color="#fff" />
        </Link>
     </div>
    )
}

export default OrpahnpagesMap;