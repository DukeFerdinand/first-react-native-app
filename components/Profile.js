import React, {Component} from 'react';
import { StatusBar, View, Text } from 'react-native';

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
          <View>
            <StatusBar hidden={true}/>
            <Text style={{fontSize: 30}}>Hello {params.username}</Text>
          </View>
        )
    }
}