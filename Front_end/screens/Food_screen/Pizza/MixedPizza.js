import {View, Text, FlatList, Image, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native'
const screenWidth = Dimensions.get('window').width ;
const items = [
    {
        id : 1,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_aloha.jpg'),
        name : 'Pizza Aloha',
        des : `Thịt nguội, xúc xích và dứa hòa quyện với sốt Thousand Island`,
        price : '149.000đ'
    },
    {
        id : 2,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_thit_xong_khoi.jpg'),
        name : 'Pizza Thịt Xông Khói',
        des : 'Thịt giăm bông, thịt xông khói và hai loại rau của ớt xanh, cà chua',
        price : '149.000đ'
    },
    {
        id : 3,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_thit_nguoi_canada.jpg'),
        name : 'Pizza Thịt Nguội Canada',
        des : 'Sự kết hợp giữa thịt nguội và bắp ngọt',
        price : '149.000đ'
    },
    {
        id : 4,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_ga_nuong_3_vi.jpg'),
        name : 'Pizza Gà Nướng 3 Vị',
        des : 'Gà nướng, gà bơ tỏi và gà ướp sốt nấm',
        price : '149.000đ'
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

const MixedPizza = () =>{
    return(
        <SafeAreaView >
            <FlatList data = {items}
                    keyExtractor = {(item) => item.id}
                    renderItem = {renderItem}>
                    
            </FlatList>
        </SafeAreaView>
    )
}

export default MixedPizza