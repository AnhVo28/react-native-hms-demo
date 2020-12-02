import {StyleSheet, AppRegistry} from 'react-native'

import React, {useEffect} from 'react';
import { Permission, PERMISSION_TYPE } from './AppPermisson'
import Routes from './Routes';


 

const App =() => {


  useEffect(() => {
    Permission.requestMultiple([PERMISSION_TYPE.location, PERMISSION_TYPE.backgoundLocation, PERMISSION_TYPE.activityDection])
   
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
