import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';
import {Provider} from "react-redux";

const Tab = createBottomTabNavigator();
const ReviewStack = createStackNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Map" component={MapScreen}/>
            <Tab.Screen name="Deck" component={DeckScreen}/>
        </Tab.Navigator>
    )
}

const ReviewNavigator = () => {
    return (
        <ReviewStack.Navigator>
            <ReviewStack.Screen name="Settings" component={ReviewScreen}/>
            <ReviewStack.Screen name="Details" component={SettingsScreen}/>
        </ReviewStack.Navigator>
    )
}

export default function App() {
  return (
      <Provider store={store}>
          <NavigationContainer>
              <Tab.Navigator>
                  <Tab.Screen name="Welcome" component={WelcomeScreen}/>
                  <Tab.Screen name="Auth" component={AuthScreen}/>
                  <Tab.Screen name="Main" component={TabNavigator}/>
              </Tab.Navigator>
          </NavigationContainer>
      </Provider>

  );
}