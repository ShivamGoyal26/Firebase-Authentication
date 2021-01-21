import React from 'react';
import {View, StyleSheet} from 'react-native';
// import { useContext } from 'react';
// import {AuthContext} from '../Navigators/AuthProvider';
import MainHeader from '../Headers/MainHeader';

const HomeScreen = props => {
    // const {user, logout} = useContext(AuthContext);
return(
    <View style={styles.screen}>
    <MainHeader titleText = "RN Social" onAdd={() => {
        props.navigation.navigate("AddPostScreen");
    }}/>
    </View>
);
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
});

export default HomeScreen;