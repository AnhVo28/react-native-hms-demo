import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import HMSAds, {
    HMSBanner,
    BannerAdSizes,
    ContentClassification,
    Gender,
    NonPersonalizedAd,
    TagForChild,
    UnderAge,
    NativeMediaTypes,
    HMSNative,
    ChoicesPosition,
    Direction,
    AudioFocusType,
    ScaleType,
    HMSInterstitial
  }  from '@hmscore/react-native-hms-ads';

const AdsComponent = ({ navigation }) => {

    let adBannerElement;

    useEffect(() => {

     

        HMSInterstitial.setAdId("testb4znbuh3n2");
        HMSInterstitial.loadAd()
     
        HMSInterstitial.isLoaded().then((result) => {
         if (result) {
           HMSInterstitial.show(); // if result is true show the ad
         }
       })
     
        return () => {
            
        }
    }, [])

    return (
        <View>
                <HMSBanner
  style={{height: 100}}
  bannerAdSize={{
    bannerAdSize:BannerAdSizes.B_320_100,
  }}
  adId="testw6vs28auh3"
  ref={(el) => (adBannerElement = el)}
/>

<HMSBanner
  style={{height: 100}}
  bannerAdSize={{
    bannerAdSize:BannerAdSizes.B_PORTRAIT,
    width: 300,
  }}
  adId="testw6vs28auh3"
  adParam={{
    adContentClassification:
      ContentClassification.AD_CONTENT_CLASSIFICATION_UNKOWN,
    gender: Gender.UNKNOWN,
    nonPersonalizedAd: NonPersonalizedAd.ALLOW_ALL,
    tagForChildProtection:
      TagForChild.TAG_FOR_CHILD_PROTECTION_UNSPECIFIED,
    tagForUnderAgeOfPromise: UnderAge.PROMISE_UNSPECIFIED,
  }}
  onAdLoaded={(e) => {
    console.log('HMSBanner onAdLoaded', e.nativeEvent);
  }}
  onAdFailed={(e) => {
    console.warn('HMSBanner onAdFailed', e.nativeEvent);
  }}
  onAdOpened={(e) => console.log('HMSBanner onAdOpened')}
  onAdClicked={(e) => console.log('HMSBanner onAdClicked')}
  onAdClosed={(e) => console.log('HMSBanner onAdClosed')}
  onAdImpression={(e) => console.log('HMSBanner onAdImpression')}
  onAdLeave={(e) => console.log('HMSBanner onAdLeave')}
/>

<HMSNative
  style={{ height: 322 }}
  displayForm={{
    mediaType: NativeMediaTypes.IMAGE_LARGE,
    adId: 'testy63txaom86'
  }}

  nativeConfig={{
    videoConfiguration: {
      startMuted: true,
    },
  }}
/>

<Button onPress={()=>adBannerElement.loadAd() } title='refesh' ></Button>
        </View>
    )
}

export default AdsComponent

const styles = StyleSheet.create({})

