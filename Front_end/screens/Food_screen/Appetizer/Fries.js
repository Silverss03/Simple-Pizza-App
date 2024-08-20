import {View, Text, FlatList, Image, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native'
const screenWidth = Dimensions.get('window').width ;
const items = [
    {
        id : 1,
        img : require('../../../assets/Menu_img/Appetizer_img/muc_chien_gion.jpg'),
        name : 'Mực Chiên Giòn',
        des : `Mực tẩm bột chiên giòn dùng kèm sốt ngò tây`,
        price : '129.000đ'
    },
    {
        id : 2,
        img : require('../../../assets/Menu_img/Appetizer_img/gio_khoai_chien.jpg'),
        name : 'Giỏ Khoai Tây Chiên',
        des : 'Sự kết hợp của nhiều kiểu chế biến khoai tây',
        price : '89.000đ'
    },
    {
        id : 3,
        img : require('../../../assets/Menu_img/Appetizer_img/khoai_tay_chien.jpg'),
        name : 'Khoai Tây Chiên',
        des : 'Khoai tây sợi được chiên và tẩm một lớp muối thấm vị',
        price : '79.000đ'
    },
];

const renderItem = ({item}) => {
    return (
        <TouchableOpacity>
            <View style={{flexDirection: 'row', textAlign: 'left', fontSize: 15, backgroundColor: 'white', width: screenWidth, marginBottom : 16}}>
                <Image style={{width: 170, height: 170, marginLeft : 2}} source={item.img} />
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

const Fries = () =>{
    return(
        <SafeAreaView >
            <FlatList data = {items}
                    keyExtractor = {(item) => item.id}
                    renderItem = {renderItem}>
                    
            </FlatList>
        </SafeAreaView>
    )
}

export default Fries