import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenStackHeaderLeftView } from 'react-native-screens';
import RegisterLoginScreen from './RegisterLoginScreen';
import HomeScreen from './HomeScreen';


const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName='RegisterLogin'>
      <Stack.Screen name="RegisterLogin" component={RegisterLoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
