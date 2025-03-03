import React from "react"
import { SquareMinus, SquarePlus, Trash } from "lucide-react-native"
import { View, Text, Image, StyleSheet, TouchableOpacity} from "react-native"
import formatPrice from '../../utils/formatPrice'

const CartItem = ({item, imageUrl}) => {
    return(
        <View style = {styles.itemCard}>
            <View style = {{flexDirection : 'row', width : '100%', marginBottom : 10}}>
                <Image resizeMode='contain' style={{width: 110, height: 100}} source={{uri : imageUrl}}></Image>
                <View style = {{flex : 1}}>
                    <Text style = {{fontSize : 18, fontWeight : 'bold', marginHorizontal : 4}}>{item.name}</Text>
                    <Text style = {{fontSize : 16, marginVertical : 4, marginHorizontal : 4}}>{item.des}</Text>
                    <TouchableOpacity style = {{flexDirection : 'row', justifyContent : 'flex-end', marginTop : 10}}>
                        <Trash size={24} color= "red"/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style = {{flexDirection : 'row',  width : '100%' , alignItems : 'center', justifyContent : 'space-between'}}>
                <View style = {{flexDirection : 'row'}}>
                    <TouchableOpacity>
                        <SquareMinus 
                            size = {30} 
                            color = "green"/>
                    </TouchableOpacity>
                    <Text style = {{fontSize : 17, fontWeight : 'bold', marginHorizontal : 10, marginVertical : 'auto'}}>{item.total_quantity}</Text>
                    <TouchableOpacity>
                        <SquarePlus 
                            size = {30} 
                            color = "green"/>
                    </TouchableOpacity>
                </View>
                <Text style = {{fontSize : 17, fontWeight : 'bold'}}>{formatPrice(item.total_price)}đ</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item : {
        marginTop : 10,
    },
    itemCard : {
        padding : 10,
        alignItems : 'center',
        width : '90%',
        height : 160,
        borderWidth : 1,
        marginHorizontal : 'auto',
        marginBottom : 12,
        borderColor : "#rgba(128, 128, 128, 0.4)",
        backgroundColor: 'white', 
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.8,
        elevation: 5,
    },
})

export default CartItem