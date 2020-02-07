import React, { Component } from 'react';
import { Image, View, StyleSheet, KeyboardAvoidingView, Dimensions } from 'react-native';
import { List, TextInput, FAB } from 'react-native-paper';

interface StateType {
	selectedCategory: string;
	landmark: string;
	fabTop: number;
}

let screenHeight: number;

export default class Camera extends Component {
	props!: any;
	state: StateType;

	constructor(props: any) {
		super(props);
		screenHeight = Math.round(Dimensions.get('window').height);
		this.state = {
			selectedCategory: props.route.params.category,
			landmark: '',
			fabTop: screenHeight - 120,
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
							uri: 'data:image/png;base64,' + this.props.route.params.imageString,
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
						defaultValue={this.props.route.params.location}
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

				<FAB
					style={{ ...styles.fab, top: this.state.fabTop }}
					label="Send"
					icon="send"
					onPress={() => {}}
				/>
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
	},
});
