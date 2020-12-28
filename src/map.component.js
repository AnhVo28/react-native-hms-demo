import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableHighlight } from 'react-native'
import HMSMap, {
    HMSCircle,
    HMSMarker,
    HMSPolygon,
    HMSPolyline,
    HMSGroundOverlay,
    HMSTileOverlay,
    HMSInfoWindow,
    MapTypes,
    PatternItemTypes,
    JointTypes,
    CapTypes,
    FillMode,
    Interpolator,
    RepeatMode,
  } from "@hmscore/react-native-hms-map";


let mapView;
let markerView;

let markerRef

const MapComponent = () => {

    const [isDefaultAction, setisDefaultAction] = useState(true)
    const [markerRow, setmarkerRow] = useState(1)
    const [markerCol, setmarkerCol] = useState(2)

    const getHuaweiMapInfo = () =>
    mapView &&
    mapView
    .getHuaweiMapInfo().then(info => console.log('getHuaweiMapInfo: ',info));


    const getLayerInfo = () =>
  mapView &&
  markerView &&
  mapView
    .getLayerInfo(markerView)
    .then((a) => console.log(a))
    .catch((e) => console.log(e));


    const getPointFromCoordinate = () =>
  mapView &&
  mapView
    .getPointFromCoordinate({ latitude: 60, longitude: 25 })
    .then((a) => console.log(a))
    .catch((a) => console.log(a));


    const getCoordinateFromPoint = () =>
  mapView &&
  mapView
    .getCoordinateFromPoint({ x: 100, y: 100 })
    .then((a) => console.log(a))
    .catch((a) => console.log(a));


    const calculateDistance = () => {
      HMSMap.module
        .getDistance({ latitude: 60, longitude: 25 }, { latitude: 60.023, longitude: 25.004 })
        .then((a) => console.log(a))
        .catch((a) => console.log(a));
    };


    

    const animateMarker = async ()=>{

      console.log("Animation Button");
     if (markerRef) {
      markerRef.setAnimation(
        {
          rotate: { fromDegree: 0, toDegree: 250, duration: 5000 },
          /* alpha: { fromAlpha: 0.5, toAlpha: 1 },
          scale: { fromX: 1, fromY: 1, toX: 3, toY: 3, duration: 6000, fillMode: FillMode.FORWARDS },
          translate: {
            latitude: 4.196762137072112,
            longitude: 15.686358445008585,
            duration: 1000,
            fillMode: FillMode.BACKWARDS,
            interpolator: Interpolator.BOUNCE,
            repeatCount: 3,
          }, */
        },
        { duration: 2000, repeatMode: RepeatMode.REVERSE }
      );

      markerRef.startAnimation();
     }

      

      
    }


    
   

    return (
        <SafeAreaView>
            <HMSMap
                ref={(e) => {
                    mapView = e;
                }}
               
                style={styles.mapView}  
                camera={{ target: { latitude: 60.322308, longitude: 25.064569 },   zoom: 10,
                bearing: 5,
                }} 
                compassEnabled={true}
                buildingsEnabled={true}
                zoomControlsEnabled={true}
                mapType={MapTypes.NORMAL}
                mapStyle={
                    '[{"mapFeature":"all","options":"labels.icon","paint":{"icon-type":"night"}}]'
                  }

                myLocationEnabled={true}
                myLocationButtonEnabled={true}
                tiltGesturesEnabled={true}
                mapPadding={{ right: 40, left: 10, top: 10, bottom: 10 }}
                onMapLongClick={(e) => console.log("HMSMap onMapLongClick: ", e.nativeEvent)}
                onMapClick={(e) => console.log("HMSMap onMapClick: ", e.nativeEvent)}
                markerClustering={true} 
              
            >
                {/* <MarkerComplex isDefaultAction={isDefaultAction} />
                {[...Array(markerCol).keys()].map((col) =>
                [...Array(markerRow).keys()].map((row) => (
                  <MarkerSimple
                    key={markerRow * col + row}
                    markerRow={markerRow}
                    col={col}
                    row={row}
                  />
                ))
              )} */}

<HMSTileOverlay
    tileProvider={{ url: "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" }}
  />

            <HMSMarker 
                coordinate={{latitude: 60.4, longitude: 25.02}} 
                title="Hello Huawei Map"
                snippet="This is a snippet!"
                draggable={true}
                flat={true}
                icon={{
                  asset: "ic_launcher.png", // under assets folder
                }}
                alpha={0.95}
                markerAnchor={[0.5, 0.5]}
                infoWindowAnchor={[0.5, 0.5]}
                visible={true}
                zIndex={3}
                clusterable
                onClick={(e) => console.log("HMSMarker onClick: ", e.nativeEvent)}
                onDragStart={(e) => console.log("HMSMarker onDragStart: ", e.nativeEvent)}
                onDrag={(e) => console.log("HMSMarker onDrag: ", e.nativeEvent)}
                onDragEnd={(e) => console.log("HMSMarker onDragEnd: ", e.nativeEvent)}
                onInfoWindowClick={(e) => console.log("HMSMarker onInfoWindowClick: ", e.nativeEvent)}
                onInfoWindowClose={(e) => console.log("HMSMarker onInfoWindowClose: ", e.nativeEvent)}
                onInfoWindowLongClick={(e) =>
                  console.log("HMSMarker onInfoWindowLongClick")
                }

                ref={(e) => {
                  markerRef = e;
                  }} 
                 />
                <HMSMarker  coordinate={{latitude: 60.41, longitude: 25.02}}  clusterable />
                <HMSMarker coordinate={{ latitude: 60.402, longitude: 24.996 }} clusterable />
                <HMSMarker coordinate={{ latitude: 60.401, longitude: 25.01 }} clusterable />
                <HMSMarker coordinate={{ latitude: 60.404, longitude: 25.05 }} clusterable />

                <HMSMarker
                  coordinate={{ latitude: 60.30, longitude: 25.02 }}
                  onInfoWindowClose={(e) => console.log("HMSMarker onInfoWindowClose")}
                >
                  <HMSInfoWindow>
                    <TouchableHighlight
                      onPress={() => console.log("HMSMarker onInfoWindowClick: ", e.nativeEvent)}
                      onLongPress={() => console.log("HMSMarker onInfoWindowLongClick: ", e.nativeEvent)}
                    >
                      <View style={{ backgroundColor: "yellow" }}>
                        <Text style={{ backgroundColor: "orange" }}>Hello</Text>
                        <Text>I am a marker</Text>
                      </View>
                    </TouchableHighlight>
                  </HMSInfoWindow>
                </HMSMarker>



                <HMSPolyline // Simple example
                points={[
                  { latitude: 60.30, longitude: 25.0 },
                  { latitude: 60.45, longitude: 25.0 },
                   { latitude: 60.35, longitude: 25.05 },
                ]}
                clickable={true}
                geodesic={true}
                color={-1879018753} // transparent blue(0x900072FF)
                jointType={JointTypes.BEVEL}
             /*    pattern={[{ type: PatternItemTypes.DASH, length: 20 }]} */
                startCap={{ type: CapTypes.ROUND }}
                endCap={{
                  type: CapTypes.CUSTOM,
                  refWidth: 1000,
                  asset: "ic_launcher.png", // under assets folder
                }}
                visible={true}
                width={30.0}
                zIndex={2}
                onClick={(e) => console.log("HMSPolyline onClick: ", e.nativeEvent)}
              />

<HMSPolygon // Complex example
    points={[
      { latitude: 60.1, longitude: 25.2 },
      { latitude: 60.4, longitude: 25.2 },
      { latitude: 60.4, longitude: 25.8 },
      { latitude: 60.1, longitude: 25.8 },
    ]}

    holes={[
      [
        { latitude: 60.201, longitude: 25.2 },
        { latitude: 60.51, longitude: 25.2 },
        { latitude: 60.51, longitude: 25.82 },
      ]
    ]}
 
    clickable={true}
    geodesic={true}
    fillColor={538066306} // very transparent blue(0x20123D82)
    strokeColor={-256} // yellow(0xFFFFFF00)
    strokeJointType={JointTypes.BEVEL}
    strokePattern={[
      { type: PatternItemTypes.DASH, length: 20 },
      { type: PatternItemTypes.DOT },
      { type: PatternItemTypes.GAP, length: 20 },
    ]}
    zIndex={2}
    onClick={(e) => console.log("HMSPolygon onClick: ", e.nativeEvent)}
  />
              

              <HMSCircle // Complex example
    center={{ latitude: 40.9, longitude: 29 }}
    radius={9000}
    clickable={true}
    fillColor={-1879018753} // transparent blue(0x900072FF)
    strokeWidth={10}
    strokeColor={-256} // yellow(0xFFFFFF00)
    strokePattern={[
      { type: PatternItemTypes.DASH, length: 20 },
      { type: PatternItemTypes.DOT },
      { type: PatternItemTypes.GAP, length: 20 },
    ]}
    visible={true}
    zIndex={2}
    onClick={(e) => console.log("HMSCircle onClick: ", e.nativeEvent)}
  />

<HMSGroundOverlay // Complex example
    image={{ asset: "ic_launcher.png" /* under assets folder*/ }}
    coordinate={{
      // giving exact coordinate with sizes
      latitude: 60.29,
      longitude: 25.09,
      height: 10000,
      width: 10000,
    }}
    anchor={[0.5, 0.5]}
    bearing={20}
    clickable={true}
    transparency={0.5}
    visible={true}
    zIndex={3}
    onClick={(e) => console.log("HMSGroundOverlay onClick e:", e.nativeEvent)}
  />
            
            </HMSMap>

                <View style={styles.flexRow}>
                    <Button title="Get Map Info" onPress={getHuaweiMapInfo} />
                    <Button title="Layer Info" color="green" onPress={getLayerInfo} />
                    <Button color="green" title="Get Point From Coord." onPress={getPointFromCoordinate} />
                </View>

                <View style={styles.flexRow}>
                  <Button color="purple" title="Get Coord. from Point" onPress={getCoordinateFromPoint} />
                  <Button title="Calculate distance" onPress={calculateDistance} />
               
                </View>

                <View style={styles.flexRow}>
                
                  <Button title="Add marker" onPress={() => setmarkerRow(markerRow +1) } />
                  <Button title="Animate marker" onPress={() => animateMarker() } />
                </View>
        </SafeAreaView>
    )
}



const MarkerComplex = (props) => (
    <HMSMarker
      onAnimationStart={(e) => console.log(`Animation ${e.nativeEvent.type} Started`)}
      onAnimationEnd={(e) => console.log(`Animation ${e.nativeEvent.type} Ended in ${e.nativeEvent.duration} ms`)}
      coordinate={{ latitude: 60.35, longitude: 25.03 }}
      draggable={true}
      flat={true}
      icon={{
        asset: "ic_launcher.png", // under assets folder
      }}
      alpha={0.8}
      defaultActionOnClick={props.isDefaultAction}
      markerAnchor={[0.5, 0.5]}
      infoWindowAnchor={[0.5, 0.5]}
      rotation={30.0}
      visible={true}
      zIndex={0}
      clusterable={false}
      onClick={(e) => console.log("Marker onClick")}
      onDragStart={(e) => console.log("Marker onDragStart")}
      onDrag={(e) => console.log("Marker onDrag")}
      onDragEnd={(e) => console.log("Marker onDragEnd")}
      onInfoWindowClick={(e) => console.log("Marker onInfoWindowClick")}
      onInfoWindowClose={(e) => console.log("Marker onInfoWindowClose")}
      onInfoWindowLongClick={(e) => console.log("Marker onInfoWindowLongClick")}
      ref={(e) => {
        markerView = e;
      }}
    >
      <HMSInfoWindow>
        <View style={{ backgroundColor: "transparent" }}>
          <View style={{ backgroundColor: "rgb(49,49,49)", borderRadius: 6, paddingHorizontal: 14, paddingVertical: 6 }}>
            <Text style={{ color: "#fff", fontFamily: "Muli", fontSize: 12 }}> This is a custom window</Text>
          </View>
          <View
            style={{
              width: 0,
              height: 0,
              backgroundColor: "transparent",
              borderStyle: "solid",
              borderLeftWidth: 8,
              borderRightWidth: 8,
              borderBottomWidth: 16,
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              borderBottomColor: "rgb(49,49,49)",
              alignSelf: "center",
              transform: [{ rotate: "180deg" }],
            }}
          />
        </View>
      </HMSInfoWindow>
    </HMSMarker>
  );


  const MarkerSimple = (props) => (
    <HMSMarker
      icon={{ hue: (props.markerRow * props.col + props.row) * 30 }}
      coordinate={{ latitude: props.col, longitude: props.row }}
      title="Marker"
      snippet={"My lat:" + props.col + " lon:" + props.row}
      clusterable={true}
    />
  );

export default MapComponent

const styles = StyleSheet.create({
    mapView : {
        height: '80%',
       
    },
    flexRow: { flexDirection: "row" },
})
