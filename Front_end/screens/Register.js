import {View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Button} from 'react-native';
import { useState } from 'react';
import SafeAreaViewAndroid from '../components/SafeAreaViewAndroid';
import { EyeOff, Eye, Asterisk, ArrowLeft } from 'lucide-react-native';
import KeyboardAvoidWrapper from '../components/KeyboardAvoidWrapper';
import axios from 'axios';
import { Formik } from 'formik';
import * as yup from 'yup';

const Register = ({route, navigation}) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (values) => {
        try {
            console.log(values)
            const response = await axios.post('register', values);
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.error);
        }
    };

    const validationSchema = yup.object().shape({
        phoneNum: yup.string().required('Số điện thoại không được để trống').matches(/^[0-9]+$/, 'Số điện thoại không hợp lệ'),
        firstName: yup.string().required('Họ không được để trống'),
        name: yup.string().required('Tên không được để trống'),
        email: yup.string().required('Email không được để trống').email('Email không hợp lệ'),
        password: yup.string().required('Mật khẩu không được để trống').min(6, 'Mật khẩu phải có ít nhất 6 ký tự').matches(/[a-z]/, 'Phải có chữ thường').matches(/[A-Z]/, 'Phải có chữ hoa').matches(/[0-9]/, 'Phải có số').matches(/[!@#$%^&*(),.?":{}|<>]/, 'Phải có ký tự đặc biệt'),
        confirmPassword : yup.string().oneOf([yup.ref('password'), null], 'Mật khẩu không khớp')
    });

    return (
        <KeyboardAvoidWrapper>
            <SafeAreaView style = {SafeAreaViewAndroid.AndroidSafeArea}>
                <View style = {styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Tài Khoản')}>
                        <ArrowLeft color = "white" size = {45}/>
                    </TouchableOpacity>
                    <Text style = {styles.headerText}>Đăng ký</Text>
                </View>

                <Formik 
                initialValues={{phoneNum : '', firstName : '', name : '', email : '', password : ''}} 
                onSubmit = {handleSubmit}
                validationSchema={validationSchema}>
                    {({handleChange, handleBlur, handleSubmit, values, touched, errors, isSubmitting}) => (
                        <View style = {styles.login}>

                            <View style = {styles.labelContainer}>
                                <Text style = {styles.textLabel}>Số điện thoại</Text>
                                <Asterisk color='red' size={14}/>
                            </View>
                            <TextInput 
                                value = {values.phoneNum}
                                style = {styles.textInput}
                                onChangeText={handleChange('phoneNum')}
                                onBlur={handleBlur('phoneNum')}
                                placeholder='Nhập số điện thoại của bạn'>
                            </TextInput>
                            {touched.phoneNum && errors.phoneNum && <Text style = {{color : 'red'}}>{errors.phoneNum}</Text>}
                            
                            <View style = {styles.labelContainer}>
                                <Text style = {styles.textLabel}>Họ</Text>
                                <Asterisk color='red' size={14}/>
                            </View>
                            <TextInput
                                value = {values.firstName}
                                style = {styles.textInput}
                                onChangeText={handleChange('firstName')}
                                onBlur={handleBlur('firstName')}
                                placeholder='Nhập họ của bạn'>
                            </TextInput>
                            {touched.firstName && errors.firstName && <Text style = {{color : 'red'}}>{errors.firstName}</Text>}

                            <View style = {styles.labelContainer}>
                                <Text style = {styles.textLabel}>Tên</Text>
                                <Asterisk color='red' size={14}/>
                            </View>
                            <TextInput
                                value = {values.name}
                                style = {styles.textInput}
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                placeholder='Nhập tên của bạn'>
                            </TextInput>
                            {touched.name && errors.name && <Text style = {{color : 'red'}}>{errors.name}</Text>}

                            <View style = {styles.labelContainer}>
                                <Text style = {styles.textLabel}>Email</Text>
                                <Asterisk color='red' size={14}/>
                            </View>
                            <TextInput
                                value = {values.email}
                                style = {styles.textInput}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                placeholder='Nhập email của bạn'>
                            </TextInput>
                            {touched.email && errors.email && <Text style = {{color : 'red'}}>{errors.email}</Text>}
                            
                            <View style = {styles.labelContainer}>
                                <Text style = {styles.textLabel}>Mật khẩu</Text>
                                <Asterisk color='red' size={14}/>
                            </View>
                            <View style = {{flexDirection : 'row', alignItems : 'center'}}>
                                <TextInput
                                    value = {values.password}
                                    style = {styles.textInput}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    placeholder='Nhập mật khẩu của bạn'
                                    secureTextEntry={!passwordVisible}>
                                </TextInput>
                                <TouchableOpacity>
                                    {passwordVisible ? (
                                        <Eye size = {30} color = 'black' onPress = {() => setPasswordVisible(false)}/>) : (
                                        <EyeOff size = {30} color = 'black' onPress = {() => setPasswordVisible(true)}/>
                                    )}
                                </TouchableOpacity>
                            </View>
                            {touched.password && errors.password && <Text style = {{color : 'red', marginHorizontal : 8}}>{errors.password}</Text>}
                            <Text style = {styles.PassRequireText}>Mật khẩu phải có ít nhất 6 ký tự, 1 chữ hoa, 1 chữ thường, 1 số, 1 ký tự đặc biệt</Text>
                            <View style = {styles.labelContainer}>
                                <Text style = {styles.textLabel}>Nhập lại mật khẩu</Text>
                                <Asterisk color='red' size={14}/>
                            </View>
                            <View style = {{flexDirection : 'row', alignItems : 'center'}}>
                                <TextInput
                                    style = {styles.textInput}
                                    onChangeText={handleChange('confirmPassword')}
                                    onBlur={handleBlur('confirmPassword')}
                                    placeholder='Nhập lại mật khẩu của bạn'
                                    secureTextEntry={!passwordVisible}>
                                </TextInput>
                                <TouchableOpacity>
                                    {passwordVisible ? (
                                        <Eye size = {30} color = 'black' onPress = {() => setPasswordVisible(false)}/>) : (
                                        <EyeOff size = {30} color = 'black' onPress = {() => setPasswordVisible(true)}/>
                                    )}
                                </TouchableOpacity>
                            </View>
                            {touched.confirmPassword && errors.confirmPassword && <Text style = {{color : 'red'}}>{errors.confirmPassword}</Text>}
                            <View style = {{marginTop : 20}}>
                                <Button title = "Đăng Ký" onPress={handleSubmit} color = "green"></Button>
                            </View>
                        </View>

                    )}
                </Formik>
            </SafeAreaView>
        </KeyboardAvoidWrapper>
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
        padding : 20,
    },
    textInput :{
        width : '90%', 
        height : 45, 
        borderColor : 'gray', 
        borderWidth : 1, 
        padding : 10,
        marginRight : 8
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