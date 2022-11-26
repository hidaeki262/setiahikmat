import React from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const API_KEY = "AIzaSyDq4V7lU-EBoTtCIytlUXPzINPfQKNFUM0";

function MapContainer(props) {
  const [activeMarkers, setActiveMarkers] = React.useState({});
  const [selectedPlace, setSelectedPlaces] = React.useState({});
  const [showInfoWindow, setShowInfoWindow] = React.useState(false);

  const onMarkerClick = (props, marker, e) => {
    setSelectedPlaces(props);
    setActiveMarkers(marker);
    setShowInfoWindow(!showInfoWindow);
  };

  const onClose = (props) => {
    if (showInfoWindow) {
      setShowInfoWindow(!showInfoWindow);
      setActiveMarkers(null);
    }
  };

  return (
    <Map
      google={props.google}
      zoom={18}
      style={mapStyles}
      initialCenter={{
        lat: 3.195845474653551,
        lng: 101.70590284350398,
      }}
    ></Map>
  );
}

export default GoogleApiWrapper({
  apiKey: API_KEY,
})(MapContainer);
