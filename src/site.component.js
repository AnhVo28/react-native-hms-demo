
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import RNHMSSite from '@hmscore/react-native-hms-site';

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 20,
  },
});

const SiteComponent = () => {
  return (
    <View>
      <View>
        <Button title="Text Search" onPress={onTextSearch} />
      </View>

      <View style={styles.btnContainer}>
        <Button title="Detail Search" onPress={onDetailSearch} />
      </View>

      <View style={styles.btnContainer}>
        <Button title="Query Suggestion" onPress={onQuerySuggestion} />
      </View>

      <View style={styles.btnContainer}>
        <Button title="Nearby Search" onPress={onNearbySearch} />
      </View>

      <View style={styles.btnContainer}>
        <Button title="Create Widget" onPress={createWidget} />
      </View>

      <View style={styles.btnContainer}>
        <Button title="Enable the logger" onPress={enableLogger} />
      </View>

      <View style={styles.btnContainer}>
        <Button title="Disable the logger" onPress={disableLogger} />
      </View>
    </View>
  );
};

const config = {
  apiKey: 'CgB6e3x9rwvMXg8083O4mF5UIUO4BACjtS4KrwZJzFLKSfxCDlnaSA1bVELCzPO4ERRCc4TYgWINNTRElUOMwVbN',
};

RNHMSSite.initializeService(config)
  .then(() => {
    console.log('Service is initialized successfully');
  })
  .catch((err) => {
    console.log('Error : ' + err);
  });

const onTextSearch = () => {
  let textSearchReq = {
    query: "Helsinki",
    location: {
      lat: 60.893478,
      lng: 25.334595,
    },
    radius: 1000,
    countryCode: 'FI',
    language: 'en',
    pageIndex: 1,
    pageSize: 5,
    hwPoiType: RNHMSSite.HwLocationType.RESTAURANT,
    poiType: RNHMSSite.LocationType.GYM,
    politicalView: "FI"
  };
  RNHMSSite.textSearch(textSearchReq)
    .then((res) => {
      alert(JSON.stringify(res));
      console.log(JSON.stringify(res));
    })
    .catch((err) => {
      alert(JSON.stringify(err));
      console.log(JSON.stringify(err));
    });
};

const onDetailSearch = () => {
  let detailSearchReq = {
    siteId: "9084414283EC4408C88C9848A86D3F99",
    language: "en",
    politicalView: "FI"
  };
  RNHMSSite.detailSearch(detailSearchReq)
  .then((res) => {
    console.log(JSON.stringify(res));
  })
  .catch((err) => {
    console.log(JSON.stringify(err));
  });
};

const onQuerySuggestion = () => {
  let querySuggestionReq = {
    query: 'Paris',
    location: {
      lat: 48.893478,
      lng: 2.334595,
    },
    radius: 10000,
    countryCode: 'FR',
    language: 'fr',
    poiTypes: [RNHMSSite.LocationType.ADMINISTRATIVE_AREA_LEVEL_2],
   /*  poiTypes: [RNHMSSite.LocationType.BANK] */
  };
  RNHMSSite.querySuggestion(querySuggestionReq)
    .then((res) => {
      console.log(res);
      alert(JSON.stringify(res));
    })
    .catch((err) => {
      alert(err);
      console.log(err);
    });
};

const onNearbySearch = () => {
  let nearbySearchReq = {
    query: 'Paris',
    location:
    {
      lat: 48.893478,
      lng: 2.334595,
    },
    radius: 1000,
    poiType: RNHMSSite.LocationType.ADDRESS,
    countryCode: 'FR',
    language: 'fr',
    pageIndex: 1,
    pageSize: 5,
    hwPoiType: RNHMSSite.HwLocationType.RESTAURANT,
    politicalView: "fr"
  };
  RNHMSSite.nearbySearch(nearbySearchReq)
    .then((res) => {
      alert(JSON.stringify(res));
      console.log(JSON.stringify(res));
    })
    .catch((err) => {
      alert(JSON.stringify(err));
      console.log(JSON.stringify(err));
    });
};

const createWidget = () => {
  let params = {
    searchIntent: {
      apiKey: 'CgB6e3x9rwvMXg8083O4mF5UIUO4BACjtS4KrwZJzFLKSfxCDlnaSA1bVELCzPO4ERRCc4TYgWINNTRElUOMwVbN',
      hint: 'myhint',
    },

    searchFilter: {
      query: 'Leeds',
      language: 'en',
    },
  };

  RNHMSSite.createWidget(params)
    .then((res) => {
      alert(JSON.stringify(res));
      console.log(JSON.stringify(res));
    })
    .catch((err) => {
      alert(JSON.stringify(err));
      console.log(JSON.stringify(err));
    });
};

const enableLogger = () => {
  RNHMSSite.enableLogger()
    .then((res) => {
      alert(JSON.stringify(res));
      console.log(res);
    })
    .catch((err) => {
      alert(JSON.stringify(err));
      console.log(JSON.stringify(err));
    });
};

const disableLogger = () => {
  RNHMSSite.disableLogger()
    .then((res) => {
      alert(JSON.stringify(res));
      console.log(res);
    })
    .catch((err) => {
      alert(JSON.stringify(err));
      console.log(JSON.stringify(err));
    });
};

export default SiteComponent;
