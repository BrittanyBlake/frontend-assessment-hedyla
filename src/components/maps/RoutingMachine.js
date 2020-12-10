import { MapLayer, withLeaflet } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';

class Routing extends MapLayer {
  createLeafletElement() {
    const { map } = this.props;
    const leafletElement = L.Routing.control({
      waypoints: [L.latLng(27.67, 85.316), L.latLng(27.68, 85.321)],
    }).addTo(map.leafletElement);
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);
