import {View, Text, FlatList, Image, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native'
const screenWidth = Dimensions.get('window').width ;
const items = [
    {
        id : 1,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_ga_nuong_dua.jpg'),
        name : 'Pizza Gà Nướng Dứa',
        des : `Thịt gà mang vị ngọt của dứa.`,
        price : '139.000đ'
    },
    {
        id : 2,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_pho_mai.jpg'),
        name : 'Pizza Phô Mai',
        des : 'Bánh Pizza với vô vàn phô mai để bạn tha hồ tận hưởng.',
        price : '119.000đ'
    },
    {
        id : 3,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_xuc_xich_y.jpg'),
        name : 'Pizza Xúc Xích Ý',
        des : 'Xúc xích kiểu Ý trên nền sốt cà chua',
        price : '139.000đ'
    },
    {
        id : 4,
        img : require('../../../assets/Menu_img/Pizza_img/pizza_thit_nam.jpg'),
        name : 'Pizza Thịt Nguội & Nấm',
        des : 'Pizza giăm bông và nấm đem đến cho bạn những trải nghiệm thú vị.',
        price : '139.000đ'
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

const TraditionPizza = () =>{
    return(
        <SafeAreaView >
            <FlatList data = {items}
                    keyExtractor = {(item) => item.id}
                    renderItem = {renderItem}>
                    
            </FlatList>
        </SafeAreaView>
    )
}

export default TraditionPizza