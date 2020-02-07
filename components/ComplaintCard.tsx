import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Colors, Title, Avatar, Button, Paragraph } from 'react-native-paper';

{
	/*usage <ComplaintCard category="Pothole" imageURI="https://picsum.photos/700" lat="100" lon="-80" date="10/1/20" />; */
}

export default function LabeledIconButton(props:any) {
	props=props.data;
	console.log(props.img_url);
	return (
		<Card style={{ margin: 10 }}>
			<Card.Cover source={{ uri: props.img_url }} />
			<Card.Content>
				<Title>{props.complaint_category}</Title>
				<Paragraph>Coordinates: {`${props.complaint_latitude}, ${props.complaint_longitude}`}</Paragraph>
				<Paragraph>Date: {props.registration_time}</Paragraph>
			</Card.Content>
			<Card.Actions style={{ justifyContent: 'flex-end' }}>
				<Button onPress={() => {}}>Navigate</Button>
			</Card.Actions>
		</Card>
	);
}

const styles = StyleSheet.create({
	view: {
		alignItems: 'center',
		alignSelf: 'flex-start',
		padding: 20,
	},
});
