import { useJsApiLoader } from "@react-google-maps/api";
import key from "../../keys";
import MapTest1 from "./MapTest1";

function Map1() {
  const { isLoaded } = useJsApiLoader({
    //id: "google-map-script",
    googleMapsApiKey: key,
    libraries: ["places"],
  });

  return (
    <div className="w-full">{isLoaded ? <MapTest1 /> : <p>Loading</p>}</div>
  );
}

export default Map1;
