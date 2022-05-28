/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 * 
 * 
 * -----------------No hay Navegación todavia-----------------
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
} from 'react-native';
import style from './src/styles/style';

import Login from './src/views/login/index';
import Welcome from './src/views/welcome/index';
import Register from './src/views/register/index';

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <Welcome />
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;