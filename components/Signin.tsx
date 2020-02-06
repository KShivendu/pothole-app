import React, { Component } from 'react';
import { View, Text, Button,TextInput,Alert} from 'react-native';

export default class Signin extends Component {
    render() {
        return (<View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 1}}>
                <Text style={{ fontSize: 25,margin:25,textAlign:"center" }}>Enter your phone number to get Started</Text>
                <TextInput></TextInput>
                <View style={{width:150,alignSelf:"center"}}>
                <Button title="Get Started"  onPress={() => Alert.alert('Simple Button pressed')}/></View>
                  </View>
            <View style={{ flex: 1 }}></View>
        </View>);
    }
}