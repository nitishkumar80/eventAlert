import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AllPage from "./component/page/Allpage";


import Firstscreen from "./component/page/Firstscreen";


import EventData from "./component/page/EventData";
import EventDetailsScreen from "./component/page/EventDetailsScreen";





const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage">
        <Stack.Screen
          name="Mainscreen"
          component={Firstscreen }
          options={{ title: "Main", headerShown: false }}
        />
        <Stack.Screen
          name="AllPage"
          component={AllPage}
          options={{ title: "All Page", headerShown: false }}
        />
        
          
   




<Stack.Screen
          name="EventData"
          component={EventData }
          options={{ title: "EventData", headerShown: false }}
        />



<Stack.Screen name="EventDetails" component={EventDetailsScreen } options={{ title: 'Event Details' }} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

