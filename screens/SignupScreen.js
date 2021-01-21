import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

import Ionicons from 'react-native-vector-icons/Ionicons';

const SignupScreen = props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  return (
    <View style={{ flex: 1 }} >
      <TouchableOpacity>
        <View style={{ margin: 10, }}>

          <Ionicons name="arrow-back" size={26} color="black" onPress={() => props.navigation.pop()} />

        </View>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text}>Create an account</Text>

        <FormInput
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='email-address'
          placeholderText="Email"
          iconType='user'
        />

        <FormInput
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText="Password"
          iconType='lock'
          secureTextEntry={true}
        />

        <FormInput
          labelValue={confirmPassword}
          onChangeText={(userConfirmPassword) => setConfirmPassword(userConfirmPassword)}
          placeholderText="Confirm Password"
          iconType='lock'
          secureTextEntry={true}
        />

        <FormButton
          buttonTitle="Sign Up"
          action={() => alert("Sign in clicked")}
        />
        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>By registering, you confirm that you accept our</Text>
          <TouchableOpacity onPress={() => alert("Terms Clicked")}><Text style={[styles.color_textPrivate, { color: '#e88832' }]}>Terms of services</Text></TouchableOpacity>
          <Text style={styles.color_textPrivate}> and </Text>
          <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>Privacy</Text>
        </View>

        <SocialButton
          buttonTitle='Sign Up with Facebook'
          btnType='facebook'
          color='#4867aa'
          bgColor='#e6eaf4'
          action={() => props.navigation.navigate("Signup")}
        />

        <SocialButton
          buttonTitle='Sign Up with Google'
          btnType='google'
          color='#de4d41'
          bgColor='#f5e7ea'
          action={() => props.navigation.navigate("Signup")}
        />

        <TouchableOpacity style={styles.navButton} onPress={() => props.navigation.pop()}>
          <Text style={styles.navButtonText}>Have an account? Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    // paddingTop: 50
  },

  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },

  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    color: 'grey'
  }
});

export default SignupScreen;