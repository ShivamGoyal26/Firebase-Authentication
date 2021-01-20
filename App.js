import React, {useEffect} from 'react';
import AuthScreens from './Navigators/Navigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './screens/LoginScreen';

const App = () => {
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
      <AuthScreens></AuthScreens>
    );
  }
  else {
    return <LoginScreen />
  }

};


export default App;