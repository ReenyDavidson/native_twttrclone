import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "react-native-vector-icons/";

import TabOneScreen from "../../screens/TabsScreens/TabOneScreen";
import TabTwoScreen from "../../screens/TabsScreens/TabTwoScreen";
import TabThreeScreen from "../../screens/TabsScreens/TabThreeScreen";
import TabFourScreen from "../../screens/TabsScreens/TabFourScreen";
import ImageUri from "../../components/ProfilePicture";
import SearchBar from "../../components/SearchBarComponent";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="TabOneScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;

          if (route.name === "TabOneScreen") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "TabTwoScreen") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "TabThreeScreen") {
            iconName = focused ? "notifications" : "notifications-outline";
          } else if (route.name === "TabFourScreen") {
            iconName = focused ? "mail" : "mail-outline";
          }

          if (route.name === "TabOneScreen") {
            size = focused ? 26 : 25;
          } else if (route.name === "TabTwoScreen") {
            size = focused ? 26 : 25;
          } else if (route.name === "TabThreeScreen") {
            size = focused ? 26 : 25;
          } else if (route.name === "TabFourScreen") {
            size = focused ? 26 : 25;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#FFF",
        tabBarInactiveTintColor: "#FFF",
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0.2,
          backgroundColor: "#0C0C1C",
          borderTopColor: "#282C35",
        },
        headerShown: true,
        headerStyle: {
          elevation: 0,
          borderBottomWidth: 0.2,
          borderBottomColor: "#282C35",
          backgroundColor: "#0C0C1C",
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{
          headerTitle: () => <Ionicons name={"logo-twitter"} size={26} color={"#1DA1F2"} />,
          headerTitleAlign: "center",
          headerLeft: () => (
            <ImageUri
              image={
                "https://www.washingtonpost.com/resizer/PWa0TPTXiZtSD3v-fDE8OXp0eUA=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/4WH6CDER5II6PB2U2R4GRDJDWQ.png"
              }
              size={25}
            />
          ),
          headerLeftContainerStyle: { marginLeft: 15 },
          headerRight: () => (
            <MaterialCommunityIcons name={"star-four-points-outline"} size={23} color={"#fff"} />
          ),
          headerRightContainerStyle: { marginRight: 15 },
        }}
      />
      <Tab.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{
          headerTitle: () => <SearchBar />,
          headerTitleAlign: "center",
          headerLeft: () => (
            <ImageUri
              image={
                "https://www.washingtonpost.com/resizer/PWa0TPTXiZtSD3v-fDE8OXp0eUA=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/4WH6CDER5II6PB2U2R4GRDJDWQ.png"
              }
              size={25}
            />
          ),
          headerLeftContainerStyle: { marginLeft: 15 },
          headerRight: () => <Ionicons name={"settings-outline"} size={23} color={"#FFF"} />,
          headerRightContainerStyle: { marginRight: 15 },
        }}
      />
      <Tab.Screen name="TabThreeScreen" component={TabThreeScreen} />
      <Tab.Screen name="TabFourScreen" component={TabFourScreen} />
    </Tab.Navigator>
  );
}
