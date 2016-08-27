import React,  { Component } from 'react';
import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableWithoutFeedback>
          {/* // onPress={this.props.callback}> */}
          <View>
              <Image
                  style={styles.headerIcon} />
                  {/* // source={require('./img/back.png')} /> */}
          </View>
      </TouchableWithoutFeedback>
      <View style={styles.headerTitleWrapper}><Text style={styles.headerTitle}>SLEEPY</Text></View>
    </View>
  )
};

const styles = StyleSheet.create({

    header: {
        height: 60,
        alignItems: 'center',
        backgroundColor: "grey",
        flexDirection: 'row'
    },

    headerTitleWrapper: {flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerTitle: {
        color: 'white',
        fontFamily: 'Dosis',
        fontSize: 15
    },

    headerIcon: {
        width: 22,
        height: 16
    }
})

export default Header;
