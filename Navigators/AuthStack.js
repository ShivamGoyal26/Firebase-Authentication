import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthScreens from './Navigator'
import { GoogleSignin } from '@react-native-community/google-signin';


const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      }
      else{
        setIsFirstLaunch(false);
      }
    });
    GoogleSignin.configure({
      webClientId: '526327767647-4g8dd6dkrastmop550fbk0855qn1qrjt.apps.googleusercontent.com',
    });
  }, []);

  if(isFirstLaunch === null){
    return null;
  }
  else if(isFirstLaunch === true){
    return(
      <AuthScreens initialRouteName='Onboard'/>
    );
  }
  else {
    return (
      <AuthScreens initialRouteName='Login'/>
    );
  }

};


export default AuthStack;