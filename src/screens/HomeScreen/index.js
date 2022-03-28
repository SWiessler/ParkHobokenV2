import React from "react";
import { View, Dimensions } from "react-native";

import HomeMap from '../../components/HomeMap';
// import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';
import CustomDrawer from "../../navigation/CustomDrawer";

const HomeScreen = (props) => {
  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <HomeMap />
      </View>

      {/*  Bottom Comp*/}
       <HomeSearch /> 
    </View>
  );
};

export default HomeScreen;
