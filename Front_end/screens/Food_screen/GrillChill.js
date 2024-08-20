import {View, Text, FlatList, Image, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native'
const screenWidth = Dimensions.get('window').width ;
const items = [
    {
        id : 1,
        img : require('../../assets/Menu_img/Grill_img/ga_nuong_bbq_2_mieng.jpg'),
        name : 'Gà Nướng BBQ (2 miếng)',
        des : `Thịt gà mềm ngọt, thấm đẫm gia vị, da gà giòn rụm, màu vàng ươm bắt mắt.`,
        price : '99.000đ'
    },
    {
        id : 2,
        img : require('../../assets/Menu_img/Grill_img/ga_nuong_bbq_5_mieng.jpg'),
        name : 'Gà Nướng BBQ (5 miếng)',
        des : 'Thịt gà mềm ngọt, thấm đẫm gia vị, da gà giòn rụm, màu vàng ươm bắt mắt.',
        price : '219.000đ'
    },
    {
        id : 3,
        img : require('../../assets/Menu_img/Grill_img/ga_nuong_bbq_9_mieng.jpg'),
        name : 'Gà Nướng BBQ (9 miếng)',
        des : 'Thịt gà mềm ngọt, thấm đẫm gia vị, da gà giòn rụm, màu vàng ươm bắt mắt.',
        price : '359.000đ'
    },
    {
        id : 4,
        img : require('../../assets/Menu_img/Grill_img/7_up.jpg'),
        name : '7Up Soda Chanh',
        des : '',
        price : '29.000đ'
    },

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

const GrillChill = () =>{
    return(
        <SafeAreaView >
            <FlatList data = {items}
                    keyExtractor = {(item) => item.id}
                    renderItem = {renderItem}>
                    
            </FlatList>
        </SafeAreaView>
    )
}

export default GrillChill