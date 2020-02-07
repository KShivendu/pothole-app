import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import CameraScreen from './components/Camera';
import FormScreen from './components/FormScreen';
import MainScreen from './components/Main';
import { Provider as PaperProvider, DefaultTheme, Colors } from 'react-native-paper';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Main() {
	return (
		<PaperProvider>
			<NavigationContainer>
				<Stack.Navigator headerMode="none">
					<Stack.Screen name="Home" component={App} />
					<Stack.Screen name="Camera" component={CameraScreen} />
					<Stack.Screen name="Form" component={FormScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</PaperProvider>
	);
}

AppRegistry.registerComponent(appName, () => Main);
