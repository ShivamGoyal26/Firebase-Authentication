import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import Profile from '../screens/Profile';
import AddPostScreen from '../screens/AddPostScreen';




const stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppStack = props => 
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#2e64e5',
        }}>
            <Tab.Screen name="home" component={HomeStack} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => <MaterialCommunityIcons
                    name='home-outline'
                    color={color}
                    size={size}
                />
            }} />

            <Tab.Screen name="chat" component={ChatScreen} options={{
                tabBarLabel: 'Messages',
                tabBarIcon: ({color, size}) => <Ionicons
                    name='chatbox-ellipses-outline'
                    color={color}
                    size={size}
                />
            }} />

            <Tab.Screen name="profile" component={Profile} options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({color, size}) => <Ionicons
                    name='person-outline'
                    color={color}
                    size={size}
                />
            }} />

        </Tab.Navigator>

  

const HomeStack = props =>
        <stack.Navigator >
            <stack.Screen name="HomePage" component={HomeScreen} options={{ headerShown: false }} />
            <stack.Screen name="AddPostScreen" component={AddPostScreen} options={{ headerShown: false }} />
        </stack.Navigator>

export default AppStack;
