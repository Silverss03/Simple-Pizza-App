import axios from 'axios';
import {View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import SafeAreaViewAndroid from "../components/Common/SafeAreaViewAndroid";
import { useState, useEffect, React } from "react";
import formatPrice from "../utils/formatPrice";
import { Foodoptions } from "../constants/constants";
import { ArrowLeft, SquareMinus, SquarePlus} from 'lucide-react-native';
import { useSelector } from 'react-redux';
import SizeOption from "../components/Menu/SizeOption";

const FoodDetail = ({route, navigation}) => {
    const user = useSelector((state) => state.auth.user);
    const {item}  = route.params ; 
    const imageUrl = `http://192.168.0.101:3000${item.img}`;
    const [amount, setAmount] = useState(1) ;
    const [selectedOption, setSelectedOption] = useState({
        size : 6,
        baseId : 1,
        price : item.price
    }) ; 

    useEffect(() => {
        setSelectedOption({
            size : 6,
            baseId : 1,
            price : item.price
        })
    }, [item])
    
    // Filter available bases based on size
    const getAvailableBases = () =>{
        if(selectedOption.size <= 6){
            return Foodoptions.filter(option => option.id === 1) ;
        }
        return Foodoptions
    }

    //Calculate base price
    const getBasePrice = () => {
        if(selectedOption.baseId === 1){
            return 0 ;
        }
        return Foodoptions.find(option => option.id === selectedOption.baseId).price[selectedOption.size] ;
    }

    const totalPrice = () => selectedOption.price * amount + getBasePrice() ;
    
    const handleSizeChange = (size, extraPrice) => {
        setSelectedOption({
            size, 
            baseId: 1,
            price: item.price + extraPrice 
        });
    };

    const handleBaseChanges = (baseId) => {
        setSelectedOption((prev) => ({...prev, baseId})) ;
    }

    const handleClick = async (item_id) => {
        try{
            // Inside your component
            const userId = user ? user.user_id : null;
            if(userId === null){
                navigation.navigate('Đăng nhập')
            }
            else{
                const response = await axios.post('addToCart', {user_id : userId, item_id : item_id, quantity : amount, des : `${selectedOption.size} inch, đế bánh ${Foodoptions.find(option => option.id === selectedOption.baseId).option}`, price : totalPrice() })
                console.log(response.data);
                navigation.navigate('Thực Đơn')
            }
        }
        catch(error){
            console.log(error);
        }
    }

    const renderItem = ({item}) => {
        return(
            <TouchableOpacity 
                style = {[styles.sizeBox, 
                        {marginRight : 8}, 
                        selectedOption.baseId === item.id && {borderColor : "#3c8d61"}]}
                onPress={() => handleBaseChanges(item.id)}    
            >
                <Text style = {styles.sizeBoxText}>{item.option}</Text>
                {item.price[selectedOption.size] > 0 && (
                    <Text style = {styles.sizeBoxText}>
                        +{formatPrice(item?.price[selectedOption.size])}đ
                    </Text>
                )}
            </TouchableOpacity>
        )
    }
    
    return (
        <SafeAreaView style = {SafeAreaViewAndroid.AndroidSafeArea}>
            <View style = {styles.container}>
                <View style = {styles.arrowContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Thực Đơn')}>
                        <ArrowLeft color = "#3c8d61" size = {45}/>
                    </TouchableOpacity>
                </View>
                    <Image 
                        resizeMode='contain' 
                        style={{height: 200}} 
                        source={{uri : imageUrl}} />
                <View>
                    <View style = {styles.foodDescription}>
                        <Text style = {styles.foodName}>{item.name}</Text>
                        <Text style = {{fontSize : 18 }}>{item.des}</Text>
                    </View>

                    <Text style = {styles.sizeOptionTitle}>Chọn Cỡ Bánh</Text>

                    <View style = {styles.foodOption}>
                        {[6, 9, 12].map(size => (
                            <SizeOption
                                size={size}
                                selectedSize={selectedOption.size}
                                onSizeChange={handleSizeChange}
                                price={(size === 9 ? 80000 : size === 12 ? 190000 : 0)}
                            />
                        ))}
                    </View>

                    <Text style = {styles.sizeOptionTitle}>Chọn Đế Bánh</Text>

                    <View style = {styles.foodOption}>
                        <FlatList 
                            data={getAvailableBases()}
                            renderItem={renderItem}
                            keyExtractor = {(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator = {false}
                        />
                    </View>
                </View>
                <View style = {styles.bottomContainer}>
                    <View style = {styles.cartInfo}>
                        <View style = {styles.amountContainer}>
                            <SquareMinus 
                                size = {30} 
                                color = "black" 
                                onPress = {() => {
                                    if(amount >1){
                                        setAmount(amount - 1)
                                    }
                                }}
                            />
                            <Text style = {{fontSize : 17}}>{amount}</Text>
                            <SquarePlus size = {30} color = "black" onPress = {() => setAmount(amount + 1)}/>
                        </View>
                        <View style = {{flexDirection : 'row'}}>
                            <Text style = {{fontSize : 16}}> Tổng cộng : </Text>
                            <Text style = {styles.priceText}>{formatPrice(totalPrice())}đ</Text>
                        </View>
                    </View>
                    <TouchableOpacity style = {styles.addToCartButton} onPress={() => handleClick(item.item_id)}>
                        <Text style = {styles.addToCartText}>Thêm Vào Giỏ Hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    arrowContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 1,
        padding: 5
    },
    foodDescription : {
        borderBottomWidth : 1,
        borderBottomColor : '#d1d1d1',
        padding : 10,
    },
    foodName : {
        fontSize : 20 , 
        color : '#3c8d61', 
        fontWeight : 'bold',
        marginBottom : 8
    },
    foodOption : {
        padding : 10,
        flexDirection : 'row',
        justifyContent : 'space-between',
        borderBottomWidth : 1,
        borderBottomColor : '#d1d1d1',
    },
    sizeOptionTitle : {
        fontSize : 18,
        fontWeight : 'bold',
        padding : 10,
        color : '#3c8d61', 
    },
    bottomContainer : {
        position : 'absolute',
        bottom : 0,
        left : 0,
        right : 0,
        backgroundColor: "white",
        borderTopWidth : 1 ,
        borderTopColor : "#d1d1d1",
        elevation : 5,
        alignItems : 'center',
    },
    addToCartButton : {
        backgroundColor: "#007d43",
        height : 50,
        width : "100%",
        justifyContent : 'center',
        alignItems : 'center'
    },
    addToCartText : {
        color : "white", 
        fontWeight : "bold", 
        fontSize : 18
    },
    cartInfo :  {
        flexDirection :  'row',
        justifyContent : 'space-between',
        width : '100%',
        padding : 10,
        alignItems : 'center'
    },
    amountContainer : {
        flexDirection : 'row', 
        justifyContent : 'space-evenly', 
        width : 100, 
        alignItems : 'center'
    },
    priceText : {
        color : "red", 
        fontSize : 16, 
        fontWeight : "bold"
    },    
    sizeBox : {
        borderWidth : 1,
        borderColor : '#d1d1d1',
        minWidth : 120,
        alignItems : 'center',
        padding : 8,
        marginBottom : 8,
    },
})

export default FoodDetail; 