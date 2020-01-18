import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
  TextInput,
  SafeAreaView,
  Keyboard,
  Linking,
  Button,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView
} from "react-native";

export default class Login extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require("../Photos/Icons/wasiq.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <StatusBar barStyle="light-content" />
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <TouchableWithoutFeedback
              style={styles.container}
              onPress={Keyboard.dismiss}
            >
              <View style={styles.logoContainer}>
                <View style={styles.logoContainer}>
                  {/* <Image style={styles.logo}
                                    source={require('../images/logo.png')}>
                                </Image> */}
                  <Text style={styles.title}>Your Online Travel Partner</Text>
                </View>

                <View style={styles.infoContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter username/email"
                    placeholderTextColor="rgba(255,255,255,0.8)"
                    keyboardType="email-address"
                    returnKeyType="next"
                    autoCorrect={false}
                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter password"
                    placeholderTextColor="rgba(255,255,255,0.8)"
                    returnKeyType="go"
                    secureTextEntry
                    autoCorrect={false}
                    ref={"txtPassword"}
                  />
                  <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => this.props.navigation.navigate("register2")}
                  >
                    <Text style={styles.buttonText}>SIGN IN</Text>
                  </TouchableOpacity>
                  <Text
                    style={styles.titleDonthavesignupaccount}
                    onPress={() => this.props.navigation.navigate("register2")}
                  >
                    Don't have an account.? SIGN UP{" "}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  backgroundColor: "rgb(32, 53, 70)",
    flexDirection: "column"
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: 50
  },
  logo: {
    width: 165,
    height: 56
  },
  title: {
    color: "#f7c744",
    fontSize: 15,
    textAlign: "center",
    marginTop: 5,
    opacity: 0.9
  },
  titleDonthavesignupaccount: {
    color: "#ffffff",
    fontSize: 11,
    textAlign: "center",
    marginTop: 10,
    opacity: 0.9
  },
  infoContainer: {
    height: 300,
    alignItems: "center"
  },
  input: {
    borderRadius: 20,
    height: 40,
    width: 300,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#FFF",
    marginBottom: 20,
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: "#f7c744",
    paddingVertical: 15,
    width: 100,
    borderRadius: 25
  },
  buttonText: {
    textAlign: "center",
    color: "rgb(32, 53, 70)",
    fontWeight: "bold",
    fontSize: 18
  }
});
