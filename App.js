import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {StackNavigator} from 'react-navigation';

import Welcome from './components/Welcome';
import Signup from './components/Signup';
import Profile from './components/Profile';

export default class App extends React.Component {
  render() {
    return <AppLayout/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppLayout = StackNavigator({
  Welcome: {screen: Welcome},
  Signup: {screen: Signup},
  Profile: {screen: Profile}
})