import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, Image, View } from "react-native";

import { Header, Body, Left, Right } from "native-base";

export default class GlobalHeader extends Component {
  render() {
    return (
      <Header
        style={{
          backgroundColor: this.props.backgroundColor,
          elevation: this.props.elevation
        }}
      >
        <Left style={{ flex: 1 }}>
          <TouchableOpacity
            style={{ width: "20%", height: "100%", justifyContent: "center" }}
            onPress={() => this.props.navigation.goBack()}
          >
            {
              this.props.arrow === true ? (
              <Image
                source={require("../Photos/Icons/back.png")}
                style={{ width: 20, height: 12, tintColor: "black" }}
              />
            ) : this.props.styledArrow === true ? (
              <Image
                source={require("../Photos/Icons/back2.png")}
                style={{
                  width: 10,
                  height: 18,
                  tintColor: this.props.styledArrowColor
                }}
              />
            ) : null }
          </TouchableOpacity>
        </Left>

        <Body
          style={
            this.props.twoWords === 1
              ? { flex: 2, alignItems: "center" }
              : { flex: 1, alignItems: "center" }
          }
        >
          {this.props.headingText !== "" ? (
            <Text numberOfLines={1} style={styles.Text}>
              {this.props.headingText}
            </Text>
          ) : null}
        </Body>

        <Right style={{ flex: 1, justifyContent: "center" }}>
          <View style={{ width: "100%" }}>
            {this.props.heartSearch === true ? (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  width: "100%"
                }}
              >
                <TouchableOpacity>
                  <Image
                    source={require("../Photos/Icons/heart.png")}
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: "white",
                      marginRight: 10
                    }}
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image
                    source={require("../Photos/Icons/serch2.png")}
                    style={{
                      width: 20,
                      height: 20,
                      tintColor: "white",
                      marginRight: 5
                    }}
                  />
                </TouchableOpacity>
              </View>
            ) : this.props.avatar === true ? (
              <View style={styles.avatarImage}>
                <Image
                  source={this.props.avatarImage}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            ) : this.props.search === true ? (
              <TouchableOpacity>
                <Image
                  source={require("../Photos/Icons/serch2.png")}
                  style={styles.searchImage}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  avatarImage: {
    width: 40,
    height: 40,
    alignSelf: "flex-end",
    borderRadius: 20,
    overflow: "hidden"
  },
  searchImage: {
    width: 20,
    height: 20,
    tintColor: "white",
    alignSelf: "flex-end"
  },
  Text: {
    color: "black",
    fontSize: 17,
    fontWeight: "bold"
  }
});
