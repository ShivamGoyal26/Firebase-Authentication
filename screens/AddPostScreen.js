import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const AddPostScreen = props => {
return(
    <View style={styles.screen}>
        <Text>
        AddPost Screen 
        </Text>
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

export default AddPostScreen;