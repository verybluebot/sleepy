import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import { CategotryModalNewisVisble, addCategory } from '../actions/action_categories';

class CategoryModalNew extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}
  }

  addCategory() {
    if (this.state.text !== "") {
      this.props.dispatch(addCategory(this.state.text));
      this.props.dispatch(CategotryModalNewisVisble(false))
    }
    // TODO: add here error handling for submiting an empty category
    this.setState({text: ''})
  }

  setModalNewVisible(isVisible){
    this.props.dispatch(CategotryModalNewisVisble(isVisible))
    this.setState({text: ''})
  }
  render() {
    return (
      <View>
        <Modal
          animationType={"fade"}
          transparent={true}
          onRequestClose={() => this.setModalNewVisible(false)}
          visible={this.props.categoryModalNewVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={[styles.container, styles.modal]}>
          <View style={styles.innerContainer}>
            <Text style={styles.header}>New Category</Text>
            <TextInput
                value={this.state.text}
                style={styles.textInput}
                onChangeText={(text) => this.setState({text})}
                placeholder="Category Name"
                onSubmitEditing={() => this.addCategory()}
              />
            <View style={styles.buttons}>
              <Button
                containerStyle={styles.button}
                onPress={() => this.setModalNewVisible(false)}
                style={styles.button}>
                BACK
              </Button>
              <Button
                containerStyle={styles.button}
                onPress={() => this.addCategory()}
                style={styles.button}>
                ADD
              </Button>
            </View>
          </View>
         </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  modal: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 5
  },
  header: {
    fontSize: 40,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  textInput: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf: 'stretch',
    textAlign: 'left',
    fontSize: 18,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    left: 80,
    justifyContent: 'space-around',

  },
  button: {
    padding: 10,
    borderRadius:25,
    backgroundColor: 'grey',
    color: 'white'
  }
})

function mapStateToProps(state) {
  return {
    categories: state.categories.categories,
    categoryModalNewVisible: state.categories.categoryModalNewVisible,
  };
}

export default connect(mapStateToProps)(CategoryModalNew);
