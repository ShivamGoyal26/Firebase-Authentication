import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';



const stack = createStackNavigator();

const AppStack = props =>
        <stack.Navigator >
            <stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
            <stack.Screen name="chat" component={ChatScreen} options={{ headerShown: false }} />
        </stack.Navigator>

export default AppStack;
