import React, {Component} from 'react';
import {
	SafeAreaView,
	Text,
	StatusBar,
	StyleSheet,
	View,
	PanResponder,
	ScrollView
} from 'react-native';
import {Appbar, FAB, Card} from 'react-native-paper';
import {NavigationProp} from '@react-navigation/native';
import {RNCamera} from 'react-native-camera';
import {Provider as PaperProvider, Button} from 'react-native-paper';
import RNLocation from 'react-native-location';
import ComplaintCard from './ComplaintCard';
import fetch from 'cross-fetch';

const url="http://10.3.57.255:5000/get-complaints"
export default class Mycomp extends Component {
	state: any;
	constructor(props) {
		super(props);
		this.state = {
			isloaded: false,

		};
	}

	componentDidMount() {
		fetch(url)
			.then(response => {
				//console.log(response.json());
				return response.json();
			})
			.then(myJson => {
				//console.log(myJson);
				if(myJson[0].status==1)
				{
				
					const datas=myJson.slice(1);
					console.log(datas);
					const renderdata=datas.map((data:any)=> <ComplaintCard key={data.complaint_id} data={data}>{data.complain_category}</ComplaintCard> );
					//console.log(renderdata);
					this.setState({cards:renderdata,isloaded:true});
				}
			});
	}
	

	render() {
		if (this.state.isloaded) {


		return( <ScrollView>{this.state.cards}</ScrollView>);

		} else {
			return <Button loading={true}> </Button>;
		}
	}
}
