import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import HMSAnalytics from '@hmscore/react-native-hms-analytics'

const AnalyticsComponent = () => {

    var eventId = "begin_examination"
    var bundle = {"name": "exam_difficulty", "value": "high"}

    let eventId1 = "test"
    let bundle1 = {"id": "999", "type": "small"}

    return (
        <View>
        <Button 


        onPress={()=>{
        HMSAnalytics.onEvent(eventId, bundle)
        .then(result => console.log('onEvent HMSAnalytics',result))
        .catch((err) => {
            alert("[setAnalyticsEnabled] Error/Exception: " + JSON.stringify(err));
        });
        }} 
        

        
        title='submit event to analytics'></Button>



        <Button 


        onPress={()=>{
        HMSAnalytics.onEvent(eventId1, bundle1)
        .then(result => console.log('onEvent HMSAnalytics',result))
        .catch((err) => {
            alert("[setAnalyticsEnabled] Error/Exception: " + JSON.stringify(err));
        });
        }} 



        title='submit price event to analytics'></Button>
        </View>
    )
}

export default AnalyticsComponent

const styles = StyleSheet.create({})
