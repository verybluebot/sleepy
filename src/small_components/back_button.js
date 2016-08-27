import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './icon_styles';

const BackButton = () => {
  return(
      <Icon
          style={styles.catIcons}
          name="chevron-left"
           />
  )
}

export default BackButton;
