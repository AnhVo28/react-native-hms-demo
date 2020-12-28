import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeComponent from './src/home.component'
import AdsComponent from './src/ads.component';
import AnalyticsComponent from './src/analytics.component';
import LocationComponent from './src/location.component'
import MapComponent from './src/map.component'
import MapDemo from './src/mapDemo.component';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import DtmComponent from './src/dtm.component';
import SiteComponent from './src/site.component';
import PushMainPage from './src/push/MainPage'
import CustomURI from './src/push/CustomURI'
import LocalNotification from './src/push/LocalNotification'
import PushComponent from './src/push.component';


enableScreens();
const Stack = createNativeStackNavigator();
const NestedStack = createStackNavigator()


/* const Stack = createStackNavigator(); */

const Routes = ()=> {
    return (
      <NavigationContainer>
        <Stack.Navigator 
         screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
            height:64
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        >
          <Stack.Screen name="Home" component={HomeComponent}  options={{
          title: 'My home',
        }} />
          <Stack.Screen name="Ads" component={AdsComponent} />
          <Stack.Screen name="Analytics" component={AnalyticsComponent} />
          <Stack.Screen name="Location" component={LocationComponent} />
          <Stack.Screen name="Map" component={MapComponent} />
          <Stack.Screen name="MapDemo" component={MapDemo} />
          <Stack.Screen name="DTM" component={DtmComponent} />
          <Stack.Screen name="Site" component={SiteComponent} />
          <Stack.Screen name="Push" component={PushComponent} />
          <Stack.Screen name="PushDemo"  options={{ headerShown: false }} component={PushDemo} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  

  const PushDemo = ()=>{

    return(
      <NestedStack.Navigator>
        <NestedStack.Screen name="PushMainPage" component={PushMainPage} />
        <NestedStack.Screen name="CustomURI" component={CustomURI} />
        <NestedStack.Screen name="LocalNotification" component={LocalNotification} />
    </NestedStack.Navigator>
    )
  }
export default Routes;