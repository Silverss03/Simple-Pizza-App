import {View, Text, SafeAreaView, FlatList, Image, TouchableOpacity} from 'react-native';
import SafeAreaViewAndroid from '../components/SafeAreaViewAndroid';
import { StyleSheet } from 'react-native';
import { Prefrential_items } from '../constants/constants';

const renderItem = ({item}) =>{
    return (
        <View style = {styles.container}>
            <TouchableOpacity>
                <Image 
                        source = {item.img} 
                        style = {{height : 210, 
                                width : 200, 
                                marginBottom : 4}}>
                </Image>
                <Text>{item.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const Prefentials = () => {
    return (
        <SafeAreaView style = {SafeAreaViewAndroid.AndroidSafeArea}>
            <FlatList
                data = {Prefrential_items}
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