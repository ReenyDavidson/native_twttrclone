import React from "react";
import { ImageBackground, ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, Ionicons, Entypo, FontAwesome } from "react-native-vector-icons/";

import NewsHeaderImage from "../NewsHeaderImage/index";

const NewsHeader = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        resizeMethod="resize"
        source={{
          uri: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=707&q=80",
        }}
        style={{
          flex: 1,
          justifyContent: "center",
          width: "100%",
          height: 200,
        }}
      >
        <Text style={styles.stickyHeaderText}>Topics for you</Text>
      </ImageBackground>

      <Pressable style={styles.eachHeader} onPress={() => navigation.navigate("CryptoNewsScreen")}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Cryptocurrency</Text>
          <Ionicons name={"logo-bitcoin"} size={10} color={"#fff"} />
        </View>
        <NewsHeaderImage
          image={
            "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=816&q=80"
          }
          height={80}
          width={130}
          borderRadius={5}
        />
      </Pressable>
      <Pressable
        style={styles.eachHeader}
        onPress={() => navigation.navigate("BusinessNewsScreen")}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Business</Text>
          <Ionicons name={"business-outline"} size={10} color={"#FFF"} />
        </View>
        <NewsHeaderImage
          image={
            "https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20(1%20of%201)-5.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          }
          height={80}
          width={130}
          borderRadius={5}
        />
      </Pressable>
      <Pressable
        style={styles.eachHeader}
        onPress={() => navigation.navigate("EntertainmentNewsScreen")}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Entertainment</Text>
          <MaterialIcons name={"sports-esports"} size={10} color={"#FFF"} />
        </View>
        <NewsHeaderImage
          image={
            "https://images.unsplash.com/photo-1521714161819-15534968fc5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          }
          height={80}
          width={130}
          borderRadius={5}
        />
      </Pressable>
      <Pressable style={styles.eachHeader} onPress={() => navigation.navigate("ScienceNewsScreen")}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Science</Text>
          <MaterialIcons name={"science"} size={10} color={"#FFF"} />
        </View>
        <NewsHeaderImage
          image={
            "https://images.unsplash.com/photo-1516849677043-ef67c9557e16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          }
          height={80}
          width={130}
          borderRadius={5}
        />
      </Pressable>
      <Pressable style={styles.eachHeader} onPress={() => navigation.navigate("HealthNewsScreen")}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Health</Text>
          <Ionicons name={"medkit-outline"} size={10} color={"#FFF"} />
        </View>
        <NewsHeaderImage
          image={
            "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          }
          height={80}
          width={130}
          borderRadius={5}
        />
      </Pressable>
      <Pressable
        style={styles.eachHeader}
        onPress={() => navigation.navigate("TechnologyNewsScreen")}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Technology</Text>
          <Ionicons name={"rocket"} size={10} color={"#FFF"} />
        </View>
        <NewsHeaderImage
          image={
            "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
          }
          height={80}
          width={130}
          borderRadius={5}
        />
      </Pressable>
      <Pressable style={styles.eachHeader} onPress={() => navigation.navigate("SportsNewsScreen")}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Sports</Text>
          <MaterialIcons name={"sports-soccer"} size={10} color={"#FFF"} />
        </View>
        <NewsHeaderImage
          image={
            "https://e1.365dm.com/21/01/768x432/skysports-manchester-city-premier-league_5227135.jpg?20210417164317"
          }
          height={80}
          width={130}
          borderRadius={5}
        />
      </Pressable>
      <Pressable style={styles.eachHeader} onPress={() => navigation.navigate("FashionNewsScreen")}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Fashion</Text>
          <FontAwesome name={"shopping-bag"} size={10} color={"#FFF"} />
        </View>
        <NewsHeaderImage
          image={
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          }
          height={80}
          width={130}
          borderRadius={5}
        />
      </Pressable>
      <Pressable style={styles.eachHeader} onPress={() => navigation.navigate("CarsNewsScreen")}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Cars</Text>
          <Ionicons name={"car-sport-outline"} size={10} color={"#FFF"} />
        </View>
        <NewsHeaderImage
          image={
            "https://images.unsplash.com/photo-1575650681837-c0ca3b1e7275?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80"
          }
          height={80}
          width={130}
          borderRadius={5}
        />
      </Pressable>
      <Pressable style={styles.eachHeader} onPress={() => navigation.navigate("TravelNewsScreen")}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Travel</Text>
          <Entypo name={"aircraft"} size={10} color={"#FFFFFF"} />
        </View>
        <NewsHeaderImage
          image={
            "https://images.unsplash.com/photo-1464038008305-ee8def75f234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
          }
          height={80}
          width={130}
          borderRadius={5}
        />
      </Pressable>
    </ScrollView>
  );
};

export default NewsHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#001",
  },
  stickyHeaderText: { color: "#FFFFFF", fontSize: 25, top: 30, fontFamily: "QuicksandBold" },
  eachHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "#0C0C1C",
  },
  headerText: {
    fontSize: 17,
    fontFamily: "QuicksandSemiBold",
    padding: 15,
    color: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
