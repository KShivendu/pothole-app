import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './components/Main';
import Signin from './components/Signin';
import firebase from 'react-native-firebase';

const Stack = createStackNavigator();

export default class App extends Component {
	state={isusersignedin:false}
	componentDidMount()
	{
	
		this.setState( (state)=>{ {loggedin:isusersignedin()} });
	}

	userloggedin()
	{
		this.setState( (state)=>{ {loggedin:isusersignedin()} });
	}
	render() {
		if (this.state.loggedin==true) return <Main />;
		else {
			return <Signin callback={this.userloggedin} />;
		}
	}
}

const styles = StyleSheet.create({
	fab: {
		position: 'absolute',
		margin: 16,
		alignSelf: 'center',
		backgroundColor: 'red',
		bottom: 0,
	},
});

function isusersignedin() {
	var user=firebase.auth().currentUser;
	if(user)
	{
		return true;
	}
	else{
		return false;
	}
	
}
//export default App;
