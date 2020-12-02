import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import HMSAnalytics from '@hmscore/react-native-hms-analytics'

const AnalyticsComponent = () => {

    var eventId = "begin_examination"
    var bundle = {"name": "exam_difficulty", "value": "high"}

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
        </View>
    )
}

export default AnalyticsComponent

const styles = StyleSheet.create({})
