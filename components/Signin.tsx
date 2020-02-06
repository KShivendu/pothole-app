import React, {Component} from 'react';
import {View, Text, Alert} from 'react-native';
import {Provider as PaperProvider, Button, TextInput} from 'react-native-paper';
import firebase from 'react-native-firebase';
export default class Signin extends Component {
	state = {input: '', err: '', lev: 0};

	constructor(props) {
		super(props);
		this.state = {input: '', err: '', lev: 0};
		self = this;
	}
	callback = this.props.callback;
	result = {};

	login() {
		console.log(this.state);
		console.log(self.state);
		if (!self.state.input) {
			self.setState({err: 'Please Enter your phone number'});
			return;
        }
        console.log('+91'+self.state.input);
		firebase
			.auth()
			.signInWithPhoneNumber('+91'+self.state.input)
			.then(confirmResult => {
				self.setState({lev: 1, input: ''});
				self.result = confirmResult;
			}) // save confirm result to use with the manual verification code)
			.catch(error => {
				self.setState({err: error});
			});
	}
	confirmotp() {
		self.result
			.confirm(self.state.input)
			.then(user => {
				self.callback;
			})
			.catch(error => {});
	}
	render() {
		if (this.state.lev == 0) {
			return (
				<PaperProvider>
					<View style={{flex: 1}}>
						<View style={{flex: 1}}></View>
						<View style={{flex: 2}}>
							<Text style={{fontSize: 26, margin: 25, textAlign: 'center'}}>
								Enter your phone number to get Started
							</Text>
							<TextInput
								label="Mobile No."
								mode="outlined"
								textContentType="telephoneNumber"
								style={{margin: 20}}
								value={this.state.input}
								onChangeText={inp => {
									console.log(this.state);
									this.setState({input: inp});
								}}></TextInput>
							<View style={{width: 150, alignSelf: 'center'}}>
								<Button mode="contained" onPress={this.login}>
									Get Started
								</Button>
							</View>
							<Text>{this.state.err}</Text>
						</View>
						<View style={{flex: 1}}></View>
					</View>
				</PaperProvider>
			);
		} else {
			return (
				<PaperProvider>
					<View style={{flex: 1}}>
						<View style={{flex: 1}}></View>
						<View style={{flex: 2}}>
							<Text style={{fontSize: 26, margin: 25, textAlign: 'center'}}>
								Enter OTP
							</Text>
							<TextInput
								label="OTP"
								mode="outlined"
								textContentType="oneTimeCode"
								maxLength={6}
								style={{margin: 50}}
								value={this.state.input}
								onChangeText={inp => {
									console.log(this.state);
									this.setState({input: inp});
								}}></TextInput>
							<View style={{width: 150, alignSelf: 'center'}}>
								<Button mode="contained" onPress={this.confirmotp}>
									Confirm
								</Button>
							</View>
							<Text>{this.state.err}</Text>
						</View>
						<View style={{flex: 1}}></View>
					</View>
				</PaperProvider>
			);
		}
	}
}
