import React, {Component} from 'react';
import { StatusBar, View, Text, StyleSheet } from 'react-native';

export default class Profile extends Component {
    static navigationOptions = ({navigation}) => ({
        title: `${navigation.state.params.username}'s Profile`
    });
    constructor(props){
        super(props);
    }
    render() {
      const {params} = this.props.navigation.state
        return (
          <View style={styles.container}>
            <StatusBar hidden={true}/>
            <Text style={styles.title}>Hello {params.username}</Text>
            <Text style={styles.subtitle}>Thanks for joining us</Text>
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
    subtitle: {
        fontSize: 25,
        color: '#FEFEFE'
    }
  })