import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3Copy = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      flex: 1,
      flexDirection: 'column',
      height: '100%',
      padding: 10,
      backgroundColor: '#f0f0f1'
    }}>
        
          <View style={styles.column1}><View style={styles.gQNodPdQ}><View style={styles.kpBcHemF}><View style={styles.HzUNKGjj}></View><View style={styles.TzRyiWLv}></View><View style={styles.GCSEmCnA}></View></View><View style={styles.ILEzIMsH}></View><View style={styles.PeAycIQZ}></View></View></View>
          <View style={styles.column2}></View>
          <View style={styles.column3}></View>
        
        </ScrollView>
      </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  column1: {
    flex: 1,
    backgroundColor: "#b9dc67"
  },
  column2: {
    flex: 1,
    backgroundColor: "#c87373"
  },
  column3: {
    flex: 1,
    backgroundColor: "#3b63ab"
  },
  gQNodPdQ: {
    flex: 1
  },
  kpBcHemF: {
    flex: 1,
    flexDirection: "row"
  },
  ILEzIMsH: {
    flex: 1,
    backgroundColor: "#f56ad8"
  },
  PeAycIQZ: {
    flex: 1
  },
  HzUNKGjj: {
    flex: 1,
    backgroundColor: "#7feedd"
  },
  TzRyiWLv: {
    flex: 1,
    backgroundColor: "#78a131"
  },
  GCSEmCnA: {
    flex: 1
  }
});
export default Untitled3Copy;