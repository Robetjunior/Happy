import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'

import mapMarkerImg from '../images/Local.svg';

function OrpahnpagesMap(){
    return (
     <div className="page-map">
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

        <div></div>

        <Link to="" className="create-orphanpage">
            <FiPlus size={32} color="#fff" />
        </Link>
     </div>
    )
}

export default OrpahnpagesMap;