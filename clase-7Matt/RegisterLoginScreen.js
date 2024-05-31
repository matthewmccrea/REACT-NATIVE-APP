import { CurrentRenderContext } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, View, Text, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function RegisterLoginScreen() {
 

const[email, setEmail] = useState('');
const[password, setPassword] = useState('');

const navigation = useNavigation()


 const HandleLogin = () =>{

if (email === "admin@admin.com"&& password==="admin"){
      alert("Login conseguido")
      navigation.navigate('HomeScreen')
}else{
  alert("No se pudo loguear")
}

 }


 
 
 
 
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput value={email} style={styles.input} placeholder="Ingresa tu mail " onChangeText={setEmail} />
      <TextInput value={password} style={styles.input} placeholder="Ingresa tu contraseña " onChangeText={setPassword}/>
      <Button title='Login' onPress={HandleLogin}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },

  input: {
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    textAlign: "center",
    borderRadius: 7,
  },
});
