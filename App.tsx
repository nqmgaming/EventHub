import {StatusBar, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SplashScreen} from './src/screens';
import AuthNavigator from './src/navigators/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const [isShowSplash, setisShowSplash] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setisShowSplash(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);
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
          <AuthNavigator />
        </NavigationContainer>
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
