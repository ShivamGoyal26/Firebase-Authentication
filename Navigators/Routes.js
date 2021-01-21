import React from 'react';
import AuthStack from './AuthStack';
import { AuthContext } from './AuthProvider';
import auth from '@react-native-firebase/auth';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import AppStack from './AppStack';
import { NavigationContainer } from '@react-navigation/native';


const Routes = () => {

    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (getUser) => {
        setUser(getUser);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    },[])

    if (initializing) return null;


    return (
        <NavigationContainer>
            {user ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );



}

export default Routes;