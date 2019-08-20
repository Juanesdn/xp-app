import React from "react";
import { Image, View, StyleSheet, Dimensions } from "react-native";

const Header = () => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.logoStyle}
          source={require("../../assets/LogoV2.png")}
        />
      </View>
      <View style={styles.borderStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 108,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF"
  },

  borderStyle: {
    borderStyle: "solid",
    borderLeftWidth: Dimensions.get("window").width,
    borderBottomWidth: 60,
    borderLeftColor: "#FFFFFF",
    borderBottomColor: "transparent"
  },

  logoStyle: {
    width: 150,
    height: 54,
    marginLeft: 30,
    marginTop: 45
  }
});

export default Header;
