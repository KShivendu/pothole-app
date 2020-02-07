import React, { Component } from 'react';
import { Image, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { List, TextInput, FAB } from 'react-native-paper';

export default class Camera extends Component {
	render() {
		return (
			<>
				<KeyboardAvoidingView behavior="position" enabled>
					<Image
						style={styles.image}
						source={{
							uri: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg',
						}}
					/>
					<List.Section title="Category">
						<List.Accordion
							title="<Detected Category Name>"
							left={props => <List.Icon {...props} icon="folder" />}
						>
							<List.Item onPress={() => {}} title="Pothole" />
							<List.Item onPress={() => {}} title="Street Light" />
						</List.Accordion>
					</List.Section>
					<TextInput mode="outlined" label="Location" style={styles.disabledInput} disabled />
					<TextInput mode="outlined" label="Landmark" style={styles.disabledInput} />
				</KeyboardAvoidingView>

				<FAB style={styles.fab} label="Send" icon="send" onPress={() => {}} />
			</>
		);
	}
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 170,
	},
	disabledInput: {
		margin: 10,
	},
	fab: {
		position: 'absolute',
		margin: 16,
		alignSelf: 'center',
		backgroundColor: '#6200ee',
		bottom: 0,
	},
});
