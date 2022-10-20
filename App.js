import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Map from "./screens/Map";

export default function App() {
  return (
    <View style={styles.container}>
      <Map />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// AIzaSyBS_aTD3emY1245CGOyzXxG2y0K8X_h6Ks;
