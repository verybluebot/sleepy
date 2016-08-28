import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Navigator
} from 'react-native';
import { connect } from 'react-redux';
import Categories from './containers/container_categories';
import Locations from './containers/locations/container_locations';
import HeaderTitle from './small_components/header_title';
import BackButton from './small_components/back_button';
import AddButton from './small_components/add_button';
import { CategotryModalNewisVisble } from './actions/action_categories';
import { LocationModalNewisVisble } from './actions/action_locations';


const routes = {
  categories: Categories,
  locations: Locations
};

class App extends Component {
  renderScene(route, navigator) {
    let Comp = routes[route.name];
    return <Comp navigator={navigator} route={route} />
  }

  setDispatcher(name) {
    switch(name) {
    case "categories":
      this.props.dispatch(CategotryModalNewisVisble(true))
    case "locations":
      this.props.dispatch(LocationModalNewisVisble(true))
  }

  }
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'categories'}}
        renderScene={this.renderScene}
        configureScene={() => {return Navigator.SceneConfigs.FloatFromRight}}
        navigationBar={
     <Navigator.NavigationBar
       style={[styles.container, styles.navBar]}
       routeMapper={{
         LeftButton: (route, navigator, index, navState) => {
           if (route.index === 0) {
             return null;
           }
           return (
             <View style={styles.back}>
               <TouchableOpacity onPress={() => navigator.pop()}>
                <View>
                  <BackButton />
                 </View>
               </TouchableOpacity>
             </View>
          );},
         RightButton: (route, navigator, index, navState) =>
           { return (
             <View style={styles.back}>
               <TouchableOpacity onPress={() => this.setDispatcher(route.name)}>
                <View>
                  <AddButton />
                 </View>
               </TouchableOpacity>
             </View>

           );},
         Title: (route, navigator, index, navState) =>
           { return (
             
              <HeaderTitle name={route.name} />

           );},
       }}
     />
  }
        />
    )
  }
}

const styles = StyleSheet.create({
  back: {
    margin: 12
  },
  container: {
    flex: 1,
  },
  navBar: {
    backgroundColor: 'grey',
  }
})

function mapStateToProps(state) {
  return {
    categories: state.categories.categories,
    categoryModalNewVisible: state.categories.categoryModalNewVisible,
  };
}

export default connect(mapStateToProps)(App);
