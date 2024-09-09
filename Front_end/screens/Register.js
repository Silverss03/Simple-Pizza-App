import {View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Button} from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { useState } from 'react';
import SafeAreaViewAndroid from '../components/SafeAreaViewAndroid';
import { EyeOff } from 'lucide-react-native';
import { Eye } from 'lucide-react-native';
import { Asterisk } from 'lucide-react-native';

const Register = ({route, navigation}) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
        <SafeAreaView style = {SafeAreaViewAndroid.AndroidSafeArea}>
            <View style = {styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Tài Khoản')}>
                    <ArrowLeft color = "white" size = {45}/>
                </TouchableOpacity>
                <Text style = {styles.headerText}>Đăng ký</Text>
            </View>

            <View style = {styles.login}>
                <View style = {styles.labelContainer}>
                    <Text style = {styles.textLabel}>Số điện thoại của bạn</Text>
                    <Asterisk size = {15} color = "red"/>
                </View>
                <TextInput style = {styles.textInput} placeholder='Nhập Số Điện Thoại Của Bạn'></TextInput>

                <View style = {styles.labelContainer}>
                    <Text style = {styles.textLabel}>Họ</Text>
                    <Asterisk size = {15} color = "red"/>
                </View>
                <TextInput style = {styles.textInput} placeholder='Nhập họ của bạn'></TextInput>

                <View style = {styles.labelContainer}>
                    <Text style = {styles.textLabel}>Tên</Text>
                    <Asterisk size = {15} color = "red"/>
                </View>
                <TextInput style = {styles.textInput} placeholder='Nhập tên của bạn'></TextInput>

                <View style = {styles.labelContainer}>
                    <Text style = {styles.textLabel}>Email</Text>
                    <Asterisk size = {15} color = "red"/>
                </View>
                <TextInput style = {styles.textInput} placeholder='Nhập Email của bạn'></TextInput>

                <View style = {styles.labelContainer}>
                    <Text style = {styles.textLabel}>Mật khẩu</Text>
                    <Asterisk size = {15} color = "red"/>
                </View>
                <View style = {{flexDirection : 'row', alignItems : 'center'}}>
                   <TextInput style = {styles.textInput} placeholder='Nhập Mật Khẩu Của Bạn' secureTextEntry={!passwordVisible}></TextInput>
                    <TouchableOpacity style = {{marginLeft : 10}}>
                        {passwordVisible ? <Eye size = {30} color = "black" onPress = {() => setPasswordVisible(false)}/> : <EyeOff size = {30} color = "black" onPress = {() => setPasswordVisible(true)}/>}
                    </TouchableOpacity>
                </View>
                <Text style = {styles.PassRequireText}>Mật khẩu cần ít nhất 6 ký tự, bao gồm số,chữ hoa, chữ thường và ký tự đặc biệt</Text>
                
                <View style = {styles.labelContainer}>
                    <Text style = {styles.textLabel}>Xác nhận mật khẩu</Text>
                    <Asterisk size = {15} color = "red"/>
                </View>
                <View style = {{flexDirection : 'row', alignItems : 'center'}}>
                   <TextInput style = {styles.textInput} placeholder='Nhập Mật Khẩu Của Bạn' secureTextEntry={!passwordVisible}></TextInput>
                    <TouchableOpacity style = {{marginLeft : 10}}>
                        {passwordVisible ? <Eye size = {30} color = "black" onPress = {() => setPasswordVisible(false)}/> : <EyeOff size = {30} color = "black" onPress = {() => setPasswordVisible(true)}/>}
                    </TouchableOpacity>
                </View>
                <View style = {{marginTop : 20}}>
                    <Button title = "Đăng Ký" color = "green" ></Button>
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
    PassRequireText : {
        width : '90%', 
        marginVertical : 8,
        fontSize : 16,
        fontWeight : 'bold',
        color : 'red'
    },
    labelContainer:{
        flexDirection : 'row', 
    }
})
export default Register;