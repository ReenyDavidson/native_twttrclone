import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import * as React from "react";

import NewTweetScreen from "../screens/NewTweetScreen";
import Tabs from "./Tabs/BottomTab";
import CryptoNewsScreen from "../screens/NewsScreens/CryptoNewsScreen";
import BusinessNewsScreen from "../screens/NewsScreens/BusinessNewsScreen";
import EntertainmentNewsScreen from "../screens/NewsScreens/EntertainmentNewsScreen";
import ScienceNewsScreen from "../screens/NewsScreens/ScienceNewsScreen";
import CarsNewsScreen from "../screens/NewsScreens/CarsNewsScreen";
import FashionNewsScreen from "../screens/NewsScreens/FashionNewsScreen";
import HealthNewsScreen from "../screens/NewsScreens/HealthNewsScreen";
import SportsNewsScreen from "../screens/NewsScreens/SportsNewsScreen";
import TechnologyNewsScreen from "../screens/NewsScreens/TechnologyNewsScreen";
import TravelNewsScreen from "../screens/NewsScreens/TravelNewsScreen";
import TechTodayDetailScreen from "../screens/NewsDetailsScreens/TechTodayDetailScreen";
import SignUpScreen from "../screens/AuthScreens/SignUpScreen";
import SignInScreen from "../screens/AuthScreens/SignInScreen";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootAuthNavigator() {
  const config = {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  const config = {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={Tabs} options={{ headerShown: false }} />
      <Stack.Screen
        name="NewTweetScreen"
        component={NewTweetScreen}
        options={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen
        name="CryptoNewsScreen"
        component={CryptoNewsScreen}
        options={{
          title: "Cryptocurrency",
          headerTitleStyle: { fontFamily: "QuicksandBold", color: "#fff" },
          headerShown: true,
          headerStyle: { elevation: 0, backgroundColor: "#000" },
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen
        name="BusinessNewsScreen"
        component={BusinessNewsScreen}
        options={{
          title: "Business",
          headerTitleStyle: { fontFamily: "QuicksandBold", color: "#fff" },
          headerShown: true,
          headerStyle: { elevation: 0, backgroundColor: "#000" },
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen
        name="EntertainmentNewsScreen"
        component={EntertainmentNewsScreen}
        options={{
          title: "Entertainment",
          headerTitleStyle: { fontFamily: "QuicksandBold", color: "#fff" },
          headerShown: true,
          headerStyle: { elevation: 0, backgroundColor: "#000" },
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen
        name="ScienceNewsScreen"
        component={ScienceNewsScreen}
        options={{
          title: "Science",
          headerTitleStyle: { fontFamily: "QuicksandBold", color: "#fff" },
          headerShown: true,
          headerStyle: { elevation: 0, backgroundColor: "#000" },
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen
        name="CarsNewsScreen"
        component={CarsNewsScreen}
        options={{
          title: "Cars",
          headerTitleStyle: { fontFamily: "QuicksandBold", color: "#fff" },
          headerShown: true,
          headerStyle: { elevation: 0, backgroundColor: "#000" },
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen
        name="FashionNewsScreen"
        component={FashionNewsScreen}
        options={{
          title: "Fashion",
          headerTitleStyle: { fontFamily: "QuicksandBold", color: "#fff" },
          headerShown: true,
          headerStyle: { elevation: 0, backgroundColor: "#000" },
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen
        name="HealthNewsScreen"
        component={HealthNewsScreen}
        options={{
          title: "Health",
          headerTitleStyle: { fontFamily: "QuicksandBold", color: "#fff" },
          headerShown: true,
          headerStyle: { elevation: 0, backgroundColor: "#000" },
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen
        name="SportsNewsScreen"
        component={SportsNewsScreen}
        options={{
          title: "Sports",
          headerTitleStyle: { fontFamily: "QuicksandBold", color: "#fff" },
          headerShown: true,
          headerStyle: { elevation: 0, backgroundColor: "#000" },
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen
        name="TechnologyNewsScreen"
        component={TechnologyNewsScreen}
        options={{
          title: "Technology",
          headerTitleStyle: { fontFamily: "QuicksandBold", color: "#fff" },
          headerShown: true,
          headerStyle: { elevation: 0, backgroundColor: "#000" },
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen
        name="TravelNewsScreen"
        component={TravelNewsScreen}
        options={{
          title: "Travel",
          headerTitleStyle: { fontFamily: "QuicksandBold", color: "#fff" },
          headerShown: true,
          headerStyle: { elevation: 0, backgroundColor: "#000" },
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen
        name="TechTodayDetailScreen"
        component={TechTodayDetailScreen}
        options={{
          title: "Tech News",
          headerTitleStyle: { fontFamily: "QuicksandBold", color: "#fff" },
          headerShown: true,
          headerStyle: { elevation: 0, backgroundColor: "#000" },
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          title: "Sign Up",
          headerTitleStyle: { fontFamily: "QuicksandBold", color: "#fff" },
          headerShown: true,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          title: "Sign In",
          headerTitleStyle: { fontFamily: "QuicksandBold", color: "#fff" },
          headerShown: true,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
    </Stack.Navigator>
  );
}
