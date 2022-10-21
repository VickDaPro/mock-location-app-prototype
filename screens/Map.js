import { useState, useEffect } from "react";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  SafeAreaView,
} from "react-native";
import * as Location from "expo-location";

export default function Map() {
  const [pin, setPin] = useState({
    latitude: 26.277683,
    longitude: 73.022701,
  });

  // const [location, setLocation] = useState(null);
  // const [errorMsg, setErrorMsg] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       setErrorMsg("Permission to access location was denied");
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //   })();
  // }, []);

  // let text = "Waiting..";
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.paragraph}>{text}</Text> */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 26.277683,
          longitude: 73.022701,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 26.277683, longitude: 73.022701 }}
          draggable={true}
          onDragStart={(e) => {
            console.log("Drag Start", e.nativeEvent.coordinate);
          }}
          onDragEnd={(e) => {
            console.log("Drag End", e.nativeEvent.coordinate);

            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.latitude,
            });
          }}
        >
          <Callout>
            <Text>This is a Callout</Text>
          </Callout>
        </Marker>
        <Circle center={pin} radius={800} />
      </MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
