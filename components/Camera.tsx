import React, {Component} from 'react';
import {SafeAreaView, Text, StatusBar, StyleSheet} from 'react-native';
import {Appbar, FAB} from 'react-native-paper';
import {NavigationProp} from '@react-navigation/native';
import {RNCamera} from 'react-native-camera';

export default class Camera extends Component{

    render()
    {
        return(<RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={{
          flex: 1,
          width: '100%',
        }}>
        
      </RNCamera>);
    }
}