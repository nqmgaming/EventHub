/* eslint-disable react-native/no-inline-styles */
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {appInfo} from '../constants/appInfor';
import {SpaceComponent} from '../components';
import {appColors} from '../constants/appColors';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/backgroundSplashScreen.png')}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../assets/images/logo.png')}
        style={{
          width: appInfo.size.WIDTH * 0.8,
          resizeMode: 'contain',
        }}
      />
      <SpaceComponent height={20} />
      <ActivityIndicator color={appColors.primary} size={'large'} />
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
