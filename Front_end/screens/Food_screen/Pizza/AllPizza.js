import {View, Text, FlatList, Image, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native'
import axios from 'axios' 
import React, { useEffect, useState } from 'react';
const screenWidth = Dimensions.get('window').width ;

const items = [
    {
        id : 1,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_hai_san.jpg'),
        name : 'Pizza Hải Sản Pesto Xanh',
        des : `Tôm, thanh cua, mực và bông cải xanh  tươi ngon trên nền sốt Pesto Xanh`,
        price : '169.000đ'
    },
    {
        id : 2,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_tom_cocktail.jpg'),
        name : 'Pizza Tôm Cocktail',
        des : 'Tôm với nấm, dứa, cà chua và sốt Thousand Island.',
        price : '159.000đ'
    },
    {
        id : 3,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_hai_san_cocktail.jpg'),
        name : 'Pizza Hải Sản Cocktail',
        des : 'Tôm, cua, giăm bông,... với sốt Thousand Island',
        price : '159.000đ'
    },
    {
        id : 4,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_hai_san_nhiet_doi.jpg'),
        name : 'Pizza Hải Sản Nhiệt Đới',
        des : 'Tôm, nghêu, mực cua, dứa với sốt Thousand Island',
        price : '159.000đ'
    },
    {
        id : 5,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_hai_san_cao_cap.jpg'),
        name : 'Pizza Hải Sản Cao Cấp',
        des : 'Tôm, cua, mực và nghêu với sốt Marinara',
        price : '159.000đ'
    },
    {
        id : 6,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_5_thit_rau.jpg'),
        name : 'Pizza 5 Loại Thịt Đặc Biệt & Rau Củ',
        des : 'Xúc xích bò, giăm bông, thịt xông khói,...và cả thế giới rau phong phú.',
        price : '149.000đ'
    },
    {
        id : 7,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_aloha.jpg'),
        name : 'Pizza Aloha',
        des : `Thịt nguội, xúc xích và dứa hòa quyện với sốt Thousand Island`,
        price : '149.000đ'
    },
    {
        id : 8,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_thit_xong_khoi.jpg'),
        name : 'Pizza Thịt Xông Khói',
        des : 'Thịt giăm bông, thịt xông khói và hai loại rau của ớt xanh, cà chua',
        price : '149.000đ'
    },
    {
        id : 9,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_thit_nguoi_canada.jpg'),
        name : 'Pizza Thịt Nguội Kiểu Canada',
        des : 'Sự kết hợp giữa thịt nguội và bắp ngọt',
        price : '149.000đ'
    },
    {
        id : 10,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_ga_nuong_3_vi.jpg'),
        name : 'Pizza Gà Nướng 3 Vị',
        des : 'Gà nướng, gà bơ tỏi và gà ướp sốt nấm',
        price : '149.000đ'
    },
    {
        id : 11,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_5_thit_dac_biet.jpg'),
        name : 'Pizza 5 Loại Thịt Đặc Biệt',
        des : 'Xúc xích lợn và bò đặc trưng của Ý, giăm bông, thịt xông khói',
        price : '149.000đ'
    },
    {
        id : 12,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_ga_nuong_dua.jpg'),
        name : 'Pizza Gà Nướng Dứa',
        des : `Thịt gà mang vị ngọt của dứa.`,
        price : '139.000đ'
    },
    {
        id : 13,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_pho_mai.jpg'),
        name : 'Pizza Phô Mai',
        des : 'Bánh Pizza với vô vàn phô mai để bạn tha hồ tận hưởng.',
        price : '119.000đ'
    },
    {
        id : 14,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_xuc_xich_y.jpg'),
        name : 'Pizza Xúc Xích Ý',
        des : 'Xúc xích kiểu Ý trên nền sốt cà chua',
        price : '139.000đ'
    },
    {
        id : 15,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_thit_nam.jpg'),
        name : 'Pizza Thịt Nguội & Nấm',
        des : 'Pizza giăm bông và nấm đem đến cho bạn những trải nghiệm thú vị.',
        price : '139.000đ'
    },
    {
        id : 16,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_hawaii.jpg'),
        name : 'Pizza Hawaiian',
        des : 'Giăm bông, thịt muối và dứa',
        price : '139.000đ'
    },
    {
        id : 17,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_rau_cu.jpg'),
        name : 'Pizza Rau Củ',
        des : 'Hành, ớt chuông, nấm, dứa, cà chua',
        price : '119.000đ'
    }
];

const renderItem = ({item}) => {
    return (
        <TouchableOpacity>
            <View style={{flexDirection: 'row', textAlign: 'left', fontSize: 15, backgroundColor: 'white', width: screenWidth, marginBottom : 16}}>
                <Image style={{width: 170, height: 170}} source={item.img} />
                <View style={{margin: 12, flex: 1}}>
                    <Text style={{marginBottom: 4, fontSize: 20}}>{item.name}</Text>
                    <View>
                        <Text style={{marginBottom: 60, fontSize: 16, flexShrink: 1, width: '100%'}}>{item.des}</Text>
                    </View>
                    <Text style={{fontSize: 18}}>{item.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const AllPizza = () =>{
    return(
        <SafeAreaView >
            <FlatList data = {items}
                    keyExtractor = {(item) => item.id}
                    renderItem = {renderItem}>
                    
            </FlatList>
        </SafeAreaView>
    )
}

export default AllPizza