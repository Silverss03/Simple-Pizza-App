import { NavigationContainer } from '@react-navigation/native';
import MenuTabs from '../navigation/menu_tabs';
import { SafeAreaView, Text } from 'react-native';
import SafeAreaViewAndroid from '../components/Common/SafeAreaViewAndroid';
const Menu = () => {
  return (
		<SafeAreaView style = {SafeAreaViewAndroid.AndroidSafeArea}>
			<MenuTabs />
		</SafeAreaView>
  );
}

export default Menu; 