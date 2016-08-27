import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  AsyncStorage,
  Navigator
} from 'react-native';
import Categories from './containers/container_categories';
import Header from './components/header'

class App extends Component {
  render() {
    return (
      <View>
        <Header />
        <Text>
        </Text>
        <Categories />
      </View>
    )
  }
}

export default App;
