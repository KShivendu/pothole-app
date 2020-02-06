import React, { Component } from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import Signin from './components/Signin';
import auth from './fbinit';

export default class App extends Component {
	render() {

		if (isusersignedin()) {
			return <Text>Handle it</Text>
		}
		else {
			return (<Signin />);
		}

	}
}

function isusersignedin() {
	var user = auth.currentUser;

	if (user) {
		return true;
	} else {
		return false;
	}
}