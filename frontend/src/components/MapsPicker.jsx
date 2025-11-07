import React, { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "10px",
};

const MapsPicker = ({ onLocationSelect }) => {
  const [marker, setMarker] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_API_KEY", // ganti dengan API key kamu
  });

  const handleMapClick = useCallback(
    (event) => {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      setMarker({ lat, lng });

      // Ambil alamat berdasarkan koordinat
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        if (status === "OK" && results[0]) {
          onLocationSelect({
            lat,
            lng,
            address: results[0].formatted_address,
          });
        }
      });
    },
    [onLocationSelect]
  );

  if (!isLoaded) return <p>Loading maps...</p>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: -0.9145, lng: 100.4609 }} // default: Padang
      zoom={13}
      onClick={handleMapClick}
    >
      {marker && <Marker position={marker} />}
    </GoogleMap>
  );
};

export default React.memo(MapsPicker);
