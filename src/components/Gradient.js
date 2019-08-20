import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Gradient = props => {
  return (
    <LinearGradient
      colors={["#FFFFFF", "#CD1549"]}
      style={styles.gradient}
      start={[1, 0]}
      end={[0, 1]}
    >
      <LinearGradient
        colors={["#F3C333", "#C9023B"]}
        style={[styles.gradient, styles.gradientOpacity]}
        start={[1, 0]}
        end={[0, 1]}
      >
        {props.children}
      </LinearGradient>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    bottom: 0,
    top: 0,
    left: 0,
    right: 0
  },

  gradientOpacity: {
    opacity: 0.7
  }
});

export default Gradient;
