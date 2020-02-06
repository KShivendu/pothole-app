import React, { Component } from 'react';
import { View, Text,Alert} from 'react-native';
import {Provider as PaperProvider,Button,TextInput} from 'react-native-paper';
export default class Signin extends Component {
    render() {
        return (
            <PaperProvider>
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 2}}>
                <Text style={{ fontSize: 26,margin:25,textAlign:"center" }}>Enter your phone number to get Started</Text>
                <TextInput label="Mobile No."  mode="outlined" style={{margin:20}}></TextInput>
                <View style={{width:150,alignSelf:"center"}}>
               <Button mode="contained" onPress={() => Alert.alert('Simple Button pressed')}>Get Started</Button></View>
                  </View>
            <View style={{ flex: 1 }}></View>
        </View>
        </PaperProvider>);
    }
}