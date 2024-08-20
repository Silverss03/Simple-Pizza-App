import {View, Text, FlatList, Image, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native'
const screenWidth = Dimensions.get('window').width ;
const items = [
    {
        id : 1,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_chat_cua_xuc_xich.jpg'),
        name : 'Pizza Chất_Thanh Cua và Xúc Xích Cocktail',
        des : `Phô mai, thịt xông khói với mùi tây, thanh cua và sốt Thousand Island`,
        price : '89.000đ'
    },
    {
        id : 2,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_chat_giam_bong_thit.jpg'),
        name : 'Pizza Chất_Giăm Bông & Thịt Xông Khói',
        des : 'Thịt giăm bông, thịt xông khói, cà chua, phô mai và sốt Thousand Island.',
        price : '89.000đ'
    },
    {
        id : 3,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_chat_ga_dua.jpg'),
        name : 'Pizza Chất_Gà Nướng Dứa',
        des : 'Thịt gà nướng cùng với dứa và phô mai thượng hạng',
        price : '89.000đ'
    },
    {
        id : 4,
        img : require('../../../assets/Menu_img/Pizza_img/nui_bo_lo.jpg'),
        name : 'Nui Bỏ Lò Hải Sản Sốt Hương Nhu',
        des : 'Đánh thức vị giác với sốt hương nhu độc đáo, kết hợp cùng hải sản tươi ngon đậm đà',
        price : '59.000đ'
    }
];

const renderItem = ({item}) => {
    return (
        <TouchableOpacity>
            <View style={{flexDirection: 'row', textAlign: 'left', fontSize: 15, backgroundColor: 'white', width: screenWidth, marginBottom : 16}}>
                <Image resizeMode = 'contain'style={{width: 170, height: 170}} source={item.img} />
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

const Unique = () =>{
    return(
        <SafeAreaView >
            <FlatList data = {items}
                    keyExtractor = {(item) => item.id}
                    renderItem = {renderItem}>
                    
            </FlatList>
        </SafeAreaView>
    )
}

export default Unique