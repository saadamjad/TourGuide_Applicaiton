import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput
} from "react-native";

import Feather from "react-native-vector-icons/Feather";
import { Header, Body, Left, Right } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import Card from "../Components/Card";

import LinearGradient from "react-native-linear-gradient";

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;
const drawerWidth = ScreenWidth * 0.73;

export default class Home extends Component {
  state = {
    drawerOpen: false,

    bestBurgerTown: [
      {
        dealKey: 0,
        dealName: "town ",
        dealDetails: "Burger. Drink.fish ",
        dealPhoto: require("../Photos/Icons/town.jpg"),
        dealQuantity: 1
      },

      {
        dealKey: 1,
        dealName: "town 2 ",
        dealDetails: "Burger. Drink. pizza",
        dealPhoto: require("../Photos/Icons/town2.jpg"),
        dealQuantity: 1
      },

      {
        dealKey: 2,
        dealName: " resturant",
        dealDetails: "Burger. Drink. Soup",
        dealPhoto: require("../Photos/Icons/cafe2.jpg"),
        dealQuantity: 1
      }
    ]
  };
  componentDidMount() {}
  render() {
    return (
      <View style={{ flexDirection: "row", width: "auto" }}>
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <LinearGradient
              start={{ x: 0, y: 2 }}
              end={{ x: 0, y: 0 }}
              colors={["#04a9a4", "#1faad1"]}
              style={{
                flexDirection: "row",

                height: 100,
                width: "100%",
                //  zIndex: 1000,
                flex: 1
              }}
            >
              <Left style={{ flex: 1 }}>
                <TouchableOpacity
                  style={{
                    width: "20%",
                    height: "100%",
                    justifyContent: "center"
                  }}
                  onPress={() => this.props.navigation.toggleDrawer()}
                >
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Feather name={"align-justify"} size={25} color={"white"} />
                  </View>
                </TouchableOpacity>
              </Left>

              <Body
                style={{
                  flex: 1,
                  alignItems: "center"
                }}
              >
                <Text style={{ color: "white", fontSize: 18 }}> SHOP </Text>
              </Body>

              <Right
                style={{
                  flex: 1,
                  justifyContent: "center",
                  backgroundColor: "red"
                }}
              >
                <View
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 35,
                    backgroundColor: "#31516a",
                    position: "absolute",
                    alignItems: "center",
                    justifyContent: "center",
                    right: 5,
                    top: -18
                  }}
                >
                  <Feather name={"heart"} size={17} color={"white"} />
                </View>
              </Right>
            </LinearGradient>
            {/* </Header> */}
            <View
              style={{
                height: 42,
                position: "absolute",
                top: 80,
                width: "90%",
                backgroundColor: "white",
                alignSelf: "center",
                borderWidth: 1,
                flexDirection: "row",
                borderRadius: 5,
                elevation: 1,
                alignItems: "center",
                borderColor: "#dfdfdf",

                zIndex: 10000
              }}
              //   onPress={() => this.props.navigation.navigate("Search")}
            >
              <View
                style={{
                  width: 60,
                  borderRightWidth: 1,
                  //  height: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "#dfdfdf"
                }}
              >
                {/* <Feather name={"search"} size={17} color={"#7d7d7d"} /> */}
                <Image
                  source={require("../Photos/Icons/search1.png")}
                  style={{ width: 20, height: 20 }}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={{ marginLeft: 5, fontSize: 13 }}
                placeholder=" search resturants "
              />
            </View>

            {/* SpecialOFfer */}

            <View style={styles.Card}>
              <Card
                borderTopWidth={1}
                navigation={this.props.navigation}
                navigateTo="DetailsPage"
                ResturantName="Gourmet Kitchen"
                ResturantDetails={"Lebanese ,Medetarian and healthy Food"}
                DeliveryTime="30-40 min"
                RidercIcon={true}
                fullStarColor="#0facbe"
                emptyStarColor="#0facbe"
                starsvisible={true}
                starSize={16}
                StarsQuantity={5}
                giveRating={2}
                CardImage={require("../Photos/Icons/six.jpg")}

                // backgroundImage="../Photos/Icons/.jpg"
              />
              <Card
                borderTopWidth={1}
                navigation={this.props.navigation}
                navigateTo="DetailsPage"
                ResturantName="Arbi Kitchen"
                ResturantDetails={"Lebanese ,Medetarian and healthy Food"}
                DeliveryTime="30-40 min"
                RidercIcon={true}
                fullStarColor="#0facbe"
                emptyStarColor="#0facbe"
                starsvisible={true}
                starSize={16}
                StarsQuantity={5}
                giveRating={4}
                CardImage={require("../Photos/Icons/one.jpg")}

                // backgroundImage="../Photos/Icons/.jpg"
              />
            </View>

            <View
              style={{
                width: "100%",
                borderTopWidth: 1,
                borderColor: "#e9e9e9",
                backgroundColor: "white",
                marginTop: 20
              }}
            >
              <View style={styles.bestBurgerTecom}>
                <Text style={{ fontSize: 15, color: "#2c2c2c" }}>
                  Suggestions
                </Text>
              </View>

              <View style={{ height: 160, backgroundColor: "#ffffff" }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {/* Images contanent */}

                  {this.state.bestBurgerTown.map((data, index) => {
                    return (
                      <TouchableOpacity
                        key={data.dealKey}
                        style={styles.BurgerTecomContent}
                        onPress={() =>
                          this.props.navigation.navigate("DetailsPage")
                        }
                      >
                        <View
                          style={{
                            width: "100%",
                            height: 115,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10
                          }}
                        >
                          <Image
                            source={data.dealPhoto}
                            style={{
                              height: "100%",
                              width: "100%",
                              borderTopLeftRadius: 10,
                              borderTopRightRadius: 10
                            }}
                            resizeMode="cover"
                          />
                        </View>
                        <View
                          style={{
                            alignItems: "center",
                            backgroundColor: "white",
                            width: "98%",
                            alignSelf: "center"
                          }}
                        >
                          <Text
                            style={{
                              fontWeight: "bold",
                              color: "#2c2c2c",
                              fontSize: 15,
                              marginRight: 4,
                              textAlign: "center",
                              paddingTop: 5
                            }}
                          >
                            {data.dealName}{" "}
                          </Text>
                          <Text style={{ color: "#b2b2b2", fontSize: 10 }}>
                            {data.dealDetails}{" "}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>
              <Card
                borderTopWidth={1}
                navigation={this.props.navigation}
                navigateTo="DetailsPage"
                ResturantName="Gourmet Kitchen"
                ResturantDetails={"Lebanese ,Medetarian and healthy Food"}
                DeliveryTime="30-50 min"
                RidercIcon={true}
                fullStarColor="#0facbe"
                emptyStarColor="#0facbe"
                starsvisible={true}
                starSize={16}
                StarsQuantity={6}
                giveRating={4}
                CardImage={require("../Photos/Icons/seven.jpg")}

                // backgroundImage="../Photos/Icons/.jpg"
              />
              <Card
                borderTopWidth={1}
                navigation={this.props.navigation}
                navigateTo="DetailsPage"
                ResturantName=" Dubai Kitchen"
                ResturantDetails={"Lebanese ,Medetarian and healthy Food"}
                DeliveryTime="30-40 min"
                RidercIcon={true}
                fullStarColor="#0facbe"
                emptyStarColor="#0facbe"
                starsvisible={true}
                starSize={16}
                StarsQuantity={6}
                giveRating={4.5}
                CardImage={require("../Photos/Icons/19.jpg")}

                // backgroundImage="../Photos/Icons/.jpg"
              />
              <Card
                borderTopWidth={1}
                navigation={this.props.navigation}
                navigateTo="DetailsPage"
                ResturantName=" Dubai Kitchen"
                ResturantDetails={"Lebanese ,Medetarian and healthy Food"}
                DeliveryTime="30-40 min"
                RidercIcon={true}
                fullStarColor="#0facbe"
                emptyStarColor="#0facbe"
                starsvisible={true}
                starSize={16}
                StarsQuantity={6}
                giveRating={4.5}
                CardImage={require("../Photos/Icons/22.jpg")}

                // backgroundImage="../Photos/Icons/.jpg"
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: ScreenWidth,
    backgroundColor: "#f3f3f3"
  },
  topView: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    backgroundColor: "white"
  },
  topViewContent: {
    marginLeft: 10,
    width: "75%",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ebebeb"
  },
  SearchIcon: {
    paddingTop: 15,
    backgroundColor: "white",
    width: "20%",
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 5
  },
  topViewContentText: {
    justifyContent: "center",
    width: "80%",
    backgroundColor: "white"
  },
  MainSearchFood: {
    borderBottomWidth: 1,
    borderBottomColor: "#e9e9e9",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingLeft: 7
  },
  ShapeIcon: {
    width: "10%",
    height: 40,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 5
  },
  TextInput: {
    backgroundColor: "white",
    width: "100%",
    height: 40,
    justifyContent: "center"
  },
  specialOffers: {
    backgroundColor: "white",
    paddingLeft: 15,
    height: 40,
    justifyContent: "center",
    paddingVertical: 40
  },
  MainViewSpecialOffers: {
    height: 160,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#e9e9e9",
    paddingLeft: 5,
    paddingTop: 0,
    paddingRight: 5
  },
  Card: {
    width: "100%",
    backgroundColor: "white",
    marginTop: 50
  },
  MainViewTrendingBrands: {
    backgroundColor: "#f7f7f7",
    height: 150,
    justifyContent: "center",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 5
  },
  bestBurgerTecom: {
    backgroundColor: "white",
    paddingLeft: 15,
    height: 55,
    justifyContent: "center"
  },
  BurgerTecomContent: {
    width: 160,
    height: "100%",
    marginLeft: 15,
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 10
  },
  specialOffersContent: {
    width: 100,
    height: "100%",
    marginLeft: 10
  },
  TrendingBrandsContent: {
    marginLeft: 10,
    flexDirection: "row",
    width: 95,
    height: 85,
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "white"
  }
});
