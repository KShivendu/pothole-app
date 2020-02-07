import React, { Component } from 'react';
import { Image, StyleSheet, KeyboardAvoidingView, Dimensions } from 'react-native';
import { List, TextInput, FAB, Snackbar } from 'react-native-paper';

interface StateType {
	selectedCategory: string;
	landmark: string;
	fabTop: number;
	lev:number
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
			lev:0
		};
	}

	submitForm = () => {
		this.setState({lev:1});
		let location: any = this.props.route.params.location;
		let landmark = this.state.landmark;

		location = location.split(', ');

		fetch('http://10.3.7.86:5500/post-complaints', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				category: 'potholes',
				latitude: location[0],
				longitude: location[1],
				landmark: landmark,
				image_name: 'image.png',
				base64img: this.props.route.params.imageString,
			}),
		})
			.then(res => res.text())
			.then(res => {
				// console.log()
				if (JSON.parse(res)['status'] === 1) {
					this.setState({lev:2,status:"Submitted Succesfully"});
					console.log('Successfully Added !!!');
				} else if(JSON.parse(res)['status'] === -1) {
					this.setState({lev:2,status:"Spam detected(Not on Road)"})
					console.log('Something went wrong !!!');
				}
				else{
					this.setState({lev:2,status:"Error Occured"})
				}
			});
	};

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
					loading={(this.state.lev==1)?true:false}
					onPress={this.submitForm}
				/>
				<Snackbar visible={(this.state.lev==2)?true:false} onDismiss={()=>this.setState({lev:0})}>{this.state.status}</Snackbar>
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
