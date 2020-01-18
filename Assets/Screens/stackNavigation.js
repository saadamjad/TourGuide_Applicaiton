import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./Home";
import DrawerNavigator from "./Sidebar";
import Myorders from "./Myorders";

import Search from "./Search";
import PaymentOption from "./PaymentOption";
import login2 from "./Login2";
import register2 from "./Register2";
import DetailsPage from "./PersonalizedScrubSizes";
import Checkout from "./CheckOut";
import Confirmpage from "./ConfirmedOrder";

const AppNavigator = createStackNavigator(
  {
    Confirmpage: {
      screen: Confirmpage,
      navigationOptions: () => ({
        header: null
      })
    },
    login2: {
      screen: login2,
      navigationOptions: () => ({
        header: null
      })
    },
    register2: {
      screen: register2,
      navigationOptions: () => ({
        header: null
      })
    },
    Checkout: {
      screen: Checkout,
      navigationOptions: () => ({
        header: null
      })
    },

    DetailsPage: {
      screen: DetailsPage,
      navigationOptions: () => ({
        header: null
      })
    },

    PaymentOption: {
      screen: PaymentOption,
      navigationOptions: () => ({
        header: null
      })
    },

    Myorders: {
      screen: Myorders,
      navigationOptions: () => ({
        header: null
      })
    },

    Home: {
      screen: Home,
      navigationOptions: () => ({
        header: null
      })
    },

    Search: {
      screen: Search,
      navigationOptions: () => ({
        header: null
      })
    },

    DrawerNavigator: {
      screen: DrawerNavigator,
      navigationOptions: () => ({
        header: null
      })
    }
  },

  {
    initialRouteName: "login2"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class StackNavigator extends Component {
  render() {
    return <AppContainer />;
  }
}
