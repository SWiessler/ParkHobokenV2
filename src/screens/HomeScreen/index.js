import React from "react";
import { View, Dimensions, Button, Alert} from "react-native";

import HomeMap from '../../components/HomeMap';
// import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';
import CustomDrawer from "../../navigation/CustomDrawer";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
import Auth from '@aws-amplify/auth';
import { API, Amplify } from "aws-amplify";
import config from "../../aws-exports";

Amplify.configure(config);

const HomeScreen = (props) => {
  
  
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
      onPress={async () => {
        const user = await Auth.currentUserInfo();
        console.log(user);
        
        // console.log(JSON.stringify(updateUserDetails));

        const updateUserDetails = {
          id: user.username,
          username: user.username,
          email: user.attributes.email,
          departing: "true"
        };

        try{
          const userUpdate = await API.graphql({
            query: mutations.updateUser,
            variables: {input: updateUserDetails}
          });
          console.log(JSON.stringify(userUpdate));
        }catch(e){
          console.log(e);
        }
        // MATCHING INITIAL DEV
        try{
          let filter = {
            departing: {
                eq: "true" //equals true
            }
          };
          const departers = await API.graphql({
              query: queries.listUsers,
              variables: {filter: filter}
          });
          filter = {
            departing: {
                eq: "false" //equals true
            }
          };
          const arrivers = await API.graphql({
              query: queries.listUsers,
              variables: {filter: filter}
          });
          // Logging
          console.log("arrivers:");
          console.log(JSON.stringify(arrivers));
          console.log("departers:");
          console.log(JSON.stringify(departers));

          // if arrivers empty then display alert
          // todo
          // if arrivers

          
        }catch(e){
          console.log(e);
        }
      }}
      />
    
    </View>
  );
};

export default HomeScreen;
