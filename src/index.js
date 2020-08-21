import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Logged from './screens/logged';
import Login from './screens/login';


const Stack = createStackNavigator();

const options = {
    headerShown: false,
}
export default RootNavigation = () => {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator screenOptions={options}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Logged" component={Logged} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  };