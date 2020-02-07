import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';
import { FAB, Appbar, Colors } from 'react-native-paper';
import { NavigationProp } from '@react-navigation/native';
import LabeledIconButton from './LabeledIconButton';

export default class Main extends Component {
	navigation: NavigationProp<any>;

	constructor(props: any) {
		super(props);
		console.log('nav', props.navigation);

		this.navigation = props.navigation;
		console.log(props.user);
	}

	render() {
		return (
			<>
				<SafeAreaView>
					<Appbar>
						<Text style={{ ...styles.appBarText, flex: 1 }}>City Rank: 1000</Text>
						<Text style={styles.appBarText}>Points: 30</Text>
					</Appbar>
					<Image style={styles.imageStyle} source={require('../images/pothole.jpg')} />
					<View style={styles.iconContainer}>
						<LabeledIconButton label="My Complaints" icon="view-list" />
						<LabeledIconButton label="Statistics" icon="chart-line-variant" />
						<LabeledIconButton label="Redeem" icon="bank-transfer-out" />
						<LabeledIconButton label="Heatmap" icon="map" />
						<LabeledIconButton label="Invite" icon="account-multiple-plus" />
					</View>
				</SafeAreaView>
				<FAB
					style={styles.fab}
					label="New"
					icon="plus"
					onPress={() => this.navigation.navigate('Camera')}
				/>
			</>
		);
	}
}

const styles = StyleSheet.create({
	fab: {
		position: 'absolute',
		margin: 16,
		alignSelf: 'center',
		backgroundColor: '#6200ee',
		bottom: 0,
	},
	iconContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	appBarText: {
		color: Colors.white,
		fontSize: 18,
		padding: 4,
	},
	imageStyle: {
		width: '100%',
	},
});

const sendImage = () => {
	var url = 'http://192.168.43.90:5000/cross'; // File upload web service path

	var request = new XMLHttpRequest();
	request.setRequestHeader('Content-type', 'multipart/form-data');
	request.onreadystatechange = e => {
		if (request.readyState !== 4) {
			return;
		}

		if (request.status === 200) {
			console.log('success', request.responseText);
		} else {
			console.warn('error');
		}
	};

	request.open('GET', url);
	request.send();

	var photo = {
		uri: this.state.picturePath, // CameralRoll Url
		type: 'image/jpeg',
		name: 'photo.jpg',
	};

	var formData = new FormData();
	formData.append('file', photo);

	var xhr = new XMLHttpRequest();
	xhr.open('POST', url);
	console.log('OPENED', xhr.status);

	xhr.onprogress = function() {
		console.log('Sending', xhr.status);
	};

	xhr.onload = function() {
		console.log('DONE', xhr.status);
	};

	xhr.setRequestHeader('authorization', this.state.token);
	xhr.send(formData);

	// request.open('GET', 'http://10.3.7.86:5000/cross/');

	// return fetch('http://10.3.7.86:5000/cross/')
	// 	.then(response => response.json())
	// 	.then(responseJson => {
	// 		console.log(responseJson);
	// 	})
	// 	.catch(error => {
	// 		console.error(error);
	// 	});
};
