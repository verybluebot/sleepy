import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Platform,
  ScrollView,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { fetchLocations } from '../../actions/action_locations';
import Location from './container_location';
import LocationModalUpdate from './container_location_modal_update';
import LocationModalNew from './container_location_modal_new';


class Locations extends Component {
  componentWillMount() {
    // TODO: this is where we diapatch the action to get all locations from DB
    // this.props.dispatch(fetchLocations());
  }

  // not in use for now
  getLocations() {
    this.props.dispatch(fetchLocations());
  }

  addLocation() {
    this.props.dispatch(addLocation(this.state.text));

    // TODO: add here error handling for submiting an empty location
    this.setState({text: ''})
  }

  setModalVisible(isVisible) {
    this.props.dispatch(LocationModalisVisble(isVisible));
  }
  render() {
    return (
      <View style={styles.container}>
        <LocationModalUpdate />
        <LocationModalNew />
        {/* // secret ugly ulgy UGLY walk around */}
        <View style={{height: 45}}>
        </View>
          <View style={styles.locations}>
            <Location />
          </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
  },
  locations: {
    paddingTop: 20
  }
})

function mapStateToProps(state) {
  return {
    locations: state.locations.locations,
  };
}

export default connect(mapStateToProps)(Locations);
