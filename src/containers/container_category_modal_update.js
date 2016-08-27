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
import { delCategory, CategotryModalUpdateisVisble, updateCategory } from '../actions/action_categories';

class CategoryModalUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}
  }

  updateCategory() {
    if (this.state.text !== "") {
      this.props.dispatch(updateCategory(this.state.text));
      this.props.dispatch(CategotryModalUpdateisVisble(false))
    }
    // TODO: add here error handling for submiting an empty category
    this.setState({text: ''})
  }

  setModalUpdateVisible(isVisible){
    this.props.dispatch(CategotryModalUpdateisVisble(isVisible))
    this.setState({text: ''})
  }
  render() {
    return (
      <View>
        <Modal
          animationType={"fade"}
          transparent={true}
          onRequestClose={() => this.setModalUpdateVisible(false)}
          visible={this.props.categoryModalUpdateVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={[styles.container, styles.modal]}>
          <View style={styles.innerContainer}>
            <Text style={styles.header}>Update Category</Text>
            <TextInput
                value={this.state.text}
                style={styles.textInput}
                onChangeText={(text) => this.setState({text})}
                placeholder="Category Name"
                onSubmitEditing={() => this.updateCategory()}
              />
            <View style={styles.buttons}>
              <Button
                containerStyle={styles.button}
                onPress={() => this.setModalUpdateVisible(false)}
                style={styles.button}>
                BACK
              </Button>
              <Button
                containerStyle={styles.button}
                onPress={() => this.updateCategory()}
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
    categoryModalUpdateVisible: state.categories.categoryModalUpdateVisible,
  };
}

export default connect(mapStateToProps)(CategoryModalUpdate);
