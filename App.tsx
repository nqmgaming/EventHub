import {StatusBar, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SplashScreen} from './src/screens';
import AuthNavigator from './src/navigators/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import MainNavigator from './src/navigators/MainNavigator';

const App = () => {
  const [isShowSplash, setisShowSplash] = useState(true);
  const [assetToken, setassetToken] = useState('');
  const {getItem, setItem} = useAsyncStorage('assetToken');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setisShowSplash(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const token = await getItem();
    console.log('====================================');
    console.log('token', token);
    console.log('====================================');
    if (token) {
      setassetToken(token);
    } else {
      setassetToken('');
    }
  };
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        translucent={true}
        backgroundColor={'transparent'}
      />
      {isShowSplash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          {assetToken ? <MainNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
