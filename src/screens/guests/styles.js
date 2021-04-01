import {StyleSheet, View} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  buttoncontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#8d8d8d',
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderColor: '#676767',
    borderRadius: 15, // half of a height to make a circle
    justifyContent: 'center',
    alignItems: 'center', // to make any content (- or + sign) appear exactly at the center of circle
  },
  textstyle: {
    marginHorizontal: 20,
    fontSize: 16,
  },
});

export default styles;
