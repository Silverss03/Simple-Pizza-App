import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './store/store' ;

// axios.defaults.baseURL = 'http://10.0.2.2:3000/api' ;
axios.defaults.baseURL = 'http://172.16.10.49:3000/api';

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Tabs />
			</NavigationContainer>	
		</Provider>
	);
}

