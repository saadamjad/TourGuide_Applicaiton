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
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";

export default class Register extends Component {
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
                <View style={styles.infoContainer}>
                  <View style={styles.regform}>
                    <Text style={styles.header}>Registration</Text>
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Username"
                    placeholderTextColor="rgba(255,255,255,0.8)"
                    keyboardType="email-address"
                    returnKeyType="next"
                    underlineColorAndroid="transparent"
                    autoCorrect={false}
                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                  />

                  <TextInput
                    style={styles.input}
                    placeholder="Enter Email"
                    underlineColorAndroid="transparent"
                    placeholderTextColor="rgba(255,255,255,0.8)"
                    keyboardType="email-address"
                    returnKeyType="next"
                    autoCorrect={false}
                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter password"
                    underlineColorAndroid="transparent"
                    placeholderTextColor="rgba(255,255,255,0.8)"
                    returnKeyType="go"
                    secureTextEntry
                    autoCorrect={false}
                    ref={"txtPassword"}
                  />
                  <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() =>
                      this.props.navigation.navigate("DrawerNavigator")
                    }
                  >
                    <Text style={styles.buttonText}>Register</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={{
                    // width: 50,
                    alignSelf: "center"
                    // borde//rWidth: 1
                    //position: "absolute",
                    //  bottom: 0
                  }}
                  onPress={() => this.props.navigation.navigate("login2")}
                >
                  <Text style={styles.titlealreadyhavesignupaccount}>
                    Aleady have an account.? SIGN IN{" "}
                  </Text>
                </TouchableOpacity>
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
  header: {
    fontSize: 24,
    color: "#ffffff",
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: "#f7c744",
    borderBottomWidth: 1,
    height: 40,
    width: 300,
    borderRadius: 20
  },

  titlealreadyhavesignupaccount: {
    color: "#ffffff",
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    opacity: 0.9,
    paddingVertical: 20
  },
  regform: {
    marginTop: -50
  },
  infoContainer: {
    marginTop: 200,
    left: 0,
    right: 0,
    bottom: 0,
    height: 300,
    alignItems: "center"
  },
  input: {
    borderRadius: 20,
    height: 40,
    width: 300,

    color: "#FFF",
    marginBottom: 30,
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 1,
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: "#f7c744",
    paddingVertical: 10,
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
