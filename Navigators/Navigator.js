import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OnBoardingScreen from '../screens/OnBoardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from "../screens/SignupScreen";

const stack = createStackNavigator();

const AuthScreens = props =>
        <stack.Navigator initialRouteName={props.initialRouteName}>
            <stack.Screen name="Onboard" component={OnBoardingScreen} options={{ headerShown: false }} />
            <stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        </stack.Navigator>

export default AuthScreens;
