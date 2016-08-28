import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  MapView,
  View
} from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import { LocationModalNewisVisble, addLocation } from '../../actions/action_locations';

class LocationModalNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      category: '',
      coordinates: ''
    }
  }

  addLocation() {
    this.props.dispatch(addLocation(this.state));
    this.props.dispatch(LocationModalNewisVisble(false))
    // TODO: add here error handling for submiting an empty location
    this.setState({
      name: '',
      address: '',
      category: '',
      coordinates: ''
    })
  }

  setModalNewVisible(isVisible){
    this.props.dispatch(LocationModalNewisVisble(isVisible))
    this.setState({
        name: '',
        address: '',
        category: '',
        coordinates: ''
      })
  }
  render() {
    return (
      <View>
        <Modal
          animationType={"fade"}
          transparent={true}
          onRequestClose={() => this.setModalNewVisible(false)}
          visible={this.props.locationModalNewVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={[styles.container, styles.modal]}>
          <View style={styles.innerContainer}>
            <Text style={styles.header}>New Location</Text>
            <View>
              <Text>Name:</Text>
              <TextInput
                  value={this.state.name}
                  style={styles.textInput}
                  onChangeText={(name) => this.setState({name})}
                  placeholder="Location Name"
                />
              <Text>Address:</Text>

              <TextInput
                  value={this.state.address}
                  style={styles.textInput}
                  onChangeText={(address) => this.setState({address})}
                  placeholder="Address"
                />
              <Text>Category:</Text>
              <TextInput
                  value={this.state.category}
                  style={styles.textInput}
                  onChangeText={(category) => this.setState({category})}
                  placeholder="Category"
                />
              <Text>Coordinates:</Text>
            </View>
            <View style={styles.innerContainer}>
              <MapView style={styles.map}></MapView>

            </View>
            <View style={styles.buttons}>
              <Button
                containerStyle={styles.button}
                onPress={() => this.setModalNewVisible(false)}
                style={styles.button}>
                BACK
              </Button>
              <Button
                containerStyle={styles.button}
                onPress={() => this.addLocation()}
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
  map: {
    width: 370,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modal: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 5,
    width: 400
    // height: 500
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
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf: 'stretch',
    textAlign: 'left',
    fontSize: 18,
  },
  buttons: {
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
    locations: state.locations.locations,
    locationModalNewVisible: state.locations.locationModalNewVisible,
  };
}

export default connect(mapStateToProps)(LocationModalNew);
