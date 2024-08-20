import {View, Text, FlatList, Image, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native'
const screenWidth = Dimensions.get('window').width ;
const items = [
    {
        id : 1,
        img : require('../../../assets/Menu_img/Appetizer_img/ga_sot_han_2_mieng.jpg'),
        name : 'Gà Giòn Xốt Hàn - Truyền Thống (2 miếng)',
        des : `Ngon hơn khi dùng kèm xốt mù tạc mật ong và củ cải lên men.`,
        price : '99.000đ'
    },
    {
        id : 2,
        img : require('../../../assets/Menu_img/Appetizer_img/ga_sot_han_5_mieng.jpg'),
        name : 'Gà Giòn Xốt Hàn - Truyền Thống (5 miếng)',
        des : 'Ngon hơn khi dùng kèm xốt mù tạc mật ong và củ cải lên men.',
        price : '249.000đ'
    },
    {
        id : 3,
        img : require('../../../assets/Menu_img/Appetizer_img/ga_sot_han_9_mieng.jpg'),
        name : 'Gà Giòn Xốt Hàn - Truyền Thống (9 miếng)',
        des : 'Ngon hơn khi dùng kèm xốt mù tạc mật ong và củ cải lên men.',
        price : '429.000đ'
    },
    {
        id : 4,
        img : require('../../../assets/Menu_img/Appetizer_img/ga_sot_tuong_toi_2_mieng.jpg'),
        name : 'Gà Giòn Xốt Tương Tỏi Hàn Quốc (2 miếng)',
        des : 'Công thức đặc biệt pha chút vị the nhè nhẹ và mùi thơm của gừng, tỏi mang đến cảm giác mới lạ khi thưởng thức.',
        price : '99.000đ'
    },
    {
        id : 5,
        img : require('../../../assets/Menu_img/Appetizer_img/ga_sot_tuong_toi_5_mieng.jpg'),
        name : 'Gà Giòn Xốt Tương Tỏi Hàn Quốc (5 miếng)',
        des : 'Công thức đặc biệt pha chút vị the nhè nhẹ và mùi thơm của gừng, tỏi mang đến cảm giác mới lạ khi thưởng thức.',
        price : '249.000đ'
    },
    {
        id : 6,
        img : require('../../../assets/Menu_img/Appetizer_img/ga_sot_tuong_toi_9_mieng.jpg'),
        name : 'Gà Giòn Xốt Tương Tỏi Hàn Quốc (9 miếng)',
        des : 'Công thức đặc biệt pha chút vị the nhè nhẹ và mùi thơm của gừng, tỏi mang đến cảm giác mới lạ khi thưởng thức.',
        price : '429.000đ'
    },
    {
        id : 7,
        img : require('../../../assets/Menu_img/Appetizer_img/ga_sot_han_cay_2_mieng.jpg'),
        name : 'Gà Giòn Xốt Hàn - Cay (2 miếng)',
        des : `Phục vụ kèm xốt mù tạc mật ong và củ cải lên men.`,
        price : '99.000đ'
    },
    {
        id : 8,
        img : require('../../../assets/Menu_img/Appetizer_img/ga_sot_han_cay_5_mieng.jpg'),
        name : 'Gà Giòn Xốt Hàn - Cay (5 miếng)',
        des : 'Phục vụ kèm xốt mù tạc mật ong và củ cải lên men.',
        price : '249.000đ'
    },
    {
        id : 9,
        img : require('../../../assets/Menu_img/Appetizer_img/ga_sot_han_cay_9_mieng.jpg'),
        name : 'Gà Giòn Xốt Hàn - Cay (9 miếng)',
        des : 'Phục vụ kèm xốt mù tạc mật ong và củ cải lên men.',
        price : '429.000đ'
    },
    {
        id : 10,
        img : require('../../../assets/Menu_img/Appetizer_img/ga_gion_khong_xuong.jpg'),
        name : 'Gà Giòn Không Xương',
        des : 'Gà giòn tan với sốt Cocktail thơm ngậy',
        price : '99.000đ'
    },
    {
        id : 11,
        img : require('../../../assets/Menu_img/Appetizer_img/ga_popcorn.jpg'),  
        name : 'Gà Popcorn',
        des : '',
        price : '99.000đ'
    },
    {
        id : 12,
        img : require('../../../assets/Menu_img/Appetizer_img/canh_ga_tam_bot_chien_10_mieng.jpg'),
        name : 'Cánh Gà Tẩm Bột Chiên Giòn (10 miếng)',
        des : 'Phủ bởi lớp bột đặc biệt tạo nên lớp vỏ giòn dai hấp dẫn.',
        price : '199.000đ'
    },
    {
        id : 13,
        img : require('../../../assets/Menu_img/Appetizer_img/canh_ga_tam_bot_chien_6_mieng.jpg'),
        name : 'Cánh Gà Tẩm Bột Chiên Giòn (6 miếng)',
        des : 'Phủ bởi lớp bột đặc biệt tạo nên lớp vỏ giòn dai hấp dẫn.',
        price : '139.000đ'
    },
    {
        id : 14,
        img : require('../../../assets/Menu_img/Appetizer_img/canh_ga_bbq_10_mieng.jpg'),
        name : 'Cánh gà nướng BBQ (10 miếng)',
        des : 'Cánh gà nướng thấm vị với lớp da mỏng giòn',
        price : '199.000đ'
    },
    {
        id : 15,
        img : require('../../../assets/Menu_img/Appetizer_img/canh_ga_bbq_6_mieng.jpg'),
        name : 'Cánh gà nướng BBQ (6 miếng)',
        des : 'Cánh gà nướng thấm vị với lớp da mỏng giòn',
        price : '139.000đ'
    },
    {
        id : 16,
        img : require('../../../assets/Menu_img/Appetizer_img/tong_hop_ga_nuong.jpg'),
        name : 'Khai Vị Tổng Hợp (Cánh gà nướng)',
        des : 'Cánh gà BBQ, bánh mì tỏi nướng và khoai tây chiên',
        price : '179.000đ'
    },
    {
        id : 17,
        img : require('../../../assets/Menu_img/Appetizer_img/tong_hop_canh_ga_chien.jpg'),
        des : 'Cánh gà chiên giòn, bánh mì tỏi nướng và khoai tây chiên',
        price : '179.000đ'
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

const Chicken = () =>{
    return(
        <SafeAreaView >
            <FlatList data = {items}
                    keyExtractor = {(item) => item.id}
                    renderItem = {renderItem}>
                    
            </FlatList>
        </SafeAreaView>
    )
}

export default Chicken