import { View, StyleSheet } from "react-native";
import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";

const PlaceholderImage = require("@/assets/images/background-image.png");


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View>
        <View style={styles.footContainer}>
          <Button theme="primary" label="Choose a photo" />
          <Button label="Use this photo" />
        </View>
      </View>
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
