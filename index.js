/**
 * @format
 */

import {AppRegistry, ToastAndroid} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {
  HmsPushMessaging,
  RNRemoteMessage,
  HmsLocalNotification,
  HmsPushEvent,
} from "@hmscore/react-native-hms-push";


  HmsPushEvent.onNotificationOpenedApp((result) => {
    console.log("onNotificationOpenedApp", result);
    ToastAndroid.show(JSON.stringify(result, "\n", 4), ToastAndroid.SHORT);
  });
  
  HmsPushMessaging.setBackgroundMessageHandler((dataMessage) => {
    console.log("onRemoteMessageReceived in killed state", dataMessage);
    HmsLocalNotification.localNotification({
      [HmsLocalNotification.Attr.title]: "[Headless] DataMessage Received",
      [HmsLocalNotification.Attr.message]: new RNRemoteMessage(
        dataMessage
      ).getDataOfMap(),
    })
      .then((result) => {
        console.log("[Headless] DataMessage Received", result);
      })
      .catch((err) => {
        console.log(
          "[LocalNotification Default] Error/Exception: " + JSON.stringify(err)
        );
      });
  
    return Promise.resolve();
  });
  



AppRegistry.registerComponent(appName, () => App);



