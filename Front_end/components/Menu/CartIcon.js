import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet} from "react-native"
import { ShoppingCart } from "lucide-react-native"
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useSelector } from "react-redux"

const CartIcon = () => {
    const navigation = useNavigation();
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        getCartNum();
    }, []) 

    useEffect(() => {
        if(user){
            getCartNum() 
        }
        else{
            setCartNum(0)
        }
    }, [user])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getCartNum() ;
        })
        return unsubscribe
    }, [navigation])

    const getCartNum = async () => {
        try{
            const userId = user ? user.user_id : null;
            if(userId != null){
                const response = await axios.get(`getCartNum/${userId}`)
                setCartNum(response.data.cartNum)
            }
        }
        catch(error){
            console.log(error)
        }
    }
    const [cartNum, setCartNum] = useState(0);
    return(
        <TouchableOpacity style = {styles.cartContainer} onPress={() => navigation.navigate('Chi tiết giỏ hàng')}>
            <ShoppingCart size = {50} color = 'white' style = {styles.cart}/>
            <View style = {styles.cartNumber}>
                <Text style = {{color : 'white'}}>{cartNum}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cart : {
        zIndex : 1
    },
    cartContainer : {
        position : 'absolute',
        bottom : 20,
        right : 20, 
        height : 70,
        width : 70,
        borderRadius : 35,
        backgroundColor : '#3c8d61',
        alignItems : 'center',
        justifyContent : 'center',
        elevation: 5, // Add shadow for Android
        shadowColor: '#000', // Add shadow for iOS
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    cartNumber : {
        backgroundColor : 'red',
        height : 20,
        width : 20,
        borderRadius : 10,
        zIndex : 2,
        position : 'absolute',
        alignItems : 'center',
        justifyContent : 'center',
        top : 10,
        right : 10,
    }
});

export default CartIcon