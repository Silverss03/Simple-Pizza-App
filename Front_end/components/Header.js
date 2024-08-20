import {Image, View, Text, TouchableOpacity} from 'react-native';
import ScreenMenuBtn from './ScreenMenuBtn';
import { StyleSheet } from 'react-native';
const Header = ({logoURL, cartURL, menuURL}) => {
    return (
        <View style = {styles.header}>
            
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header:{
        height : 90, 
        flexDirection : 'row' , 
        justifyContent: 'space-between',
        backgroundColor : '#006a31',
        alignItems : 'center',
        paddingHorizontal : 16
    }
})