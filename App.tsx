/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login';
import Home from './pages/Home';
import { NavigationContainer } from '@react-navigation/native';



function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen name="Home" 
        component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
