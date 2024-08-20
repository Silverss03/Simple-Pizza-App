import {View, Text, FlatList, Image, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native'
const screenWidth = Dimensions.get('window').width ;
const items = [
    {
        id : 1,
        img : require('../../../assets/Menu_img/Appetizer_img/tom_bo_banh_mi.jpg'),
        name : 'Tôm Bơ tỏi và Bánh Mì Nướng',
        des : `Tôm tươi đút lò với tỏi, bơ dùng kèm bánh mì nướng bơ tỏi`,
        price : '129.000đ'
    },
    {
        id : 2,
        img : require('../../../assets/Menu_img/Appetizer_img/banh_pho_mai_xoan.jpg'),
        name : 'Bánh Phô Mai Xoắn',
        des : 'Phô mai trắng được nướng với bơ, tỏi và dùng kèm sốt Cocktail',
        price : '119.000đ'
    },
    {
        id : 3,
        img : require('../../../assets/Menu_img/Appetizer_img/banh_kep_nuong.jpg'),
        name : 'Bánh Kẹp Nướng Mexico',
        des : 'Phô mai, sốt cà chua, nhân gà nướng bơ tỏi, ớt sừng dùng kèm sốt cocktail',
        price : '129.000đ'
    },
    {
        id : 4,
        img : require('../../../assets/Menu_img/Appetizer_img/banh_mi_bo_toi_pho_mai.jpg'),
        name : 'Bánh Mì Bơ Tỏi Phủ Phô Mai',
        des : 'Lát bánh mì nướng được quết 1 lớp bơ tỏi và phô mai thơm béo',
        price : '69.000đ'
    },
    {
        id : 5,
        img : require('../../../assets/Menu_img/Appetizer_img/banh_mi_bo_toi.jpg'),
        name : 'Bánh Mì Bơ Tỏi',
        des : 'Một lớp bơ tỏi thơm ngon trên các lát bánh mì nướng',
        price : '59.000đ'
    },
    {
        id : 6,
        img : require('../../../assets/Menu_img/Appetizer_img/banh_mi_que_nuong.jpg'),
        name : 'Bánh Mì Que Nướng',
        des : 'Làm từ đế bột của Pizza và dùng kèm sốt Cocktail',
        price : '69.000đ'
    },
];

const renderItem = ({item}) => {
    return (
        <TouchableOpacity>
            <View style={{flexDirection: 'row', textAlign: 'left', fontSize: 15, backgroundColor: 'white', width: screenWidth, marginBottom : 16}}>
                <Image resizeMode = 'contain' style={{width: 170, height: 170, marginLeft : 2}} source={item.img} />
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

const Bread = () =>{
    return(
        <SafeAreaView >
            <FlatList data = {items}
                    keyExtractor = {(item) => item.id}
                    renderItem = {renderItem}>
                    
            </FlatList>
        </SafeAreaView>
    )
}

export default Bread