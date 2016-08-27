import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './icon_styles';

const AddButton = () => {
  return(
      <Icon
          style={styles.catIcons}
          name="plus"
           />
  )
}

export default AddButton;
