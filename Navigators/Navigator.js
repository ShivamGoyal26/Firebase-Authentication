import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

import OnBoardingScreen from '../screens/OnBoardingScreen';
import LoginScreen from '../screens/LoginScreen';

const stack = createStackNavigator();

const AuthScreens = () => <NavigationContainer>
    <stack.Navigator>
        <stack.Screen name="Onboard" component={OnBoardingScreen} options={{ headerShown: false }} />
        <stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    </stack.Navigator>
</NavigationContainer>

export default AuthScreens;