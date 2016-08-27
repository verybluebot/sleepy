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
  TextInput,
  View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCategories, addCategory } from '../actions/action_categories';
import Button from 'react-native-button';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}
  }
  componentWillMount() {
    // this.props.dispatch(fetchCategories());
    console.log("this loads at reload", this.props);
  }

  // not in use for now
  getCategories() {
    this.props.dispatch(fetchCategories());
    console.log("this is from the button press", this.props);
  }

  addCategory() {
    if (this.state.text !== "") {
      this.props.dispatch(addCategory(this.state.text));
    }
    // TODO: add here error handling for submiting an empty category
    this.setState({text: ''})
  }

  renderCategory() {
    return this.props.categories.map((c, i) => {
      return (
        <View style={styles.category} key={i}>
          <Text style={styles.catName}>
            {c}
          </Text>
          <Text style={styles.catIcons}>
            testing
          </Text>

        </View>
      )
    })
  }
  render() {
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableOpacity;
    }
    return (
      <View>
        <TextInput
            style={styles.inputText}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder="Type Category here"
            onSubmitEditing={this.addCategory.bind(this)}
          />
        <Button
          containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:10, backgroundColor: 'grey'}}
          onPress={this.addCategory.bind(this)}
          style={styles.button}>
          Add Category
        </Button>
        <ScrollView style={{flex: 1}}>
          <View style={styles.categories}>
            {this.renderCategory()}
          </View>
        </ScrollView>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  textInput: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1
  },
  button: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 7,
    color: 'white',
    fontSize: 20,
    paddingBottom: 50
  },
  category: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'gray',
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  categories: {
    paddingTop: 20
  },
  catName: {
    padding: 5,
    flex: 5,
    fontSize: 30,
    justifyContent: 'flex-end'
  },
  catIcons: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 10,
    fontSize: 20,
    paddingRight: 10
  }
})

function mapStateToProps(state) {
  console.log("this is inside the maps thingy", state.categories.foo);
  return {
    categories: state.categories.categories
  };
}

export default connect(mapStateToProps)(Categories);
