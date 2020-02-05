import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';

const App = () => {
	return (
		<>
			<StatusBar barStyle="light-content" />
			<SafeAreaView>
				<Text>App works!</Text>
			</SafeAreaView>
		</>
	);
};

export default App;
