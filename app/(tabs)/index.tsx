import { Platform, StyleSheet, Text } from "react-native";

import { View } from "@/components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: Platform.select({
            android: "Montserrat_100Thin",
            ios: "Montserrat-Thin",
          }),
          fontSize: 30,
        }}
      >
        Montserrat Thin
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
