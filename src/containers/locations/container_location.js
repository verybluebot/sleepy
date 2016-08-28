import React, { Component } from 'react';
import {
  AppRegistry,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { delLocation, LocationModalUpdateisVisble  } from '../../actions/action_locations';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Location extends Component {
  deleteLocation(i) {
    this.props.dispatch(delLocation(i));
  }

  updateLocation(index) {
    this.props.dispatch(LocationModalUpdateisVisble(true))
  }

  renderLocation() {
    if (this.props.locations.length === undefined ) {
      return <Text>No Locations Found...</Text>
    }
    return this.props.locations.map((c, i) => {
      return (
        <View style={styles.location} key={i}>

            <Text style={styles.catName}>
              {c.name}
            </Text>
            <View style={styles.icons}>

              <TouchableOpacity>
                <Text>
                  <Icon
                      style={styles.catIcons}
                      name="mode-edit"
                      onPress={() => this.updateLocation(i)}
                       />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>
                  <Icon
                      style={styles.catIcons}
                      name="delete-forever"
                      onPress={() => Alert.alert(
                        'Are You Sure?',
                        `Do you really want to delete '${c.name}'?`,
                        [
                           {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                           {text: 'OK', onPress: () => this.deleteLocation(i)}
                        ]
                      )}
                       />
                </Text>
              </TouchableOpacity>
          </View>
        </View>
      )
    })
  }

  render() {
    return (
      <View>
        {this.renderLocation()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  location: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'gray',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  catName: {
    padding: 5,
    flex: 1,
    fontSize: 30,
    justifyContent: 'flex-end'
  },
  catIcons: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 5,
    color: 'grey',
    fontSize: 30,
    alignSelf: 'auto',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 55
  }
})

function mapStateToProps(state) {
  return {
    locations: state.locations.locations,
  };
}

export default connect(mapStateToProps)(Location);
