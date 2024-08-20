import {View, Text, SafeAreaView, FlatList, Image, TouchableOpacity} from 'react-native';
import SafeAreaViewAndroid from '../components/SafeAreaViewAndroid';
import { StyleSheet } from 'react-native';
const items = [
    {
        id : 1,
        img : require('../assets/Prefential_img/1.jpg'),
        name : "SÒ ĐIỆP TO VĨBE",
    },
    {
        id : 2,
        img : require('../assets/Prefential_img/2.jpg'),
        name : "MUA 1 TẶNG 1 VÀO THỨ 3 THỨ 4",
    },
    {
        id : 3,
        img : require('../assets/Prefential_img/3.jpg'),
        name : "TIẾT KIỆM 50% CHO PIZZA THỨ 2"
    }
]

const renderItem = ({item}) =>{
    return (
        <View style = {styles.container}>
            <TouchableOpacity>
                <Image 
                        source = {item.img} 
                        style = {{height : 210, 
                                width : 200, 
                                marginBottom : 4}}></Image>
                
                <Text>{item.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const Prefentials = () => {
    return (
        <SafeAreaView style = {SafeAreaViewAndroid.AndroidSafeArea}>
            <FlatList
                data = {items}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle = {{justifyContent : 'center', alignItems : 'center'}}
            >
            </FlatList>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {height : 250, 
        width : 350,
        borderWidth : 1,
        borderColor : "#rgba(128, 128, 128, 0.4)",
        borderRadius : 7, 
        marginVertical : 16,
        alignItems: 'center',
        },
    });
export default Prefentials;