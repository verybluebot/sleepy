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
import HeaderTitle from './small_components/header_title';
import BackButton from './small_components/back_button';
import AddButton from './small_components/add_button';
import CategoryModalNew from './containers/container_category_modal_new';
import { addCategory, CategotryModalNewisVisble } from './actions/action_categories';


const routes = {
  categories: Categories,
  modal: CategoryModalNew
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}
  }

  renderScene(route, navigator) {
    let Comp = routes[route.name];
    return <Comp navigator={navigator} route={route} />
  }
  addCategory() {
    this.props.dispatch(CategotryModalNewisVisble(true))
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
               <TouchableOpacity onPress={() => this.addCategory()}>
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
