import React from "react";
import { View, ImageBackground, Animated } from "react-native";

export default class SplashScreen extends React.Component {
  constructor() {
    super();
    this.springValue = new Animated.Value(0.4);
  }

  componentWillMount() {
    this.spring();
  }

  spring() {
    Animated.spring(this.springValue, {
      toValue: 1,
      friction: 1
    }).start();
  }
  render() {
    return (
      <ImageBackground
        source={require("../Photos/Icons/Doodle_Bg-01.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Animated.Image
            style={{
              width: 200,
              height: 215,
              transform: [{ scale: this.springValue }]
            }}
            source={require("../Photos/Icons/apple.png")}
          />
        </View>
      </ImageBackground>
    );
  }
}
