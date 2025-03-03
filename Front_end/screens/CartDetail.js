import { SafeAreaView, StyleSheet, TouchableOpacity, View, FlatList, Image } from "react-native"
import SafeAreaViewAndroid from "../components/Common/SafeAreaViewAndroid"
import { ArrowLeft} from 'lucide-react-native';
import { useState, React, useCallback }  from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useSelector } from "react-redux"
import axios from 'axios' 
import generateKey from "../utils/generateKey";
import CartItem from "../components/Cart/CartItem";

const CartDetail = ({navigation}) => {
    const [item, setItem] = useState([])
    const user = useSelector((state) => state.auth.user);
    const fetchData = async () => {
        try{
            const userId = user ? user.user_id : null 
            if(userId != null){
                const response = await axios.get(`getCartItem/${userId}`)
                setItem([...response.data]);
            }
        }
        catch(error){
            console.log(error)
        }
    }

    useFocusEffect(
        useCallback(() => {
            fetchData();
        }, []) // Mỗi lần vào lại màn hình, nó sẽ gọi fetchData()
    );
    
    const renderItem = ({item}) => {
        const imageUrl = `http://192.168.0.101:3000${item.img}`;
        return(
            <CartItem item = {item} imageUrl = {imageUrl}/>
        )
    }
    return(
        <SafeAreaView style = {SafeAreaViewAndroid.AndroidSafeArea}>
            <TouchableOpacity style = {styles.header} onPress={() => navigation.navigate('Thực Đơn')}>
                <ArrowLeft color="black" size = {35}/>
            </TouchableOpacity>
            <View style = {styles.item}>
                <FlatList 
                    data = {item}
                    keyExtractor={generateKey}
                    renderItem={renderItem}>
                </FlatList>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header : {
        height : 60, 
    },
})
export default CartDetail 