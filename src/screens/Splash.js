import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Gradient from "../components/Gradient";
import ProgressBar from "../components/ProgressBar";

class Splash extends React.Component {
  state = {
    progress: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(state => ({
        progress: state.progress + 0.1
      }));
    }, 200);
  }

  componentDidUpdate() {
    if (this.state.progress > 1.3) {
      this.props.navigation.navigate("Accounts");
    }
  }

  render() {
    return (
      <Gradient>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imgSplash}
            source={require("../../assets/Logo.png")}
          />
          <ProgressBar progress={this.state.progress} duration={500} />
        </View>
      </Gradient>
    );
  }
}
const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  imgSplash: {
    width: 97,
    height: 128,
    paddingBottom: 20
  }
});

export default Splash;
