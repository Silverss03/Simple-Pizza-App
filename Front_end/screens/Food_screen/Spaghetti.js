import {View, Text, FlatList, Image, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native'
const screenWidth = Dimensions.get('window').width ;
const items = [
    {
        id : 1,
        img : require('../../assets/Menu_img/Spaghetti_img/mi_hai_san.jpg'),
        name : 'Mỳ Ý Cay Hải Sản',
        des : `Mỳ Ý rán với các loại hải sản tươi ngon cùng ớt và tỏi`,
        price : '139.000đ'
    },
    {
        id : 2,
        img : require('../../assets/Menu_img/Spaghetti_img/mi_sot_kem_ca_chua.jpg'),
        name : 'Mỳ Ý Tôm Sốt Kem Cà Chua',
        des : 'Sự tươi ngon của tôm kết hợp với sốt kem cà chua',
        price : '139.000đ'
    },
    {
        id : 3,
        img : require('../../assets/Menu_img/Spaghetti_img/my_thit_bo_bam.jpg'),
        name : 'Mỳ Ý thịt bò bằm',
        des : 'Sốt thịt bò bằm đặc trưng kết hợp cùng mỳ Ý',
        price : '139.000đ'
    },
    {
        id : 4,
        img : require('../../assets/Menu_img/Spaghetti_img/mi_cay_xuc_xich.jpg'),
        name : 'Mỳ Ý Cay Xúc Xích',
        des : 'Mỳ Ý rán với xúc xích cay, thảo mộc, ngò gai và húng quế Ý',
        price : '139.000đ'
    },
    {
        id : 5,
        img : require('../../assets/Menu_img/Spaghetti_img/mi_giam_bong_sot_kem.jpg'),
        name : 'Mỳ Ý Giăm Bông Và Nấm Sốt Kem',
        des : 'Mỳ Ý, nấm và giăm bông được nấu cùng với sốt kem trắng',
        price : '119.000đ'
    },
    {
        id : 6,
        img : require('../../assets/Menu_img/Spaghetti_img/mi_chay_marinara.jpg'),
        name : 'Mỳ Ý Chay Sốt Marinara',
        des : 'Mỳ Ý áp chảo với sốt Marinara, nấm và cà chua đỏ',
        price : '109.000đ'
    }

];

const renderItem = ({item}) => {
    return (
        <TouchableOpacity>
            <View style={{flexDirection: 'row', textAlign: 'left', fontSize: 15, backgroundColor: 'white', width: screenWidth, marginBottom : 16}}>
                <Image resizeMode = 'contain' style={{width: 170, height: 170}} source={item.img} />
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

const Spaghetti = () =>{
    return(
        <SafeAreaView >
            <FlatList data = {items}
                    keyExtractor = {(item) => item.id}
                    renderItem = {renderItem}>
                    
            </FlatList>
        </SafeAreaView>
    )
}

export default Spaghetti