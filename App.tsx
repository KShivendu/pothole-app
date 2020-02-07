import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './components/Main';
import Signin from './components/Signin';
import firebase from 'react-native-firebase';
import Camera from './components/Camera';

export default class App extends Component {
	state = { isusersignedin: false };

	constructor(props: any) {
		super(props);
		this.userloggedin = this.userloggedin.bind(this);
		this.state = { isusersignedin: false };

		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				console.log(user);
				//this.callback();
			}
		});
	}

	componentDidMount() {
		this.setState(state => {
			{
				loggedin: isusersignedin();
			}
		});
	}
	//this.userloggedin.bind(this);
	userloggedin() {
		console.log('me called');
		console.log('dad');
		console.log(this.state);
		this.setState({ loggedin: isusersignedin() });
		console.log(this.state);
	}
	render() {/*
		if (this.state.loggedin == true) return <Main user={getuser()} />;
		else {
			return <Signin callback={this.userloggedin} />;
			
		}*/
		return(<Camera/>);
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
	var user = firebase.auth().currentUser;
	if (user) {
		return true;
	} else {
		return false;
	}
}
function getuser() {
	return firebase.auth().currentUser;
}
//export default App;
