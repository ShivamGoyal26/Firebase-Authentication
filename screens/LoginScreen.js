import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { color } from 'react-native-reanimated';

const LoginScreen = props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/rn-social-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>RN Social App</Text>

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

      <FormButton
        buttonTitle="Sign In"
        action={() => alert("Sign in clicked")}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <SocialButton
        buttonTitle='Sign In with Facebook'
        btnType='facebook'
        color='#4867aa'
        bgColor='#e6eaf4'
        action={() => props.navigation.navigate("Signup")}
      />

      <SocialButton
        buttonTitle='Sign In with Google'
        btnType='google'
        color='#de4d41'
        bgColor='#f5e7ea'
        action={() => props.navigation.navigate("Signup")}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => props.navigation.navigate("Signup")}>
        <Text style={styles.navButtonText}>Don't have an account? create here</Text>
      </TouchableOpacity>

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
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  navButton: { 
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
  },
  forgotButton: {
    marginVertical: 35,
  },

});

export default LoginScreen;