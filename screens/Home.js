import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Layout from "../components/global/Layout";
import Text from "../components/utils/UbuntuFont";
import Colors from "../constants/colors";
export default function ({ navigation }) {
  return (
    <Layout navigation={navigation} title="Mango Mart">
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          margin: "90px",
        }}
      >
        {/* This text using ubuntu font */}
        <Text bold>Banginapalli mangoes</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          margin: "90px",
        }}
      >
        {/* This text using ubuntu font */}
        <Text>Total Amount 500</Text>
        <Text>Pending Amount 300</Text>
        <Text>Received Amount 200</Text>
      </View>
    </Layout>
  );
}
