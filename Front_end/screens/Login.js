import {View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Button} from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { useState } from 'react';
import SafeAreaViewAndroid from '../components/SafeAreaViewAndroid';
import { EyeOff } from 'lucide-react-native';
import { Eye } from 'lucide-react-native';

const Login = ({route, navigation}) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
        <SafeAreaView style = {SafeAreaViewAndroid.AndroidSafeArea}>
            <View style = {styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Tài Khoản')}>
                    <ArrowLeft color = "white" size = {45}/>
                </TouchableOpacity>
                <Text style = {styles.headerText}>Đăng nhập</Text>
            </View>
            <View style = {styles.login}>
                <Text style = {styles.textLabel}>Số điện thoại</Text>
                <TextInput style = {styles.textInput} placeholder='Nhập Số Điện Thoại Của Bạn'></TextInput>
                <Text style = {styles.textLabel}>Mật khẩu</Text>
                <View style = {{flexDirection : 'row', alignItems : 'center'}}>
                   <TextInput style = {styles.textInput} placeholder='Nhập Mật Khẩu Của Bạn' secureTextEntry={!passwordVisible}></TextInput>
                    <TouchableOpacity style = {{marginLeft : 10}}>
                        {passwordVisible ? <Eye size = {30} color = "black" onPress = {() => setPasswordVisible(false)}/> : <EyeOff size = {30} color = "black" onPress = {() => setPasswordVisible(true)}/>}
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity>
                        <Text style = {styles.forgotPassText}>Quên Mật Khẩu?</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Button title = "Đăng Nhập" color = "green"></Button>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header : {
        height : 60,
        borderBottomWidth : 0.4,
        backgroundColor: 'green',
        flexDirection : 'row',
        alignItems : 'center',
        paddingRight : 45
    },
    headerText:{
        textAlign: 'center',
        color: 'white',
        fontSize: 18, 
        flex : 1
    },
    login : {
        flex : 1,
        marginTop : 16,
        padding : 20
    },
    textInput :{
        width : '90%', 
        height : 45, 
        borderColor : 'gray', 
        borderWidth : 1, 
        padding : 10
    },
    textLabel :{
        marginVertical : 8,
        fontSize : 16
    },
    forgotPassText : {
        textAlign : 'right',
        marginVertical : 8,
        fontSize : 18,
        fontWeight : 'bold',
        color : 'red'
    }
})
export default Login;