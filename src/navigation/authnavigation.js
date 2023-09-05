import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../LoginScreen';
import MyStack from './navigation';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
         
        />
         <Stack.Screen
          name="MyStack"
          component={MyStack}
          options={{ headerShown: false }}

         
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;