import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Pizza from '../screens/Food_screen/Pizza/Pizza';
import Appetizer from '../screens/Food_screen/Appetizer/Appetizer';
import Drinks from '../screens/Food_screen/Drinks';
import GrillChill from '../screens/Food_screen/GrillChill';
import Salad from '../screens/Food_screen/Salad';
import Spaghetti from '../screens/Food_screen/Spaghetti';

const Tab = createMaterialTopTabNavigator();

function MenuTabs() {
  return (
    <Tab.Navigator >
      <Tab.Screen name = "Pizza" component={Pizza}/>
      <Tab.Screen name = "Mỳ ý" component={Spaghetti}/>
      <Tab.Screen name = "Khai vị" component={Appetizer}/>
      <Tab.Screen name = "Grill & Chill" component={GrillChill}/>
      <Tab.Screen name = "Salad" component={Salad}/>
      <Tab.Screen name = "Đồ uống" component={Drinks}/>
    </Tab.Navigator>
  );
}

export default MenuTabs; 