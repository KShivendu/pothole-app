import React, { Component } from 'react';
import { RNCamera } from 'react-native-camera';

export default class Camera extends Component {
	camera: RNCamera | null = null;

	render() {
		return (
			<RNCamera
				ref={ref => {
					this.camera = ref;
				}}
				style={{
					flex: 1,
					width: '100%',
				}}
			></RNCamera>
		);
	}
}
