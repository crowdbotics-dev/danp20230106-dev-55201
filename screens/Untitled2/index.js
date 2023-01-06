import { TextInput } from "react-native";
import { View } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }} style={styles.ayBEZXKK}><View style={styles.GpRqqlKD}></View><TextInput style={styles.hOTPRGBh}></TextInput></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: "#b9dc67"
  },
  ayBEZXKK: {
    backgroundColor: "#eb7d7d"
  },
  GpRqqlKD: {
    height: 60,
    width: 140,
    backgroundColor: "#b94242",
    borderRadius: 0,
    color: "#777777"
  },
  hOTPRGBh: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  }
});
export default Untitled2;