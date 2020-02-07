import React, { Component } from 'react';
import { Image, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { List, TextInput, FAB } from 'react-native-paper';

interface PropType {
	category: string;
	location: string;
}

interface StateType {
	selectedCategory: string;
	landmark: string;
}

export default class Camera extends Component {
	props!: PropType;
	state: StateType;

	constructor(props: PropType) {
		super(props);
		this.state = {
			selectedCategory: props.category,
			landmark: '',
		};
	}

	setCategory(category: string) {
		this.setState(prevState => ({
			...prevState,
			selectedCategory: category,
		}));
	}

	inputController = (text: string) => {
		this.setState(prevState => ({
			...prevState,
			landmark: text,
		}));
	};

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
					<List.Section>
						<List.Accordion
							title={this.state.selectedCategory}
							left={() => <List.Icon icon="folder" />}
						>
							<List.Item
								onPress={() => {
									this.setCategory('Pothole');
								}}
								title="Pothole"
							/>
							<List.Item
								onPress={() => {
									this.setCategory('Street Light');
								}}
								title="Street Light"
							/>
						</List.Accordion>
					</List.Section>
					<TextInput
						mode="outlined"
						label="Location"
						defaultValue={this.props.location}
						style={styles.disabledInput}
						disabled
					/>
					<TextInput
						mode="outlined"
						defaultValue={this.state.landmark}
						onChangeText={this.inputController}
						label="Landmark"
						style={styles.disabledInput}
					/>
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
