import * as React from "react";
import { Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons/";

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
            iconName = focused ? "md-newspaper" : "md-newspaper-outline";
          } else if (route.name === "TabThreeScreen") {
            iconName = focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline";
          } else if (route.name === "TabFourScreen") {
            iconName = focused ? "notifications" : "notifications-outline";
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
        tabBarActiveTintColor: "#11DDAA",
        tabBarInactiveTintColor: "#FFF",
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0.2,
          backgroundColor: "#0C0C1C",
          borderTopColor: "#282C35",
          paddingTop: 10,
          paddingBottom: 10,
          height: 60,
        },
        headerShown: true,
        headerStyle: {
          height: 70,
          elevation: 0,
          borderBottomWidth: 0.2,
          borderBottomColor: "#282C35",
          backgroundColor: "#0C0C1C",
        },
        tabBarShowLabel: true,
        tabBarLabelStyle: { fontFamily: "QuicksandSemiBold", fontSize: 12 },
      })}
    >
      <Tab.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{
          tabBarLabel: "Home",
          headerTitle: () => (
            <View style={{ width: 100, flexDirection: "row", justifyContent: "center" }}>
              <Image
                source={require("../../assets/images/broxnbg.png")}
                style={{ width: 50, height: 30, transform: [{ rotate: "-10deg" }] }}
              />
            </View>
          ),
          headerRight: () => (
            <ImageUri
              size={30}
              image={"https://i.pinimg.com/736x/3f/97/3a/3f973a4cb980751c809b682042ca3aff.jpg"}
            />
          ),
          headerRightContainerStyle: { paddingHorizontal: 15 },
        }}
      />
      <Tab.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{
          tabBarLabel: "News",
          headerTitle: () => <SearchBar />,
          headerRight: () => (
            <ImageUri
              image={"https://i.pinimg.com/736x/3f/97/3a/3f973a4cb980751c809b682042ca3aff.jpg"}
              size={30}
            />
          ),
          headerLeftContainerStyle: { marginLeft: 15 },
          headerRightContainerStyle: { paddingRight: 15 },
        }}
      />
      <Tab.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{ tabBarLabel: "Chat" }}
      />
      <Tab.Screen
        name="TabFourScreen"
        component={TabFourScreen}
        options={{
          tabBarLabel: "Notifications",
          tabBarBadge: 7,
          tabBarBadgeStyle: { backgroundColor: "#11DDAA", fontFamily: "QuicksandBold" },
        }}
      />
    </Tab.Navigator>
  );
}
