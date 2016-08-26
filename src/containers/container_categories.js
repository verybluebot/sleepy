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
    // this.props.dispatch(fetchCategories());
    console.log("this loads at reload", this.props);
  }

  getCategories() {
    this.props.dispatch(fetchCategories());
    console.log("this is from the button press", this.props);
  }

  render() {
    return (
      <View style={styles.container}>
      <TouchableHighlight onPress={this.getCategories.bind(this)}>

          <Text>
            this is the categories page!!!

          </Text>
        </TouchableHighlight>
        <View>
          <Text>
            {this.props.foo}

          </Text>
        </View>
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
  console.log("this is inside the maps thingy", state.categories.foo);
  return {
    foo: state.categories.foo
  };
}

export default connect(mapStateToProps)(Categories);
