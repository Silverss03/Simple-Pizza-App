import {View, Text, SafeAreaView, ImageBackground, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import SafeAreaViewAndroid from '../components/SafeAreaViewAndroid.js';
import {PhoneCall} from 'lucide-react-native'
import { Globe } from 'lucide-react-native';
import { Smartphone } from 'lucide-react-native';

const Account = ({route, navigation}) => {
    return (
        <SafeAreaView style = {SafeAreaViewAndroid.AndroidSafeArea}>
            <View style = {styles.container}>
                <ScrollView stickyHeaderIndices={[0]}>
                    <View style = {{height : 50, borderBottomWidth :  0.4, backgroundColor: 'white'}}>
                        <Text style = {{fontSize : 20, fontWeight : 'bold', textAlign : 'center'}}>Tài Khoản</Text>
                    </View>
                    <View style = {styles.account}>
                        <ImageBackground source={require('../assets/icons/user_bg.png')} style = {{width:'100%', height:'85%'}} resizeMode='cover'>
                            <View style = {{flex: 1, flexDirection : 'column-reverse', alignItems : 'center'}}>
                                <Image source = {require('../assets/icons/empty_user.png')} style = {{height : '50%', width : 100, borderRadius : 20}}>
                                </Image>
                            </View>
                        </ImageBackground>
                        <View style = {styles.buttonContainer}> 
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                                <Text style={styles.buttonText}>Đăng Nhập</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
                                <Text style={styles.buttonText}>Đăng Ký</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.headerText}>Thông tin chung</Text>
                        <Text style={styles.infoText}>Danh sách cửa hàng</Text>
                        <Text style={styles.infoText}>Tin tức</Text>
                        <Text style={styles.infoText}>Chính sách</Text>
                    </View >
                    <View style = {{flex:1,backgroundColor:'white',marginTop:10}}>
                        <View style = {styles.footerInfo}>
                            <Image source={require('../assets/icons/pizza_logo.png')}>
                            </Image>
                        </View>
                        <View style = {styles.footerInfo}>
                            <Text style = {{fontSize: 16}}>
                                Công ty Cổ phần Pizza Ngon  77 Trần Nhân Tôn, Phường 9, Quận 5, Thành phố Hồ Chí Minh 
                            </Text>
                        </View>
                        <View style = {styles.footerInfo}>
                            <Text style = {{fontSize: 16}}>
                                Miễn phí giao hàng
                            </Text>
                            <View style = {{flexDirection:'row', marginTop : 10}}>
                                <PhoneCall size = {27} color= "black" style = {{marginHorizontal : 5}}/>
                                <Globe size = {27} color= "black" style = {{marginHorizontal : 5}}/>
                                <Smartphone size = {27} color= "black" style = {{marginHorizontal : 5}}/>
                            </View>
                        </View>
                        <View style = {styles.footerInfo}>
                            <Text style = {{fontSize: 16}}>
                                Tổng đài CSKH: 1900 633 606 (9:30 - 21:30)
                            </Text>
                        </View>
                        <View style = {styles.footerInfo}>
                            <Text style = {{fontSize: 16}}>
                                Kết nối với chúng tôi
                            </Text>
                                <View style = {{flexDirection:'row', marginTop : 10}}>
                                    <Image source={require('../assets/icons/facebook.png')} style ={{width:30,height:30, marginHorizontal :  10}}></Image>
                                    <Image source={require('../assets/icons/instagram.png')} style ={{width:30,height:30, marginHorizontal :  10}}></Image>
                                    <Image source={require('../assets/icons/tik-tok.png')} style ={{width:30,height:30, marginHorizontal :  10}}></Image>
                                    <Image source={require('../assets/icons/youtube.png')} style ={{width:30,height:30, marginHorizontal :  10}}></Image>
                                </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : 'lightgray'
    },
    account: {
        flex : 1,
        height : 250,
        width : '100%',
        backgroundColor : 'white',
        paddingBottom : 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },    
    button: {
        backgroundColor: '#3c8d61', 
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        paddingBottom: 5
    },
    buttonText: {
        color: 'white', 
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },    
    infoContainer: {
        padding: 10,
        backgroundColor: 'white',
        marginTop: 10
    },
    infoText: {
        color: 'black',
        fontSize: 18,
        marginVertical: 10,
    },
    headerText:{
        color: 'black',
        fontSize: 20,
        marginVertical: 5,
        fontWeight : 'bold'
    },
    footerInfo:{
        borderBottomWidth: 0.5,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }

});
export default Account;