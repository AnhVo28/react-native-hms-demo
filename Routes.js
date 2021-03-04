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
/* import SiteComponent from './src/site.component'; */
import PushMainPage from './src/push/MainPage'
import CustomURI from './src/push/CustomURI'
import LocalNotification from './src/push/LocalNotification'
import PushComponent from './src/push.component';
/* import Connection from './src/nearby/Connection'
import Message from './src/nearby/Message'
import StartPage from './src/nearby/StartPage'
import Wifi from './src/nearby/Wifi'
import NearbyComponent from './src/nearby.component'; */
import ScanComponent from './src/scan.component'
/* import MLComponent from './src/ml.component' */



/* import Translation from './src/HmsLanguageVoiceRelatedServices/Translation';
import LanguageDetection from './src/HmsLanguageVoiceRelatedServices/LanguageDetection';
import TextToSpeech from './src/HmsLanguageVoiceRelatedServices/TextToSpeech';
import RealTimeTranscription from './src/HmsLanguageVoiceRelatedServices/RealTimeTranscription';
import AudioFileTranscription from './src/HmsLanguageVoiceRelatedServices/AudioFileTranscription';
import SoundDetection from './src/HmsLanguageVoiceRelatedServices/SoundDetection';
import AutomaticSpeechRecognition from './src/HmsLanguageVoiceRelatedServices/AutomaticSpeechRecognition';
import TextEmbedding from './src/HmsNaturalLanguageProcessingServices/TextEmbedding';
import CustomModel from './src/HmsOtherServices/CustomModel';
import ModelDownload from './src/HmsOtherServices/ModelDownload';
import TextRecognition from './src/HmsTextRelatedServices/TextRecognition';
import DocumentRecognition from './src/HmsTextRelatedServices/DocumentRecognition';
import BankCardRecognition from './src/HmsTextRelatedServices/BankCardRecognition';
import GeneralCardRecognition from './src/HmsTextRelatedServices/GeneralCardRecognition';
import FormRecognition from './src/HmsTextRelatedServices/FormRecognition';
import ImageClassification from './src/HmsImageRelatedServices/ImageClassification';
import ObjectDetection from './src/HmsImageRelatedServices/ObjectDetection';
import LandmarkRecognition from './src/HmsImageRelatedServices/LandmarkRecognition';
import ImageSegmentation from './src/HmsImageRelatedServices/ImageSegmentation';
import ProductVisualSearch from './src/HmsImageRelatedServices/ProductVisualSearch';
import ImageSuperResolution from './src/HmsImageRelatedServices/ImageSuperResolution';
import DocumentSkewCorrection from './src/HmsImageRelatedServices/DocumentSkewCorrection';
import TextImageSuperResolution from './src/HmsImageRelatedServices/TextImageSuperResolution';
import SceneDetection from './src/HmsImageRelatedServices/SceneDetection';
import Frame from './src/HmsImageRelatedServices/Frame';
import FaceRecognition from './src/HmsFaceBodyRelatedServices/FaceRecognition';
import SkeletonDetection from './src/HmsFaceBodyRelatedServices/SkeletonDetection';
import LivenessDetection from './src/HmsFaceBodyRelatedServices/LivenessDetection';
import HandKeypointDetection from './src/HmsFaceBodyRelatedServices/HandDetection';
import TextRecognitionLive from './src/HmsTextRelatedServices/TextRecognitionLive';
import ClassificationLive from './src/HmsImageRelatedServices/ImageClassificationLive';
import ObjectDetectionLive from './src/HmsImageRelatedServices/ObjectDetectionLive';
import SceneDetectionLive from './src/HmsImageRelatedServices/SceneDetectionLive';
import FaceRecognitionLive from './src/HmsFaceBodyRelatedServices/FaceRecognitionLive';
import SkeletonDetectionLive from './src/HmsFaceBodyRelatedServices/SkeletonDetectionLive';
import HandDetectionLive from './src/HmsFaceBodyRelatedServices/HandDetectionLive'; */



/* 
enableScreens();
const Stack = createNativeStackNavigator();
const NestedStack = createStackNavigator() */


const Stack = createStackNavigator();

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
        {/*   <Stack.Screen name="Site" component={SiteComponent} /> */}
          <Stack.Screen name="Push" component={PushComponent} />
          <Stack.Screen name="PushDemo"  options={{ headerShown: false }} component={PushDemo} />
         {/*  <Stack.Screen name="Nearby" component={NearbyComponent} />
          <Stack.Screen name="NearbyDemo"  options={{ headerShown: false }} component={NearbyDemo} /> */}
          <Stack.Screen name="Scan"  options={{ headerShown: false }} component={ScanComponent} />
       {/*    <Stack.Screen name="ML"  options={{ headerShown: false }} component={MLComponent} /> */}
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


  /* const NearbyDemo = ()=>{

    return(
      <NestedStack.Navigator>
        <NestedStack.Screen name="NearbyMainPage" component={StartPage} />
        <NestedStack.Screen name="Connection" component={Connection} />
        <NestedStack.Screen name="Message" component={Message} />
        <NestedStack.Screen name="Wifi" component={Wifi} />
    </NestedStack.Navigator>
    )
  } */

  /*   const ML = ()=>{

    return(
      <NestedStack.Navigator>
        <NestedStack.Screen name="MLMainPage" component={MLComponent} />
        <NestedStack.Screen name="Translation" component={Translation} />
        <NestedStack.Screen name="LanguageDetection" component={LanguageDetection} />
        <NestedStack.Screen name="AudioFileTranscription" component={TextToSpeech} />
        <NestedStack.Screen name="TextToSpeech" component={TextToSpeech} />
        <NestedStack.Screen name="AudioFileTranscription" component={AudioFileTranscription} />
        <NestedStack.Screen name="RealTimeTranscription" component={RealTimeTranscription} />
        <NestedStack.Screen name="SoundDetection" component={SoundDetection} />
        <NestedStack.Screen name="AutomaticSpeechRecognition" component={AutomaticSpeechRecognition} />
        <NestedStack.Screen name="TextEmbedding" component={TextEmbedding} />
        <NestedStack.Screen name="CustomModel" component={CustomModel} />
        <NestedStack.Screen name="ModelDownload" component={ModelDownload} />
        <NestedStack.Screen name="TextRecognition" component={TextRecognition} />
        <NestedStack.Screen name="DocumentRecognition" component={DocumentRecognition} />
        <NestedStack.Screen name="BankCardRecognition" component={BankCardRecognition} />
        <NestedStack.Screen name="GeneralCardRecognition" component={GeneralCardRecognition} />
        <NestedStack.Screen name="FormRecognition" component={FormRecognition} />
        <NestedStack.Screen name="ImageClassification" component={ImageClassification} />
        <NestedStack.Screen name="ObjectDetection" component={ObjectDetection} />
        <NestedStack.Screen name="LandmarkRecognition" component={LandmarkRecognition} />
        <NestedStack.Screen name="ImageSegmentation" component={ImageSegmentation} />
        <NestedStack.Screen name="ProductVisualSearch" component={ProductVisualSearch} />
        <NestedStack.Screen name="ImageSuperResolution" component={ImageSuperResolution} />
        <NestedStack.Screen name="DocumentSkewCorrection" component={DocumentSkewCorrection} />
        <NestedStack.Screen name="TextImageSuperResolution" component={TextImageSuperResolution} />
        <NestedStack.Screen name="SceneDetection" component={SceneDetection} />
        <NestedStack.Screen name="Frame" component={Frame} />
        <NestedStack.Screen name="FaceRecognition" component={FaceRecognition} />
        <NestedStack.Screen name="SkeletonDetection" component={SkeletonDetection} />
        <NestedStack.Screen name="LivenessDetection" component={LivenessDetection} />
        <NestedStack.Screen name="HandKeypointDetection" component={HandKeypointDetection} />
        <NestedStack.Screen name="TextRecognitionLive" component={TextRecognitionLive} />
        <NestedStack.Screen name="ClassificationLive" component={ClassificationLive} />
        <NestedStack.Screen name="ObjectDetectionLive" component={ObjectDetectionLive} />
        <NestedStack.Screen name="SceneDetectionLive" component={SceneDetectionLive} />
        <NestedStack.Screen name="FaceRecognitionLive" component={FaceRecognitionLive} />
        <NestedStack.Screen name="SkeletonDetectionLive" component={SkeletonDetectionLive} />
        <NestedStack.Screen name="HandDetectionLive" component={HandDetectionLive} />
       
    </NestedStack.Navigator>
    )
  }  */
export default Routes;