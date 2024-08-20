import {SafeAreaView, Text, Platform, StatusBar} from 'react-native';    
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllPizza from './AllPizza';
import MixedPizza from './MixedPizza';
import TraditionPizza from './TraditionPizza';
import Unique from './Unique';
import SeaPizza from './SeaPizza';
import SpecialRec from './SpecialRec';

const Tab = createMaterialTopTabNavigator();
const Pizza = () => {
    return (
        <SafeAreaView style = {{flex : 1, backgroundColor : 'lightgray'}}>
            <Tab.Navigator screenOptions={{tabBarGap : 10, tabBarScrollEnabled : true}}>
                <Tab.Screen name = "Tất Cả" component={AllPizza}/>
                <Tab.Screen name = "Menu Chất" component={Unique}/>
                <Tab.Screen name = "Hải Sản Cao Cấp" component={SeaPizza}/>
                <Tab.Screen name = "Thập Cẩm Cao Cấp" component={MixedPizza}/>
                <Tab.Screen name = "Truyền Thống" component={TraditionPizza}/>
                <Tab.Screen name = "Công Thức Đặc Biệt" component={SpecialRec}/>
            </Tab.Navigator>
        </SafeAreaView>
    );
}

export default Pizza;