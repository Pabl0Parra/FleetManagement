import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Buoy icon setup
const buoyIcon = new L.Icon({
  iconUrl: '../images/buoyRendering.ico',
  iconSize: [55, 25],
  iconAnchor: [12, 12],
  popupAnchor: [0, -10],
});

const MapComponent = () => {
  const buoyPosition = [36.7783, -122.4194];

  return (
    <MapContainer
      center={buoyPosition}
      zoom={9}
      scrollWheelZoom={false}
      style={{
        height: '330px',
        width: '90%',
        margin: '4% auto',
        borderRadius: '16px',
        zIndex: 0,
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={buoyPosition} icon={buoyIcon}>
        <Popup>
          Buoy Location
          <br />
          Latitude: 45.1234
          <br />
          Longitude: -93.1234
          <br />
          <img
            src="../images/buoyRendering.ico"
            width={25}
            height={25}
            alt="Buoy Icon"
          />
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
