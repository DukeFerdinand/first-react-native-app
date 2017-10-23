import React, {Component} from 'react';
import { View, Text, StatusBar, StyleSheet, Button } from 'react-native';

export default class Welcome extends Component {
  static navigationOptions = {
    title: 'Populr'
  }
  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Text style={styles.title}>Populr</Text>
        <View>
          <Button
          onPress={() => navigate('Signup')} 
          title='Get Started'/>
        </View>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: '#FEFEFE'
  },
})
