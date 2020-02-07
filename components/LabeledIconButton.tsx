import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';

export default function LabeledIconButton({ label, icon }) {
	return (
		<View style={styles.view}>
			<IconButton
				icon={icon}
				color={Colors.white}
				size={40}
				style={{ backgroundColor: Colors.teal600 }}
				onPress={() => console.log('Pressed')}
			/>
			<Text>{label}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	view: {
		alignItems: 'center',
		alignSelf: 'flex-start',
		padding: 20,
	},
});
