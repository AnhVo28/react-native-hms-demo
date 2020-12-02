/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import HMSLocation from '@hmscore/react-native-hms-location';

import BackgroundFetch from 'react-native-background-fetch';

import {
  loadEvents,
  persistEvents,
  getTimestamp,
} from './src/utils';




const MyHeadlessTask = async () => {
    console.log('Receiving LocationUpdate!');
    
    try {
      await requestLocationUpdate()
      /* const result = await HMSLocation.FusedLocation.Native.getLastLocation()
      console.log('result: ', result); */
    }
    catch (err){
      console.log('fetch failed', err);
    }
   /*  requestLocationUpdate();
    HMSLocation.FusedLocation.Events.addFusedLocationEventListener(handleLocationUpdate); */
   

  }

  const headlessTask = async ({ taskId }) => {
     // Get task id from event {}:
  console.log('[BackgroundFetch] 💀 HeadlessTask start: ', taskId);

  // Persist the event in AsyncStorage to render in list when app is relaunched.
  const events = await loadEvents() || [];

  events.unshift({
    isHeadless: true,
    taskId,
    timestamp: getTimestamp(),
  });

  await persistEvents(events);

  switch (taskId) {
    case 'com.foo.customtask':
  
    /*   console.log("Received custom task");
      let response = await fetch('https://facebook.github.io/react-native/movies.json');
      let responseJson = await response.json();
      console.log('[BackgroundFetch HeadlessTask] response: ', responseJson); */

      HMSLocation.FusedLocation.Native.getLastLocation()
            .then(pos => console.log('pos: ', pos))
            .catch(err => console.log('Failed to get last location', err));
      break;
    default:
      console.log("Default fetch task");
  }

  // Required:  Signal to native code that your task is complete.
  // If you don't do this, your app could be terminated and/or assigned
  // battery-blame for consuming too much time in background.
  BackgroundFetch.finish(taskId);
  };

  const requestLocationUpdate = () => {
    const LocationRequest = {
      id: 'e0048e' + Math.random() * 10000,
      priority: HMSLocation.FusedLocation.PriorityConstants.PRIORITY_HIGH_ACCURACY,
      interval: 10000,
      numUpdates: 100,
      fastestInterval: 10000.0,
      expirationTime: 60000.0,
      expirationTimeDuration: 60000.0,  //OK
      smallestDisplacement: 0.0,
      maxWaitTime: 10000,
      needAddress: true,
      language: 'en',
      countryCode: 'en',
    };

    HMSLocation.FusedLocation.Native.requestLocationUpdatesWithCallback(LocationRequest)
        .then(({ requestCode }) => {
          /* setLocationUpdateId(requestCode) */
          console.log('requestCode: ', requestCode);
        } )
        .catch(ex => console.log("Exception while requestLocationUpdatesWithCallback " + ex))

    // TODO: Move this to somewhere else:
    HMSLocation.FusedLocation.Native.getLastLocationWithAddress(LocationRequest)
        .then(res => { console.log('Adrress: ', res) });
};

const handleLocationUpdate = location => {
  console.log('location change: ',location);
  /* setPosition(location); */
};

  


AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerHeadlessTask('LocationUpdate', () => MyHeadlessTask);

// Register your BackgroundFetch HeadlessTask
BackgroundFetch.registerHeadlessTask(headlessTask);
