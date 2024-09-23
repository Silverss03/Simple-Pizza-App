import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Prefentials from '../screens/Prefential';
import Menu from '../screens/Menu';
import Cart from '../screens/Cart';
import Account from '../screens/Account';
import Login from '../screens/Login'
import Register from '../screens/Register'
import { House, Pizza, TicketPercent, ShoppingCart, CircleUser } from 'lucide-react-native';
import { AuthContext } from '../components/AuthContext';

const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
	<Tab.Navigator screenOptions={{headerShown : false}}>
		<Tab.Screen 
			name = "Trang Chủ" 
			component={Home} 
			options={{
			tabBarIcon: ({ color, size }) => (
				<House color={color} size={size}/>
			),
			}}  />
		<Tab.Screen 
			name = "Thực Đơn" 
			component={Menu}
			options={{
				tabBarIcon: ({ color, size }) => (
					<Pizza color={color} size={size}/>
			),
			}}  />
		<Tab.Screen 
			name = "Khuyến Mãi" 
			component={Prefentials} 
			options={{
				tabBarIcon: ({ color, size }) => (
					<TicketPercent color={color} size={size}/>
			),
			}}  />
		<Tab.Screen 
			name = "Đơn Hàng" 
			component={Cart} 
			options={{
				tabBarIcon: ({ color, size }) => (
					<ShoppingCart color={color} size={size}/>
			),
			}} />
		<Tab.Screen 
			name = "Tài Khoản" 
			component={Account}
			options={{
				tabBarIcon: ({ color, size }) => (
					<CircleUser color={color} size={size}/>
			),
			}}  />
		<Tab.Screen name = "Đăng nhập" component={Login} options={{ tabBarButton: () => null }}/>
		<Tab.Screen name = "Đăng ký" component={Register} options={{ tabBarButton: () => null }}/>
	</Tab.Navigator>
	);
}

export default Tabs;