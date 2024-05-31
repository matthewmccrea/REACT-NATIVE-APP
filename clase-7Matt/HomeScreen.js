import React from "react";

import { View, StyleSheet, Text } from "react-native";

const HomeScreen = () => {
  return (
    <View styles={styles.container}>
      <Text styles={styles.texto}>Bienvenidos a Matt's Website</Text>
    </View>
  );

  
};
export default HomeScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  texto:{
    fontSize:24,
    fontWeight:'bold'
  }
});
