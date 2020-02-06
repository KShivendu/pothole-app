import React, { Component } from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import Signin from './components/Signin';
import auth from './fbinit';
import {Appbar} from 'react-native-paper';

export default class App extends Component {
	render() {
		/*return(
			<StatusBar barStyle="light-content" />
			<Appbar>
				<Appbar.Action icon="archive" onPress={() => console.log('Pressed archive')} />
				<Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
				<Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
				<Appbar.Action icon="delete" onPress={() => console.log('Pressed delete')} />
			</Appbar>
			<SafeAreaView></SafeAreaView>
		)*/

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
