import React from 'react';
import {Text, TouchableOpacity , StyleSheet} from 'react-native';
import { windowHeight } from '../utils/Dimensions';

const FormButton = props => {
 return (
     <TouchableOpacity style={styles.buttonContainer} onPress={props.action}>
         <Text style={styles.buttonText}>{props.buttonTitle}</Text>
     </TouchableOpacity>
 );
};

const styles = StyleSheet.create({
    buttonContainer:{
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    }
});

export default FormButton;