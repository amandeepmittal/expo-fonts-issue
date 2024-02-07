import { StyleSheet, Text } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { View } from "@/components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "Montserrat_100Thin",
          fontSize: 30,
        }}
      >
        Montserrat - Works on Android
      </Text>
      <Text
        style={{
          fontFamily: "Montserrat Thin",
          fontSize: 30,
        }}
      >
        Montserrat Thin - Doesn't work on Android
      </Text>
      <Text
        style={{
          fontFamily: "Montserrat_100Thin",
          fontSize: 30,
        }}
      >
        Montserrat - Doesn't work on iOS
      </Text>
      <Text
        style={{
          fontFamily: "Montserrat Thin",
          fontSize: 30,
        }}
      >
        Montserrat Thin - Works on iOS
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
