import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  ScrollView,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/action_categories';
import Category from './container_category';
import CategoryModalUpdate from './container_category_modal_update';
import CategoryModalNew from './container_category_modal_new';


class Categories extends Component {
  componentWillMount() {
    // TODO: this is where we diapatch the action to get all categories from DB
    // this.props.dispatch(fetchCategories());
  }

  // not in use for now
  getCategories() {
    this.props.dispatch(fetchCategories());
  }

  addCategory() {
    if (this.state.text !== "") {
      this.props.dispatch(addCategory(this.state.text));
    }
    // TODO: add here error handling for submiting an empty category
    this.setState({text: ''})
  }

  render() {
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableOpacity;
    }
    return (
      <View style={styles.container}>
        <CategoryModalUpdate />
        <CategoryModalNew />
        {/* // secret ugly ulgy UGLY walk around */}
        <View style={{height: 45}}>
        </View>
          <View style={styles.categories}>
            <Category />
          </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
  },
  button: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    paddingBottom: 50
  },
  categories: {
    paddingTop: 20
  }
})

function mapStateToProps(state) {
  return {
    categories: state.categories.categories,
  };
}

export default connect(mapStateToProps)(Categories);
