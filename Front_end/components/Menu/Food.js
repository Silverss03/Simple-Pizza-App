import {View, Text, FlatList, Image, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react';
import CartIcon from './CartIcon';
import formatPrice from '../../utils/formatPrice';
import { useNavigation } from '@react-navigation/native';

const Food = ({foodItems, generateKey}) =>{
    const navigation = useNavigation();

    const renderItem = ({item}) => {
        const imageUrl = `http://192.168.0.101:3000${item.img}`;
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Chi tiết', {item})}>
                <View style={{flexDirection: 'row', textAlign: 'left', fontSize: 15, backgroundColor: 'white', width: '100%', marginBottom : 16}}>
                    <Image resizeMode='contain' style={{width: 170, height: 170}} source={{uri : imageUrl}} />
                    <View style={{margin: 12, flex: 1}}>
                        <Text style={{marginBottom: 4, fontSize: 20}}>{item.name}</Text>
                        <View>
                            <Text style={{marginBottom: 60, fontSize: 16, flexShrink: 1, width: '100%'}}>{item.des}</Text>
                        </View>
                        <Text style={{fontSize: 18}}>{formatPrice(item.price)}đ</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    return(
        <SafeAreaView >
            <FlatList data = {foodItems}
                    keyExtractor = {generateKey}
                    renderItem = {renderItem}
                    initialNumToRender={5}
                    >
            </FlatList>
            <CartIcon/>
        </SafeAreaView>
    )
}

export default Food