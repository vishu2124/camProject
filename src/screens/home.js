import React from 'react';
import {Button, View} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerShow: false,
    header: null,
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 2}}></View>
        <View style={{flex: 1}}>
          <Button title="Open Camera" onPress={() => navigate('Camera')} />
        </View>
        <View style={{flex: 1}}></View>
      </View>
    );
  }
}

export default HomeScreen;
