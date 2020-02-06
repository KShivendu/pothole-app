import React, { Component } from 'react';
import { SafeAreaView, Text, StatusBar, StyleSheet } from 'react-native';
import { Appbar, FAB } from 'react-native-paper';

export default class Main extends Component{

	render()
	{
	return (
		<>
			<StatusBar barStyle="light-content" />
			<Appbar>
				<Appbar.Action icon="archive" onPress={() => console.log('Pressed archive')} />
				<Appbar.Action icon="email" onPress={() => console.log('Pressed mail')} />
				<Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
				<Appbar.Action icon="delete" onPress={() => console.log('Pressed delete')} />
			</Appbar>
			<SafeAreaView>
				<Text>App works!</Text>
			</SafeAreaView>
			<FAB style={styles.fab} label="New" icon="plus" onPress={() => console.log('Pressed plus')} />
		</>
	}
	);
};

const styles = StyleSheet.create({
	fab: {
		position: 'absolute',
		margin: 16,
		alignSelf: 'center',
		backgroundColor: 'red',
		bottom: 0,
	},
});