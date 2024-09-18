import {View, Text, FlatList, Image, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native'
import React, { useEffect, useState } from 'react';


const Food = ({foodItems, generateKey}) =>{
    const renderItem = ({item}) => {
        const imageUrl = `http://172.20.10.6:3000${item.img}`;
        return (
            <TouchableOpacity>
                <View style={{flexDirection: 'row', textAlign: 'left', fontSize: 15, backgroundColor: 'white', width: '100%', marginBottom : 16}}>
                    <Image resizeMode='contain' style={{width: 170, height: 170}} source={{uri : imageUrl}} />
                    <View style={{margin: 12, flex: 1}}>
                        <Text style={{marginBottom: 4, fontSize: 20}}>{item.name}</Text>
                        <View>
                            <Text style={{marginBottom: 60, fontSize: 16, flexShrink: 1, width: '100%'}}>{item.des}</Text>
                        </View>
                        <Text style={{fontSize: 18}}>{item.price}đ</Text>
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
        </SafeAreaView>
    )
}

export default Food