import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Layout from "../components/global/Layout";
import Text from "../components/utils/UbuntuFont";
import Colors from "../constants/colors";
export default function ({ navigation }) {
  return (
    <Layout navigation={navigation} title="About">
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* This text using ubuntu font */}
        <Text
          bold
          style={{
            margin: "20px",
          }}
        >
          Add New Bill
        </Text>
        <Text bold>Sizes</Text>
        <Text bold>Quantity</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SecondScreen");
          }}
          style={{
            backgroundColor: Colors.primary,
            padding: 10,
            paddingHorizontal: 20,
            marginTop: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white" }} bold>
            Add New Bill
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}
