import React, {Component} from 'react';
import {SafeAreaView, Text, StatusBar, StyleSheet, View} from 'react-native';
import {Appbar, FAB} from 'react-native-paper';
import {NavigationProp} from '@react-navigation/native';
import {RNCamera} from 'react-native-camera';
import {Provider as PaperProvider, Button} from 'react-native-paper';
import RNLocation from 'react-native-location';
import {Image} from 'react-native-paper/lib/typescript/src/components/Avatar/Avatar';

export default class Camera extends Component {
	data = {};
	loc = {};
	state: any;
	constructor(props: any) {
		super(props);
		this.state = {lev: 0};
	}
	sendtoserver(location, data) {
		//
	}

	async clickphoto() {
		if (this.camera) {
			this.data = await this.camera.takePictureAsync({base64: true});
			this.setState({lev: 1});
			// console.log('base64: ', data.base64);
			this.findCoordinates();
			//this.state={transition:false}
			//this.props.action.sendImageToServer(data.base64);
		}
	}
	findCoordinates = () => {
		RNLocation.requestPermission({
			ios: 'whenInUse',
			android: {
				detail: 'coarse',
			},
		}).then(granted => {
			if (granted) {
				this.locationSubscription = RNLocation.subscribeToLocationUpdates(
					locations => {
						console.log(locations);
						if (this.data) {
							//console.log(this.data);
							this.sendtoserver(locations, this.data);
						}

						/* Example location returned
                  {
                    speed: -1,
                    longitude: -0.1337,
                    latitude: 51.50998,
                    accuracy: 5,
                    heading: -1,
                    altitude: 0,
                    altitudeAccuracy: -1
                    floor: 0
                    timestamp: 1446007304457.029,
                    fromMockProvider: false
                  }
                  */
					},
				);
			}
		});
	};
	render() {
		if (this.state.lev == 0) {
			return (
				<PaperProvider>
					<RNCamera
						ref={ref => {
							this.camera = ref;
						}}
						style={{
							flex: 1,
							width: '100%',
						}}>
						<FAB
							style={styles.fab}
							icon="camera"
							onPress={() => {
								this.clickphoto();
							}}
						/>
					</RNCamera>
				</PaperProvider>
			);
		} else {
			return (
				<Button
					loading={true}
					style={{flex: 1, justifyContent: 'center', height: 60}}>
					{' '}
				</Button>
			);
		}
	}
}

const styles = StyleSheet.create({
	fab: {
		position: 'absolute',
		margin: 16,
		alignSelf: 'center',
		bottom: 0,
	},
});
