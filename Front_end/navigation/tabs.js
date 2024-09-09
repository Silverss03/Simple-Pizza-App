import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Prefentials from '../screens/Prefential';
import Menu from '../screens/Menu';
import Cart from '../screens/Cart';
import Account from '../screens/Account';
import Login from '../screens/Login'
import Register from '../screens/Register'

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
	<Tab.Navigator screenOptions={{headerShown : false}}>
		<Tab.Screen name = "Trang Chủ" component={Home} />
		<Tab.Screen name = "Thực Đơn" component={Menu}/>
		<Tab.Screen name = "Khuyến Mãi" component={Prefentials} />
		<Tab.Screen name = "Đơn Hàng" component={Cart} />
		<Tab.Screen name = "Tài Khoản" component={Account} />
		<Tab.Screen name = "Login" component={Login} options={{ tabBarButton: () => null }}/>
		<Tab.Screen name = "Register" component={Register} options={{ tabBarButton: () => null }}/>
	</Tab.Navigator>
	);
}

export default Tabs;