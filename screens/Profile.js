import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Profile = () => {
    return(
        <View style={styles.screen}>
            <Text>This is the profile Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Profile;