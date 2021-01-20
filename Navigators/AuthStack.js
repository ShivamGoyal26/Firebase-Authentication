import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthScreens from './Navigator'


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
    })
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