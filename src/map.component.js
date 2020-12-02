import React from 'react'
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import HMSMap, { MapTypes }  from "@hmscore/react-native-hms-map";


const MapComponent = () => {

   

    return (
        <SafeAreaView>
            <HMSMap 
                style={styles.mapView}  
                camera={{ target: { latitude: 60.322308, longitude: 25.064569 },   zoom: 11,
                bearing: 5,
                }} 
                compassEnabled={true}
                zoomControlsEnabled={true}
                mapType={MapTypes.NORMAL}
                mapStyle={
                    '[{"mapFeature":"all","options":"labels.icon","paint":{"icon-type":"night"}}]'
                  }

                myLocationEnabled={true}
                myLocationButtonEnabled={true}
            />
        </SafeAreaView>
    )
}

export default MapComponent

const styles = StyleSheet.create({
    mapView : {
        height: '100%',
        width: 300
       
    }
})
