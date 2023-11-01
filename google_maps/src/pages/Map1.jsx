import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import key from "../../keys";
function Map1() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: key,
  });

  const center = {
    lat: 6.82610284335312,
    lng: 79.906556248855,
  };
  const containerStyle = {
    width: "1000px",
    height: "500px",
  };
  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
          // onLoad={onLoad}
          // onUnmount={onUnmount}
        >
          <></>
        </GoogleMap>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default Map1;
