import { View, Text, FlatList, Image, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native'
const screenWidth = Dimensions.get('window').width;
const items = [
    {
        id: 1,
        img: require('../../assets/Menu_img/Drinks_img/pepsi_lime.jpg'),
        name: 'Pepsi Black Lime Lon',
        des: ``,
        price: '29.000đ'
    },
    {
        id: 2,
        img: require('../../assets/Menu_img/Drinks_img/pepsi_black.jpg'),
        name: 'Pepsi Black Lon',
        des: '',
        price: '29.000đ'
    },
    {
        id: 3,
        img: require('../../assets/Menu_img/Drinks_img/pepsi_can.jpg'),
        name: 'Pepsico Lon',
        des: '',
        price: '29.000đ'
    },
    {
        id: 4,
        img: require('../../assets/Menu_img/Drinks_img/mirinda_soda_kem.jpg'),
        name: 'Mirinda Soda Kem Lon',
        des: '',
        price: '29.000đ'
    },
    {
        id: 5,
        img: require('../../assets/Menu_img/Drinks_img/pepsi_15l.jpg'),
        name: 'Pepsi 1,5l Chai',
        des: '',
        price: '39.000đ'
    },
    {
        id: 6,
        img: require('../../assets/Menu_img/Drinks_img/7_up_can.jpg'),
        name: '7Up Lon',
        des: '',
        price: '29.000đ'
    },
    {
        id: 7,
        img: require('../../assets/Menu_img/Drinks_img/7_up_15l.jpg'),
        name: '7Up 1,5l Chai',
        des: '',
        price: '39.000đ'
    },
    {
        id: 8,
        img: require('../../assets/Menu_img/Drinks_img/aquafina.jpg'),
        name: 'Aquafina Chai',
        des: '',
        price: '29.000đ'
    },
    {
        id: 9,
        img: require('../../assets/Menu_img/Drinks_img/heineken.jpg'),
        name: 'Bia Heineken',
        des: '',
        price: '49.000đ'
    },
    {
        id: 10,
        img: require('../../assets/Menu_img/Drinks_img/bia_333.jpg'),
        name: 'Bia 333',
        des: '',
        price: '49.000đ'
    }

];

const renderItem = ({ item }) => {
    return (
        <TouchableOpacity>
            <View style={{ flexDirection: 'row', textAlign: 'left', fontSize: 15, backgroundColor: 'white', width: screenWidth, marginBottom: 16 }}>
                {/* <Image style={{ width: 170, height: 170 }} source={item.img} /> */}
                <View style={{ margin: 12, flex: 1 }}>
                    <Text style={{ marginBottom: 4, fontSize: 20 }}>{item.name}</Text>
                    <View>
                        <Text style={{ marginBottom: 60, fontSize: 16, flexShrink: 1, width: '100%' }}>{item.des}</Text>
                    </View>
                    <Text style={{ fontSize: 18 }}>{item.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const Drinks = () => {
    return (
        <SafeAreaView >
            <FlatList data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}>

            </FlatList>
        </SafeAreaView>
    )
}

export default Drinks