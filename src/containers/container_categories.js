import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/action_categories';

class Categories extends Component {
  componentWillMount() {
    this.props.dispatch({fetchCategories});
    console.log(this.props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          this is the categories page!!!

          {this.props.yade}
        </Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})

function mapStateToProps(state) {
  return {
    categories: state.foo
  };
}

export default connect(mapStateToProps)(Categories);
