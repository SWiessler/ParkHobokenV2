import React from "react";
import { View, Dimensions, Button, Alert} from "react-native";

import HomeMap from '../../components/HomeMap';
// import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';
import CustomDrawer from "../../navigation/CustomDrawer";
import updateUser from "../../graphql/mutations";
import Auth from '@aws-amplify/auth';

const HomeScreen = (props) => {
  // Auth.currentAuthenticatedUser().then((user) => {
  //   console.log('user email = ' + user.attributes.email);
  // });

  
  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <HomeMap />
      </View>

      {/*  Bottom Comp*/}
      <HomeSearch />
      
      
      <Button
      title="I'm Departing!"
      color="#800000"
      onPress={Auth.currentAuthenticatedUser().then((user) => updateUser(
        {
          email: user.attributes.email, 
          departing: 'true',
        }
      ))
    }
      />
    
    </View>
  );
};

export default HomeScreen;
