import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  ActivityIndicator
} from "react-native";
import { Font } from "expo";
import Header from "../components/Header";
import Gradient from "../components/Gradient";
import Text from "../components/CustomText";
import Button from "../components/Button";

class AccountScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "OpenSans-Regular": require("../../assets/fonts/OpenSans-Regular.ttf"),
      "OpenSans-Bold": require("../../assets/fonts/OpenSans-Bold.ttf"),
      "OpenSans-Semibold": require("../../assets/fonts/OpenSans-SemiBold.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <Gradient>
        <Header />
        <View
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: -1
          }}
        >
          <ImageBackground
            style={styles.imgStyle}
            source={require("../../assets/accountsBackground.png")}
          />
        </View>
        <View style={styles.container}>
          {this.state.fontLoaded ? (
            <View>
              <Text type={"semibold"} style={styles.textStyle}>
                ¡Ingresa, para la mejor experiencia!
              </Text>
              <Button
                text="INGRESAR CUENTA XP"
                onPress={() => {
                  alert("Hi there!!!");
                }}
                style={styles.buttonStyle}
              />
            </View>
          ) : (
            <ActivityIndicator size="large" />
          )}
        </View>
      </Gradient>
    );
  }
}

const styles = StyleSheet.create({
  imgStyle: {
    width: 460,
    height: 800,
    opacity: 0.2
  },

  container: {
    height: 105,
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  textStyle: {
    marginLeft: 25,
    fontSize: 15,
    color: "#FFFFFF",
    textAlign: "center"
  },

  buttonStyle: {
    marginLeft: 30,
    marginTop: 20,
    width: 260,
    height: 50,
    justifyContent: "center"
  }
});

export default AccountScreen;
