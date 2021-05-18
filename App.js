import {StyleSheet, AppRegistry} from 'react-native'

import React, {useEffect} from 'react';
import { Permission, PERMISSION_TYPE } from './AppPermisson'
import Routes from './Routes';
import HMSAvailability, {ErrorCode} from "@hmscore/react-native-hms-availability";


 

const App =() => {



  


  useEffect(() => {

    Permission.requestMultiple([PERMISSION_TYPE.location, PERMISSION_TYPE.backgoundLocation, PERMISSION_TYPE.activityDection])

    
    const getErrorString = (errorCode = ErrorCode.HMS_CORE_APK_UNAVAILABLE) => {
      HMSAvailability.getErrorString(errorCode)
       .then((res) => console.log(res))
       .catch((err) => console.log(err));
    }

    HMSAvailability.isHuaweiMobileServicesAvailable().then((res) => getErrorString(res))


    return () => {
      
    }
  }, [])

  




  return (
    <>
      <Routes></Routes>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
