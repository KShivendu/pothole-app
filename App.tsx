import React, { Component } from 'react';
import { SafeAreaView, Text, StatusBar, StyleSheet } from 'react-native';
import { Appbar, FAB } from 'react-native-paper';
import Main from './components/Main';
import Signin from './components/Signin';

export default class App extends Component {
	render() {
		if (isusersignedin()) return <Main />;
		else {
			return <Signin />;
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
	return false;
}
//export default App;
