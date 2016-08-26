import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  AsyncStorage,
  ScrollView,
  Navigator
} from 'react-native';
import Categories from './containers/container_categories';

class App extends Component {
  render() {
    return (
      <View>
        <Text>
          this is sparta
        </Text>
        <Categories />
      </View>
    )
  }
}

export default App;
