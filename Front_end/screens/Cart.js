import {SafeAreaView, View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import SafeAreaViewAndroid from '../components/SafeAreaViewAndroid.js';
import { Search } from 'lucide-react-native';

const Cart = ({isLoggedIn}) => {
    return (
        <SafeAreaView style = {[styles.container, SafeAreaViewAndroid.AndroidSafeArea]}>
            <View style = {styles.header}>
                <Text style = {{fontSize : 20, fontWeight : 'bold'}}>Theo dõi đơn hàng</Text>
            </View>
            <View style = {styles.checkCart}>
                <View style = {{marginVertical : 12}}>
                    <Text style = {{fontSize : 16}}>Kiểm Tra Đơn Hàng Của Bạn</Text>
                </View>
                <View style = {{flexDirection : 'row'}}>
                    <TextInput style = {styles.textInput} placeholder = "Nhập số điện thoại"></TextInput>
                    <TouchableOpacity style = {styles.touchable}>
                        <Search size = {30} color={"white"}/>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        height : 60,
        justifyContent : 'center',
        alignItems : 'center',
        borderBottomWidth : 1,
        borderBottomColor : 'black'
    },
    checkCart :{
        flex: 1,
        alignItems: 'center',
    },
    textInput :{
        width : '70%', 
        height : 45, 
        borderColor : 'gray', 
        borderWidth : 1, 
        padding : 10
    },
    touchable:{
        height : 45, 
        width : 60, 
        backgroundColor : '#3c8d61',
        alignItems : 'center',
        justifyContent : 'center'
    },
    icon:{
        color: 'white', 
        width : '50%', 
        height : '55%'
    }
});
export default Cart;