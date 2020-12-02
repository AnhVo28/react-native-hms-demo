import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeComponent from './src/home.component'
import AdsComponent from './src/ads.component';
import AnalyticsComponent from './src/analytics.component';
import LocationComponent from './src/location.component'
import MapComponent from './src/map.component'
import MapDemo from './src/mapDemo.component';



const Stack = createStackNavigator();

const Routes = ()=> {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeComponent} />
        <Stack.Screen name="Ads" component={AdsComponent} />
        <Stack.Screen name="Analytics" component={AnalyticsComponent} />
        <Stack.Screen name="Location" component={LocationComponent} />
        <Stack.Screen name="Map" component={MapComponent} />
        <Stack.Screen name="MapDemo" component={MapDemo} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
export default Routes;