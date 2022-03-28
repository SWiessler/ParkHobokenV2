import React from "react";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBWXPpJy9-ZMer3ahmL5wMI2UjX9NZv5C4';

const RouteMap = ({ origin, destination }) => {

  const originLoc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };

  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };

  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 40.745255,
        longitude: -74.034775,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey = {GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
      />
      {/* <Marker
        coordinate={originLoc}
        title="origin"
      />
      <Marker
        coordinate={destinationLoc}
        title="destination"
      /> */}
      </MapView>
  );
};

export default RouteMap;