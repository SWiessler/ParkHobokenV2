import React from "react";
import { Image, FlatList} from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Auth from '@aws-amplify/auth';
import cars from '../../assets/data/cars';


const HomeMap = (props) => {

  /**var globalUserEmail;
  Auth.currentAuthenticatedUser().then((user) => {
    globalUserEmail = user.attributes.email;
  });

  console.log(globalUserEmail);**/

  // async function User() { 
  //   try { 
  //     const loggedInUser = await Auth.currentAuthenticatedUser();
  //     // console.log(loggedInUser);
  //     return loggedInUser;
  //   }
  //   catch (e) {
  //     console.log(e.message);

  //   }
  // }
  
  // let globalUserEmail = User();
  // console.log(globalUserEmail);



  const getImage = (type) => {
    if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    }
    if (type === 'Comfort') {
      return require('../../assets/images/top-Comfort.png');
    }
    return require('../../assets/images/top-UberXL.png');
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
      {cars.map((car) => (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}
        >
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              transform: [{
                rotate: `${car.heading}deg`
              }]
            }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;
