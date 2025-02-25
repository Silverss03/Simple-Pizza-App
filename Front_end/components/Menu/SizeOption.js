import formatPrice from "../../utils/formatPrice"
import { Text, TouchableOpacity, StyleSheet } from "react-native"
const SizeOption = ({ size, selectedSize, price, onSizeChange}) => {
    return (
        <TouchableOpacity 
            style = {[
                styles.sizeBox, 
                selectedSize === size && {borderColor : "#3c8d61"}]} 
            onPress = {() => onSizeChange(size, price)}>
            <Text style = {styles.sizeBoxText}>{size === 6 ? "Cỡ nhỏ" : size === 9 ? "Cỡ vừa" : "Cỡ lớn"} {size} inch</Text>
            <Text style = {styles.sizeBoxText}>
                {price > 0 ? `+${formatPrice(price)}đ` : ""}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    sizeBox : {
        borderWidth : 1,
        borderColor : '#d1d1d1',
        minWidth : 120,
        alignItems : 'center',
        padding : 8,
        marginBottom : 8,
    },
    sizeBoxText : {
        fontSize : 16,
    },   
})

export default SizeOption