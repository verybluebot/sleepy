import React,  { Component } from 'react';
import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Text
} from 'react-native';

const HeaderTitle = (props) => {
  return (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>{props.name.toUpperCase()}</Text>
    </View>
  )
};

const styles = StyleSheet.create({

    header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "grey",
      flexDirection: 'row'
    },
    headerTitle: {
        color: 'white',
        fontFamily: 'Dosis',
        fontSize: 20
    },
    headerIcon: {
        width: 22,
        height: 16
    }
})

export default HeaderTitle;
