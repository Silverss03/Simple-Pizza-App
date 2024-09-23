import {View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Button} from 'react-native';
import { ArrowLeft, EyeOff, Eye } from 'lucide-react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import SafeAreaViewAndroid from '../components/SafeAreaViewAndroid';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = ({route, navigation}) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [phoneNum, setphoneNum] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const dispatch = useDispatch(); 

    const handleLogin = async () => {
        try {
            const response = await axios.post('login', { phoneNum, password });
            const token = response.data.token;
            const user = response.data.user;
            await AsyncStorage.setItem('token', token); // Save token/

            setMessage('Login successful');
            // Navigate to another screen upon success  
            dispatch(login(user));
            navigation.navigate('Trang Chủ');
        } catch (error) {
            setMessage(error.response.data.error);
        }
    };

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
                <TextInput style = {styles.textInput} onChangeText={setphoneNum} placeholder='Nhập Số Điện Thoại Của Bạn'></TextInput >
                <Text style = {styles.textLabel}>Mật khẩu</Text>
                <View style = {{flexDirection : 'row', alignItems : 'center'}}>
                   <TextInput style = {styles.textInput} onChangeText={setPassword} placeholder='Nhập Mật Khẩu Của Bạn' secureTextEntry={!passwordVisible}></TextInput>
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
                    <Button onPress={handleLogin} title = "Đăng Nhập" color = "green"></Button>
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