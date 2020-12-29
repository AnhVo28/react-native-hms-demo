
import React, { useState, useCallback, useEffect, AppRegistry, Linking  } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    Button,
    TextInput,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import {openSettings} from 'react-native-permissions';

import HMSLocation from '@hmscore/react-native-hms-location';






const LocationComponent = () => {
    return (
        <>
          <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
              <Header />
              <View style={styles.body}>
             {/*    <Permissions />
                <View style={styles.divider} /> */}
                <LocationAvailability />
                <View style={styles.divider} />
                
                <LocationInfo />
                <View style={styles.divider} />
                <LocationSettings />
                <View style={styles.divider} />
                <MockLocation />
                <View style={styles.divider} />
                <LocationEnhance />
                <View style={styles.divider} />
                <Geofence />
                <View style={styles.divider} />
                <ActivityIdentification />
                <View style={styles.divider} />
                <ActivityConversion />
                <View style={styles.divider} />
              </View>
            </ScrollView>
          </SafeAreaView>
        </>
    );
};


const Header = () => {
    // Initialize Location Kit
    useEffect(() => {
        HMSLocation.LocationKit.Native.init()
            .then(_ => console.log("Done loading"))
            .catch(ex => console.log("Error while initializing." + ex));
    }, []);

    return (
        <>
          <View style={styles.header}>
            <View style={styles.headerTitleWrapper}>
              <Text style={styles.headerTitle}>HMS Location Kit</Text>
            </View>
            <View style={styles.headerLogoWrapper}>
              <Image
                style={styles.headerLogo}
                source={require('./images/hms-rn-logo.png')}
                />
            </View>
          </View>
        </>
    )};


const Permissions = () => {
    const [hasLocationPermission, setHasLocationPermission] = useState(false);
    const [hasActivityIdentificationPermission, setHasActivityIdentificationPermission] = useState(false);

    useEffect(() => {
        // Check location permissions
        HMSLocation.FusedLocation.Native.hasPermission()
            .then(result => setHasLocationPermission(result))
            .catch(ex => console.log("Error while getting location permission info: " + ex));

        // Check ActivityIdentification permissions
        HMSLocation.ActivityIdentification.Native.hasPermission()
            .then(result => setHasActivityIdentificationPermission(result))
            .catch(ex => console.log("Error while getting activity identification permission info: " + ex));
    }, []);

    const requestLocationPermisson = useCallback(() => {
        HMSLocation.FusedLocation.Native.requestPermission();
    }, []);

    const requestActivityIdentificationPermisson = useCallback(() => {
        HMSLocation.ActivityIdentification.Native.requestPermission();
    }, []);

    return (
        <>
          <View style={styles.sectionContainer}>
            <View style={styles.spaceBetweenRow}>
              <Text style={styles.sectionTitle}>Permissions</Text>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <View style={styles.spaceBetweenRow}>
              <Text style={styles.sectionTitle}>Location</Text>
              <Button
                title="Request Permission"
                onPress={requestLocationPermisson}
                />
            </View>
            <View style={styles.spaceBetweenRow}>
              <Text style={styles.monospaced}>{JSON.stringify(hasLocationPermission, null, 2)}</Text>
            </View>
          </View>

          <View style={styles.sectionContainer}>
            <View style={styles.spaceBetweenRow}>
              <Text style={styles.sectionTitle}>ActivityIdentification</Text>
              <Button
                title="Request Permission"
                onPress={requestActivityIdentificationPermisson}
                />
            </View>
            <View style={styles.spaceBetweenRow}>
              <Text style={styles.monospaced}>{JSON.stringify(hasActivityIdentificationPermission, null, 2)}</Text>
            </View>
          </View>
        </>
    )
};


const LocationAvailability = () => {
    const [locationAvailable, setLocationAvailable] = useState(false);

    const getLocationAvailability = useCallback(() => {
        HMSLocation.FusedLocation.Native.getLocationAvailability()
            .then(x => setLocationAvailable(x))
            .catch(err => console.log('Failed to get location availability', err));
    }, []);

    return (
        <>
          <View style={styles.sectionContainer}>
            <View style={styles.spaceBetweenRow}>
              <Text style={styles.sectionTitle}>Location Availability</Text>
              <Button title="Check" onPress={getLocationAvailability} />
   {/*            <Button
    title="Open Settings"
    onPress={() => {
      openSettings().catch(() => console.warn('cannot open settings'));
    }}
      /> */}
            </View>
            <View style={styles.spaceBetweenRow}>
              <Text style={styles.monospaced}>{JSON.stringify(locationAvailable, null, 2)}</Text>
            </View>
          </View>
        </>
    )
};


const MockLocation = () => {
  const [lat, setLat] = useState("41.3");
  const [long, setLong] = useState("29.1");

  const enableMockLocation = () => {
      HMSLocation.FusedLocation.Native.setMockMode(true)
          .then(res => console.log('Mock mode ', res))
          .catch(err => console.log(err));
  };

  const disableMockLocation = () => {
      HMSLocation.FusedLocation.Native.setMockMode(false)
          .then(res => console.log('Mock mode ', res))
          .catch(err => console.log(err));
  };

  const setMockLocation = () => {
      HMSLocation.FusedLocation.Native.setMockMode(true)
          .then(res => { console.log('Mock mode ', res); })
          .catch(err => { console.log(err); });

      HMSLocation.FusedLocation.Native.setMockLocation({ latitude: parseFloat(long), longitude: parseFloat(lat) })
          .then(res => { console.log('MOCK SET', res); })
          .catch(err => { console.log(err); });
  };

  return (
      <>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Mock Location</Text>
          <View>
            <TextInput style={styles.input}
                       placeholder="LAT"
                       value={long}
                       keyboardType="numeric"
                       onChangeText={setLong} />
            <TextInput style={styles.input}
                       placeholder="LONG"
                       value={lat}
                       onChangeText={setLat} />
          </View>
          <View style={styles.centralizeContent}>
            <Button
              title="Set"
              onPress={setMockLocation}
              />
            <Button
              title="Enable"
              onPress={enableMockLocation}
              />
            <Button
              title="Disable"
              onPress={disableMockLocation}
              />
          </View>
        </View>
      </>
  )
};

const LocationSettings = () => {
    const [locationSettings, setLocationSettings] = useState();

    const checkLocationSettings = useCallback(() => {
        const locationRequest = {
            id: "locationRequest" + Math.random() * 10000,
            priority: HMSLocation.FusedLocation.PriorityConstants.PRIORITY_HIGH_ACCURACY,
            interval: 5000,
            numUpdates: 20,
            fastestInterval: 6000,
            expirationTime: 100000,
            expirationTimeDuration: 100000,
            smallestDisplacement: 0,
            maxWaitTime: 1000.0,
            needAddress: false,
            language: "en",
            countryCode: "en",
        };

        const locationSettingsRequest = {
            locationRequests: [locationRequest],
            alwaysShow: true,
            needBle: false,
        };

        HMSLocation.FusedLocation.Native.checkLocationSettings(locationSettingsRequest)
            .then(res => setLocationSettings(res))
            .catch(ex => console.log("Error while getting location settings. " + ex))
    });

    return (
        <>
          <View style={styles.sectionContainer}>
            <View style={styles.spaceBetweenRow}>
              <Text style={styles.sectionTitle}>Location Settings</Text>
              <Button title="Check" onPress={checkLocationSettings} />
            </View>
            <View style={styles.spaceBetweenRow}>
              <Text style={styles.sectionDescription}>
              </Text>
            </View>
            <View style={styles.spaceBetweenRow}>
              <Text style={styles.monospaced}>
                {JSON.stringify(locationSettings, null, 2)}
              </Text>
            </View>
          </View>
        </>
    );
};


const LocationInfo = () => {
    const [position, setPosition] = useState();
    const [locationUpdateId, setLocationUpdateId] = useState();
    const [autoUpdateEnabled, setAutoUpdateEnabled] = useState(false);

    const getLocation = useCallback(() => {
        HMSLocation.FusedLocation.Native.getLastLocation()
            .then(pos => setPosition(pos))
            .catch(err => console.log('Failed to get last location', err));
    }, []);

    const requestLocationUpdate = useCallback(() => {
        const LocationRequest = {
            id: 'e0048e' + Math.random() * 10000,
            priority: HMSLocation.FusedLocation.PriorityConstants.PRIORITY_HIGH_ACCURACY,
            interval: 10000,
            numUpdates: 100,
            fastestInterval: 10000.0,
            expirationTime: 600000.0,
            expirationTimeDuration: 600000.0,  //OK
            smallestDisplacement: 0.0,
            maxWaitTime: 10000,
            needAddress: true,
            language: 'en',
            countryCode: 'en',
        };

        HMSLocation.FusedLocation.Native.requestLocationUpdatesWithCallback(LocationRequest)
            .then(({ requestCode }) => {
              console.log('requestCode: ', requestCode);
              setLocationUpdateId(requestCode)
            } )
            .catch(ex => console.log("Exception while requestLocationUpdatesWithCallback " + ex))

        // TODO: Move this to somewhere else:
        HMSLocation.FusedLocation.Native.getLastLocationWithAddress(LocationRequest)
            .then(res => { console.log('Adrress: ', res) });
    }, []);

    const handleLocationUpdate = location => {
        console.log('location change: ',location);
        setPosition(location);
    };

    const addFusedLocationEventListener = useCallback(() => {
        requestLocationUpdate();
        HMSLocation.FusedLocation.Events.addFusedLocationEventListener(handleLocationUpdate);
        setAutoUpdateEnabled(true);
    }, []);

    const removeFusedLocationEventListener = useCallback(() => {
        HMSLocation.FusedLocation.Events.removeFusedLocationEventListener(
            locationUpdateId,
            handleLocationUpdate,
        );
        setAutoUpdateEnabled(false);
    }, [locationUpdateId]);

    return (
        <>
          <View style={styles.sectionContainer}>
            <View style={styles.spaceBetweenRow}>
              <Text style={styles.sectionTitle}>Location Info</Text>
              <Button title="Get last location" onPress={getLocation} />
            </View>
            <View style={styles.spaceBetweenRow}>
              <Text style={styles.monospaced}>
                {JSON.stringify(position, null, 2)}
              </Text>
            </View>
            <View style={styles.centralizeContent}>

      {/*   <Button title='Start bg fetch'
          onPress={()=>{
              BackgroundFetch.scheduleTask({
            taskId: "com.foo.customtask",
            forceAlarmManager: true,
            delay: 5000 , // <-- milliseconds,
            stopOnTerminate: false,
            enableHeadless: true,
            forceAlarmManager: true,
            periodic: true  
          }); 
          }}
        >

        </Button> */}
              <Button
                title={
                    autoUpdateEnabled
                        ? 'Disable auto-update'
                        : 'Enable auto-update'
                }
                onPress={() => {
                    if (autoUpdateEnabled) {
                        removeFusedLocationEventListener();
                    } else {
                        addFusedLocationEventListener();
                    }
                }}
                />
            </View>
          </View>
        </>
    )
}

const LocationEnhance = () => {
  const [navigationState, setNavigationState] = useState();

  const getNavigationState = useCallback(() => {
      HMSLocation.FusedLocation.Native.getNavigationContextState(HMSLocation.FusedLocation.NavigationRequestConstants.IS_SUPPORT_EX)
          .then(res => setNavigationState(res))
          .catch(ex => console.log("Error while getting navigation state. " + ex))
  });

  return (
      <>
        <View style={styles.sectionContainer}>
          <View style={styles.spaceBetweenRow}>
            <Text style={styles.sectionTitle}>Location Enhance</Text>
            <Button title="Check" onPress={getNavigationState} />
          </View>
          <View style={styles.spaceBetweenRow}>
            <Text style={styles.sectionDescription}>
            </Text>
          </View>
          <View style={styles.spaceBetweenRow}>
            <Text style={styles.monospaced}>
              {JSON.stringify(navigationState, null, 2)}
            </Text>
          </View>
        </View>
      </>
  );
};

const Geofence = () => {
    const [reqCode, setReqCode] = useState();
    const [geoSubscribed, setGeoSubscribed] = useState(false);
    const [geofenceResponse, setGeofenceResponse] = useState();
    const [currentPosition, setCurrentPosition] = useState();

    useEffect(()=>{
      HMSLocation.FusedLocation.Native.getLastLocation()
            .then(pos => {
        /*       console.log('pos:::', pos); */
              setCurrentPosition(pos)
            } )
            .catch(err => console.log('Failed to get last location', err));
    },[])

    
    /**
     * Geofence List
     */
    



    

    

    const createGeofenceList = useCallback(() => {
      const geofence1 = {
        longitude:  25.06496,
        latitude: 60.3225399026,
        radius: 3400.0,
        uniqueId: 'e00401',
        conversions: 1 | 2 | 4,
        validContinueTime: 100000.0,
        dwellDelayTime: 10000,
        notificationInterval: 4,
    };

    const geofence2 = {
      longitude:  currentPosition.longitude,
      latitude: currentPosition.latitude,
      radius: 3400.0,
      uniqueId: 'e00410',
      conversions: 2,
      validContinueTime: 100000.0,
      dwellDelayTime: 10000,
      notificationInterval: 4,
  };

  const geofence3 = {
    longitude:  currentPosition.longitude,
    latitude: currentPosition.latitude,
    radius: 3400.0,
    uniqueId: 'e00444',
    conversions: 4,
    validContinueTime: 100000.0,
    dwellDelayTime: 10000,
    notificationInterval: 4,
};



      const geofenceRequest = {
        geofences: [ geofence1],
        conversions: 1 | 2 | 4 ,
        coordinate: 1,
      };

      console.log('geofenceRequest: ', geofenceRequest);
        HMSLocation.Geofence.Native.createGeofenceList(
            geofenceRequest.geofences,
            geofenceRequest.conversions,
            geofenceRequest.coordinate,
        )
            .then(res => {
                console.log(res);
                setReqCode(parseInt(res.requestCode));
            })
            .catch(err => {
                console.log(err);
            });
    })

    const deleteGeofenceList = useCallback(reqCode => {
        HMSLocation.Geofence.Native.deleteGeofenceList(reqCode)
            .then(res => {
                console.log(res);
                setReqCode(null);
            })
            .catch(err => console.log('ERROR: GeofenceList deletion failed', err))
    }, []);

    const handleGeofenceEvent = useCallback(geo => {
        console.log('GEOFENCE : ', geo);
        setGeofenceResponse(geo);
    });

    const addGeofenceEventListener = useCallback(() => {
        HMSLocation.Geofence.Events.addGeofenceEventListener(
            handleGeofenceEvent,
        );
        setGeoSubscribed(true);
    }, []);

    const removeGeofenceEventListener = useCallback(() => {
        HMSLocation.Geofence.Events.removeGeofenceEventListener(
            handleGeofenceEvent,
        )
        setGeoSubscribed(false);
    })

    const geofenceData = geofenceResponse 
         /*  &&
          HMSLocation.Geofence.Data
          .configure(geofenceResponse)
          .build(); */

    return (
        <>
          <View style={styles.sectionContainer}>
            <View style={styles.spaceBetweenRow}>
              <Text style={styles.sectionTitle}>Geofence</Text>
            </View>
            <View style={styles.centralizeContent}>
              <Button
                title={reqCode ? "Remove Geofence" : "Create Geofence"}
                onPress={() => {
                    if (reqCode) {
                        deleteGeofenceList(reqCode)
                    } else {
                        createGeofenceList()
                    }
                }} />
                <Button
                  title={geoSubscribed ? "Unsubscribe" : "Subscribe"}
                  onPress={() => {
                      if (geoSubscribed) {
                          removeGeofenceEventListener()
                      } else {
                          addGeofenceEventListener()
                      }
                  }} />
            </View>
            <View style={styles.spaceBetweenRow}>
              <Text style={styles.sectionDescription}>
                <Text style={styles.boldText}>Geofence Request Code</Text>:{' '}
                {`${reqCode || ''}`}
              </Text>
            </View>
            <Text style={styles.boldText}>
              {JSON.stringify(geofenceResponse, null, 2)}
            </Text>
          </View>
        </>
    )
}

const ActivityIdentification = () => {
    const [idReqCode, setIdReqCode] = useState();

    const [identificationSubscribed, setIdentificationSubscribed] = useState(false);

    const [identificationResponse, setIdentificationResponse] = useState();

    // Activity Identification
    const createActivityIdentification = useCallback(() => {
        HMSLocation.ActivityIdentification.Native.createActivityIdentificationUpdates(2000)
            .then(res => {
                console.log(res);
                setIdReqCode(res.requestCode);
            })
            .catch(err => console.log('ERROR: Activity identification failed', err));
    }, []);
    const removeActivityIdentification = useCallback(idReqCode => {
        HMSLocation.ActivityIdentification.Native.deleteActivityIdentificationUpdates(idReqCode)
            .then(res => {
                console.log(res);
                setIdReqCode(null);
            })
            .catch(err => console.log('ERROR: Activity identification deletion failed', err));
    }, []);

    const handleActivityIdentification = useCallback(act => {
        console.log('ACTIVITY : ', act);
        setIdentificationResponse(act);
    }, []);

    const addActivityIdentificationEventListener = useCallback(() => {
        HMSLocation.ActivityIdentification.Events.addActivityIdentificationEventListener(
            handleActivityIdentification,
        );
        setIdentificationSubscribed(true);
    }, []);

    const removeActivityIdentificationEventListener = useCallback(() => {
        HMSLocation.ActivityIdentification.Events.removeActivityIdentificationEventListener(
            handleActivityIdentification,
        );
        setIdentificationSubscribed(false);
    }, []);

    return (
        <>
          <View style={styles.sectionContainer}>
            <View style={styles.spaceBetweenRow}>
              <Text style={styles.sectionTitle}>Activity Identification</Text>
            </View>
            <View style={styles.centralizeContent}>
              <Button
                title={
                    idReqCode ?
                        "Remove Identification" :
                        "Get Identification"
                }
                onPress={() => {
                    if (idReqCode) {
                        removeActivityIdentification(idReqCode)
                    } else {
                        createActivityIdentification(2000)
                    }
                }} />
                <Button
                  title={identificationSubscribed ? "Unsubscribe" : "Subscribe"}
                  onPress={() => {
                      if (identificationSubscribed) {
                          removeActivityIdentificationEventListener()
                      } else {
                          addActivityIdentificationEventListener()
                      }
                  }} />
            </View>
            <View style={styles.spaceBetweenRow}>
              <Text style={styles.sectionDescription}>
                <Text style={styles.boldText}>Activity Request Code</Text>:{' '}
                {`${idReqCode || ''}`}
              </Text>
            </View>
            <View style={styles.spaceBetweenRow}>
              <Text style={styles.monospaced}>
                {JSON.stringify(identificationResponse, null, 2)}
              </Text>
            </View>
          </View>
        </>
    );
}

const ActivityConversion = () => {
    const [convReqCode, setConvReqCode] = useState();
    const [conversionSubscribed, setConversionSubscribed] = useState(false);
    const [conversionResponse, setConversionResponse] = useState();

    // Activity Conversion
    const handleActivityConversion = useCallback(conv => {
        console.log('CONVERSION : ', conv);
        setConversionResponse(conv);
    }, []);

    const createConversionUpdates = useCallback(() => {
        HMSLocation.ActivityIdentification.Native.createActivityConversionUpdates(
            [
                // STILL
                {
                    conversionType: HMSLocation.ActivityIdentification.ActivityConversions.ENTER_ACTIVITY_CONVERSION,
                    activityType: HMSLocation.ActivityIdentification.Activities.STILL
                },
                {
                    conversionType: HMSLocation.ActivityIdentification.ActivityConversions.EXIT_ACTIVITY_CONVERSION,
                    activityType: HMSLocation.ActivityIdentification.Activities.STILL
                },

                // ON FOOT
                {
                    conversionType: HMSLocation.ActivityIdentification.ActivityConversions.ENTER_ACTIVITY_CONVERSION,
                    activityType: HMSLocation.ActivityIdentification.Activities.FOOT
                },
                {
                    conversionType: HMSLocation.ActivityIdentification.ActivityConversions.EXIT_ACTIVITY_CONVERSION,
                    activityType: HMSLocation.ActivityIdentification.Activities.FOOT
                },

                // RUNNING
                {
                    conversionType: HMSLocation.ActivityIdentification.ActivityConversions.ENTER_ACTIVITY_CONVERSION,
                    activityType: HMSLocation.ActivityIdentification.Activities.RUNNING
                },
                {
                    conversionType: HMSLocation.ActivityIdentification.ActivityConversions.EXIT_ACTIVITY_CONVERSION,
                    activityType: HMSLocation.ActivityIdentification.Activities.RUNNING
                }
            ])
            .then(res => {
                console.log(res);
                setConvReqCode(res.requestCode);
            })
            .catch(err => console.log('ERROR: Activity Conversion creation failed', err));
    }, []);

    const deleteConversionUpdates = useCallback(convReqCode => {
        HMSLocation.ActivityIdentification.Native.deleteActivityConversionUpdates(convReqCode)
            .then(res => {
                console.log(res);
                setConvReqCode(null);
            })
            .catch(err => console.log('ERROR: Activity Conversion deletion failed', err));
    }, []);

    const addActivityConversionEventListener = useCallback(() => {
        HMSLocation.ActivityIdentification.Events.addActivityConversionEventListener(
            handleActivityConversion,
        );
        setConversionSubscribed(true);
    }, []);

    const removeActivityConversionEventListener = useCallback(() => {
        HMSLocation.ActivityIdentification.Events.removeActivityConversionEventListener(
            handleActivityConversion,
        );
        setConversionSubscribed(false);
    }, []);

    return (
        <>
          <View style={styles.sectionContainer}>
            {/* Conversion */}
            <View style={styles.spaceBetweenRow}>
              <Text style={styles.sectionTitle}>Conversion Update</Text>
            </View>
            <View style={styles.centralizeContent}>
              <Button
                title={
                    convReqCode ?
                        "Remove Update" :
                        "Create Update"
                }
                onPress={() => {
                    if (convReqCode) {
                        console.log('CONV REQ CODE BEFORE REMOVAL', convReqCode);
                        deleteConversionUpdates(convReqCode)
                    } else {
                        createConversionUpdates()
                    }
                }} />
                <Button
                  title={conversionSubscribed ? "Unsubscribe" : "Subscribe"}
                  onPress={() => {
                      if (conversionSubscribed) {
                          removeActivityConversionEventListener()
                      } else {
                          addActivityConversionEventListener()
                      }
                  }} />
            </View>
            <View style={styles.spaceBetweenRow}>
              <Text style={styles.sectionDescription}>
                <Text style={styles.boldText}>Conversion Request Code</Text>:{' '}
                {`${convReqCode || ''}`}
              </Text>
            </View>
            <View style={styles.spaceBetweenRow}>
              <Text style={styles.monospaced}>
                {JSON.stringify(conversionResponse, null, 2)}
              </Text>
            </View>
          </View>
        </>
    );
}



const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    activityData: {
        marginTop: 8,
        marginLeft: 5,
        fontSize: 16,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    header: {
        height: 180,
        width: '100%',
    },
    headerTitleWrapper: {
        position: 'absolute',
        justifyContent: 'center',
        top: 0,
        bottom: 0,
        right: 0,
        left: 20,
    },
    headerTitle: { fontSize: 17, fontWeight: '700', color: '#5FD8FF' },
    headerLogoWrapper: { alignItems: 'flex-end', justifyContent: 'center' },
    headerLogo: { height: 200, width: 200 },
    spaceBetweenRow: { flexDirection: 'row', justifyContent: 'space-between' },
    divider: {
        width: '90%',
        alignSelf: 'center',
        height: 1,
        backgroundColor: 'grey',
        marginTop: 20,
    },
    boldText: { fontWeight: 'bold' },
    centralizeSelf: { alignSelf: 'center' },
    centralizeContent: { flexDirection: 'row', justifyContent: 'center' },
    monospaced: { fontFamily: 'monospace' },
    button: { padding: 20, backgroundColor: "#ccc", marginBottom: 10 },
});

export default LocationComponent;


