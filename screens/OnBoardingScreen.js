import React from 'react';
import {Image} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const OnBoardingScreen = props => {
  return(
    <Onboarding 
    onSkip={() => props.navigation.replace("Login")}
    onDone={() => props.navigation.replace("Login")}
        pages={[
    {
      backgroundColor: '#a6e4d0',
      image: <Image source={require('../assets/onboarding-img1.png')} />,
      title: 'Connect to the world',
      subtitle: 'A new way to connect with the world',
    },
    {
      backgroundColor: '#fdeb93',
      image: <Image source={require('../assets/onboarding-img2.png')} />,
      title: 'Share your favorites',
      subtitle: 'Share your thoughts with similar kind of people',
    },
    {
      backgroundColor: '#e9bcbe',
      image: <Image source={require('../assets/onboarding-img3.png')} />,
      title: 'Become the star',
      subtitle: 'Let the Spot Light Capture You',
    },
  ]}
    />
  );
};


export default OnBoardingScreen;