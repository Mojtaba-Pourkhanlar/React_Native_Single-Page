import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <ImageBackground
      style={styles.container}
      source={require("./assets/wellcome.jpg")}>
      <View style={styles.text}>
        <Text style={styles.firstText}>Wellcome to my app</Text>
      </View>

      <View style={{ width: "90%", marginBottom: 10 }}>
        <View style={styles.btnConttainer}>
          <Button title="Login" color="#20295B" />
        </View>
        <View style={styles.btnConttainer}>
          <Button title="Register" color="#08342E" />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    alignItems: "center",
  },
  firstText: {
    color: "#BCA900",
    fontSize: 35,
    marginTop: 20,
  },
  btnConttainer: {
    padding: 15,
    width: "100%",
    marginVertical: 5,
  },
});
