import React from 'react';
import auth from '@react-native-firebase/auth';
import { createContext } from 'react';
import { useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = props => {
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password);
                    }
                    catch (error) {
                        console.log(error);
                    }
                },

                register: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password);
                    } catch (error) {
                        console.log(error)
                    }
                },

                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (error) {
                        console.log(error)
                    }
                },

            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}