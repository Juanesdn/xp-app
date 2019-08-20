import React from "react";
import { View, StyleSheet, Animated } from "react-native";

class ProgressBar extends React.Component {
  componentWillMount() {
    this.animation = new Animated.Value(this.props.progress);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.progress !== this.props.progress) {
      Animated.timing(this.animation, {
        toValue: this.props.progress,
        duration: this.props.duration
      }).start();
    }
  }

  render() {
    const {
      height,
      borderColor,
      borderWidth,
      borderRadius,
      barColor,
      fillColor
    } = this.props;

    const widthInterpolated = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
      extrapolate: "clamp"
    });

    const styles = StyleSheet.create({
      progressBar: {
        width: 165,
        height: 10,
        borderColor,
        borderWidth,
        borderRadius,
        marginTop: 49
      }
    });

    return (
      <View style={{ flexDirection: "row", height }}>
        <View style={styles.progressBar}>
          <View
            style={[StyleSheet.absoluteFill, { backgroundColor: fillColor }]}
          />
          <Animated.View
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: widthInterpolated,
              backgroundColor: barColor
            }}
          />
        </View>
      </View>
    );
  }
}

ProgressBar.defaultProps = {
  height: 10,
  borderColor: "#FFFFFF",
  borderWidth: 2,
  borderRadius: 4,
  barColor: "#FFFFFF",
  fillColor: "transparent",
  duration: 100
};

export default ProgressBar;
