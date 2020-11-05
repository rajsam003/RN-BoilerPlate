import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '_screens/login';

const Stack = createStackNavigator();

const AuthNavigator = () => (
      <Stack.Navigator initialRouteName="Login"  >
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
)

export default AuthNavigator;