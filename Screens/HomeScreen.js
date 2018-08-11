import React, { Component } from "react";
import React from 'react';
import Inputs from './Inputs.js'
import {


  View,
  Text,
  StyleSheet,
  Button
} from "react-native";


import {createBottomTabNavigator} from 'react-navigation'

class HomeScreen extends Component {
  render(){
    return (
      <View>
        <Text> This is the Home Screen </Text>
      </View>
    );
  }
}
// Home

class Home extends Component {
  render(){
    return(
      <View>
      <Text>Welcome to the latest training programs:</Text>
      <Button onPress={() => this.props.navigation.navigate('Course1Screen')} title="Summer Intership Program"/>
      <Button onPress={() => this.props.navigation.navigate('Course2Screen')} title="AWS Advane Course"/>

      </View>
    );
  }
}
// Account Screen

class Account extends Component {
  render(){
    return(
      <View>
      <Text> This is the Account Screen </Text>
      <Button onPress={() => this.props.navigation.navigate('AccountScreen')} title="Go to the AccountScreen Screen"/>

      </View>
    );
  }
}

// Upload Task Screen
 class UploadTask extends Component {
  render(){
    return(
      <View>

      <Text> Once your task is done. Go to the next page to submit your file. </Text>
      <Button onPress={() => this.props.navigation.navigate('TaskScreen')} title="Next page"/>

      </View>
  );
  }
 }

 // Tasks Screen
 class Tasks extends Component {
   render(){
     return(
       <View >

       <Text style={{flex:1,alignItems:'center'}}> Tasks : </Text>
     <Text style={{flex:1,alignItems:'center'}}>'Task1 \n'</Text>
     <Text style={{flex:1,alignItems:'center'}}>'Task2 \n'</Text>
     <Text style={{flex:1,alignItems:'center'}}>'Task3 \n'</Text>


       </View>
     );
   }
 }

// Skills Screen
class Skills extends Component {
  render(){
    return(
      <View >

      <Text> This is the Skills Screen </Text>
    //s<Text> 'You get a lot of skills .\n  \n iT Automation \n infrastrctuctur as a code (iac)\n '</Text>
    <Text style={{flex:1,alignItems:'center'}}> GitHub </Text>
    <Text style={{flex:1,alignItems:'center'}}>'iT Automation '</Text>
    <Text style={{flex:1,alignItems:'center'}}>'infrastrctuctur as a code (iac)'</Text>


      </View>
    );
  }
}


const Home = () ⇒ {
return (
<AccountScreen />
)
}

const HomeScreenTabNavigator = createBottomTabNavigator ({
  Home: {
    screen: Home
  },
  Account:{
    screen: Account
  },
  UploadTask: {
    screen: UploadTask
  },
  Skills: {
    screen: Skills
  }
}
, {
  animationEnabled: true
}
)

export default HomeScreenTabNavigator;
