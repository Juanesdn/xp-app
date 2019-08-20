import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, StyleSheet } from "react-native";
import Text from "../components/CustomText";

class Button extends Component {
  render() {
    const { text, onPress, style } = this.props;
    return (
      <TouchableOpacity
        style={[styles.buttonStyle, style]}
        onPress={() => onPress()}
      >
        <Text type="bold" style={styles.textStyle}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    color: "#ffffff",
    textAlign: "center"
  },

  buttonStyle: {
    padding: 10,
    backgroundColor: "#F78A6F",
    borderRadius: 50
  }
});

export default Button;
