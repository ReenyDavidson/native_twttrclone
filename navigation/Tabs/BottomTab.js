import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, View, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons/";

import TabOneScreen from "../../screens/TabsScreens/TabOneScreen";
import TabTwoScreen from "../../screens/TabsScreens/TabTwoScreen";
import TabThreeScreen from "../../screens/TabsScreens/TabThreeScreen";
import ImageUri from "../../components/ProfilePicture";
import SearchBar from "../../components/SearchBarComponent";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const navigation = useNavigation();
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
            iconName = focused ? "notifications" : "notifications-outline";
          }

          if (route.name === "TabOneScreen") {
            size = focused ? 26 : 25;
          } else if (route.name === "TabTwoScreen") {
            size = focused ? 26 : 25;
          } else if (route.name === "TabThreeScreen") {
            size = focused ? 26 : 25;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#11DDAA",
        tabBarInactiveTintColor: "#FFFFFF",
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
            <Pressable
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={() => {
                navigation.navigate("ProfileScreen");
              }}
            >
              <ImageUri
                size={30}
                image={"https://i.pinimg.com/736x/3f/97/3a/3f973a4cb980751c809b682042ca3aff.jpg"}
              />
            </Pressable>
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
            <Pressable
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={() => {
                navigation.navigate("ProfileScreen");
              }}
            >
              <ImageUri
                size={30}
                image={"https://i.pinimg.com/736x/3f/97/3a/3f973a4cb980751c809b682042ca3aff.jpg"}
              />
            </Pressable>
          ),
          headerLeftContainerStyle: { marginLeft: 15 },
          headerRightContainerStyle: { paddingRight: 15 },
        }}
      />
      <Tab.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{
          tabBarLabel: "notification",
          headerTitle: "Notifications",
          headerTitleStyle: {
            fontFamily: "QuicksandSemiBold",
            fontSize: 24,
            color: "#FFFFFF",
          },
        }}
      />
    </Tab.Navigator>
  );
}
