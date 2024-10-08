import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const locationIcon = new L.Icon({
  iconUrl: "/assets/icons/icon-location.svg",
  popupAnchor: [-0, -0],
  iconSize: [46, 56],
});

export function Map({ mapRef, mainOfficePosition, secondaryOfficePosition }) {
  const center = [
    (mainOfficePosition[0] + secondaryOfficePosition[0]) / 2,
    (mainOfficePosition[1] + secondaryOfficePosition[1]) / 2,
  ];

  return (
    <MapContainer
      className="h-full w-full"
      ref={mapRef}
      center={center}
      zoom={5}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/attributions'>CARTO</a>"
      />
      <Marker position={mainOfficePosition} icon={locationIcon}>
        <Popup>
          <span className="font-bold">Main Office</span> <br /> 1892 Chenoweth
          Drive TN
        </Popup>
      </Marker>
      <Marker position={secondaryOfficePosition} icon={locationIcon}>
        <Popup>
          <span className="font-bold">Office II</span> <br /> 3399 Wines Lane TX
        </Popup>
      </Marker>
    </MapContainer>
  );
}
