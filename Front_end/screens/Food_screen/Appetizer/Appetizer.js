import {SafeAreaView, Text, Platform, StatusBar} from 'react-native';    
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'; 
import Chicken from './Chicken';
import Bread from './Bread';
import Fries from './Fries';
const Tab = createMaterialTopTabNavigator();
const Appetizer= () => {
    return (
        <SafeAreaView style = {{flex : 1, backgroundColor : 'lightgray'}}>
            <Tab.Navigator screenOptions={{tabBarGap : 10, tabBarScrollEnabled : true}}>
                <Tab.Screen name = "Cánh Gà" component={Chicken}/>
                <Tab.Screen name = "Bánh Mì" component={Bread}/>
                <Tab.Screen name = "Khoai Tây" component={Fries}/>
            </Tab.Navigator>
        </SafeAreaView>
    );
}

export default Appetizer;