import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  AsyncStorage,
  Text,
  Platform,
  ScrollView,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { fetchLocations, addLocation } from '../../actions/action_locations';
import Location from './container_location';
import LocationModalUpdate from './container_location_modal_update';
import LocationModalNew from './container_location_modal_new';


class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {locations: []}
  }
  componentWillMount () {
    AsyncStorage.getItem('locations').then((response) => {
      this.setState({locations: JSON.parse(response)})
      this.props.dispatch(addLocation(this.state.locations))
    });
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
