import { Text, View, StyleSheet } from "react-native";
import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";

const PlaceholderImage = require("@/assets/images/background-image.png");

import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View>
        <View style={styles.footContainer}>
          <Button label="Choose a photo" />
          <Button label="Use this photo" />
        </View>
      </View>
      <Text style={styles.text}>Home screen</Text>
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    padding: 28,
  },
  footContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
