import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

import "./map.css";

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

const Map = (props) => {
  const { lat, lng } = props.location;
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  }; // our location object from earlier

  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={props.location}
          defaultZoom={17}
        >
          <LocationPin
            lat={lat}
            lng={lng}
            // text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
