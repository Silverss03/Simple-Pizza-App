import {View, Text, FlatList, Image, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native'
const screenWidth = Dimensions.get('window').width ;
const items = [
    {
        id : 1,
        img : require('../../assets/Menu_img/Salad_img/salad_ga_khong_xuong.jpg'),
        name : 'Salad Gà Giòn Không Xương',
        des : `Salad Gà giòn với trứng cút, thịt xông khói, phô mai parmesan và sốt Thousand Island`,
        price : '89.000đ'
    },
    {
        id : 2,
        img : require('../../assets/Menu_img/Salad_img/salad_da_ca_hoi.jpg'),
        name : 'Salad Da Cá Hồi Giòn',
        des : 'Salad với da cá hồi giòn với bắp cải đỏ, cà chua bi, ngô với sốt Yuzu',
        price : '89.000đ'
    },
    {
        id : 3,
        img : require('../../assets/Menu_img/Salad_img/salad_dac_sac.jpg'),
        name : 'Salad Đặc Sắc',
        des : 'Salad rau và trái cây tươi dùng kèm xốt kem đặc biệt của The Pizza Company.',
        price : '89.000đ'
    },
    {
        id : 4,
        img : require('../../assets/Menu_img/Salad_img/salad_sot_caesar.jpg'),
        name : 'Salad Trộn Sốt Caesar',
        des : 'Rau tươi trộn với sốt Caesar',
        price : '89.000đ'
    },
    {
        id : 5,
        img : require('../../assets/Menu_img/Salad_img/salad_dau_giam.jpg'), 
        name : 'Salad Trộn Dầu Giấm',
        des : 'Rau với sốt dầu giấm',
        price : '79.000đ'
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

const Salad = () =>{
    return(
        <SafeAreaView >
            <FlatList data = {items}
                    keyExtractor = {(item) => item.id}
                    renderItem = {renderItem}>
                    
            </FlatList>
        </SafeAreaView>
    )
}

export default Salad