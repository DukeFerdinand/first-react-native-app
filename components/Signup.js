import React,{Component} from 'react';
import { StatusBar, Alert, View, Text,TextInput, Button, StyleSheet } from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class Signup extends Component {
    static navigationOptions = {
        title: 'Signup',
    };
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }
    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <Text style={styles.title}>Create a Profile</Text>
                <View style={styles.inputGroup}>
                  <TextInput onChangeText={text => this.setState({username: text})} style={styles.textinput}/>
                  {this.state.username ? <Button onPress={() => navigate('Profile', {username: this.state.username}) }title='Go'/> : undefined}
                </View>
            </View>
        )
    }
}
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
    inputGroup: {
      flexDirection: 'row',
    },
    textinput: {
      width: 200,
      backgroundColor: '#FEFEFE',
      fontSize: 25, 
      height: 40, 
      borderColor: '#222', 
      borderWidth: 1}
  });