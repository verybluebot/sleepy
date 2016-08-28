import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { delCategory, CategotryModalUpdateisVisble, setModalType } from '../actions/action_categories';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CategoryModalUpdate from './container_category_modal_update'

class Category extends Component {
  deleteCategory(i) {
    this.props.dispatch(delCategory(i));
  }

  updateCategory(index) {
    this.props.dispatch(CategotryModalUpdateisVisble(true))
  }

  renderCategory() {
    return this.props.categories.map((c, i) => {
      return (
        <View style={styles.category} key={i}>
            <TouchableOpacity style={{flex: 1}} onPress={this.props.navigator.push({name: 'locations'})}>
              <Text style={styles.catName}>
                {c}
              </Text>
            </TouchableOpacity>
            <View style={styles.icons}>

              <TouchableOpacity>
                <Text>
                  <Icon
                      style={styles.catIcons}
                      name="mode-edit"
                      onPress={() => this.updateCategory(i)}
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
                        `Do you really want to delete '${c}' category?`,
                        [
                           {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                           {text: 'OK', onPress: () => this.deleteCategory(i)}
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
        {this.renderCategory()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  category: {
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
    categories: state.categories.categories,
  };
}

export default connect(mapStateToProps)(Category);
