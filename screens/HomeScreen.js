import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import { useContext } from 'react';
import {AuthContext} from '../Navigators/AuthProvider';

const HomeScreen = props => {
    const {user, logout} = useContext(AuthContext);
return(
    <View style={styles.screen}>
        <Text>
            Home Screen
        </Text>
        <Text>{user.email}</Text>
        <Text>{user.uid}</Text>
        <Button title="Logout" onPress={() => {logout()}}/>
        <Button title="Next Screen" onPress={() => {props.navigation.navigate("chat")}}/>
    </View>
);
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default HomeScreen;