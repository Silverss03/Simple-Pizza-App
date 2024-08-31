import {View, Text, FlatList, Image, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native'
import axios from 'axios' 
import React, { useEffect, useState } from 'react';
const screenWidth = Dimensions.get('window').width ;

const AllPizza = () =>{
    const [items, setItems] = useState([]);
    let keyCounter = 1;

    const addItem = (item) => {
        setItems((prevItems) => [...prevItems, item]);
    };

    const generateKey = () => {
        keyCounter += 1;
        return keyCounter.toString();
    };

    useEffect(() => {
        // Fetch data from the backend
        const fetchData = async () => {
            try {
              const sea_pizza = await axios.get('http://10.0.2.2:3000/api/food/sea_pizza');
              sea_pizza.data.forEach(item => {addItem(item)});

              const mixed_pizza = await axios.get('http://10.0.2.2:3000/api/food/mixed_pizza');
              mixed_pizza.data.forEach(item => {addItem(item)});

              const tradition_pizza = await axios.get('http://10.0.2.2:3000/api/food/tradition_pizza');
              tradition_pizza.data.forEach(item => {addItem(item)});

              const unique_pizza = await axios.get('http://10.0.2.2:3000/api/food/unique_pizza');
              unique_pizza.data.forEach(item => {addItem(item)});
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();
    }, []);

    const renderItem = ({item}) => {
        const imageUrl = `http://10.0.2.2:3000${item.img}`;
        return (
            <TouchableOpacity>
                <View style={{flexDirection: 'row', textAlign: 'left', fontSize: 15, backgroundColor: 'white', width: screenWidth, marginBottom : 16}}>
                    <Image style={{width: 170, height: 170}} source={{uri : imageUrl}} />
                    <View style={{margin: 12, flex: 1}}>
                        <Text style={{marginBottom: 4, fontSize: 20}}>{item.name}</Text>
                        <View>
                            <Text style={{marginBottom: 60, fontSize: 16, flexShrink: 1, width: '100%'}}>{item.des}</Text>
                        </View>
                        <Text style={{fontSize: 18}}>{item.price}đ</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    return(
        <SafeAreaView >
            <FlatList data = {items}
                    keyExtractor = {generateKey}
                    renderItem = {renderItem}
                    initialNumToRender={5}
                    >
                    
            </FlatList>
        </SafeAreaView>
    )
}

export default AllPizza