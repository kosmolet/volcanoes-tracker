import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";
import InfoBox from "./InfoBox";

const NATURAL_EVENT_WILDFIRE = 8;
const NATURAL_EVENT_VOLCANOS = 12;
const NATURAL_EVENT_SEA_LAKE_ICE = 15;

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const events = eventData.map((event, index) => {
    if (event.categories[0]?.id === NATURAL_EVENT_WILDFIRE) {
      return (
        <LocationPin
          key={index}
          lat={event.geometries[0].coordinates[1]}
          lng={event.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: event.id, title: event.title })}
        />
      );
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_CLOUD_API }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {events}
      </GoogleMapReact>
      {locationInfo && <InfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 59.334591,
    lng: 18.06324,
  },
  zoom: 6,
};

export default Map;
