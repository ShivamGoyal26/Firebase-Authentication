import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {windowHeight} from '../utils/Dimensions';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const SocialButton = props => {
    return (
        <TouchableOpacity
          style={[styles.buttonContainer, {backgroundColor: props.bgColor}]} onPress={props.action}>
          <View style={styles.iconWrapper}>
            <FontAwesome name={props.btnType} style={styles.icon} size={22} color={props.color} />
          </View>
          <View style={styles.btnTxtWrapper}>
            <Text style={[styles.buttonText, {color: props.color}]}>{props.buttonTitle}</Text>
          </View>
        </TouchableOpacity>
      );
};
  


export default SocialButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 3,
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});