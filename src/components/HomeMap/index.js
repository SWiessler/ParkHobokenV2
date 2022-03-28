import React from "react";
import { Image, FlatList } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const HomeMap = (props) => {

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
    </MapView>
  );
};

export default HomeMap;
