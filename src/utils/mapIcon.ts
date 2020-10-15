import Leaflet from 'leaflet';

import mapMarkerImg from '../images/Local.svg'

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
  
    iconSize: [58, 68],
    iconAnchor: [29, 48],
    popupAnchor: [180, 20]
  })

  export default mapIcon;