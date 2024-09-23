import {View, Text, FlatList, Image, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native'
import axios from 'axios' 
import React, { useEffect, useState } from 'react';
const screenWidth = Dimensions.get('window').width ;
import Food from '../../../components/Food'

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
              const sea_pizza = await axios.get('food/sea_pizza');
              sea_pizza.data.forEach(item => {addItem(item)});

              const mixed_pizza = await axios.get('food/mixed_pizza');
              mixed_pizza.data.forEach(item => {addItem(item)});

              const tradition_pizza = await axios.get('food/tradition_pizza');
              tradition_pizza.data.forEach(item => {addItem(item)});

              const unique_pizza = await axios.get('food/unique_pizza');
              unique_pizza.data.forEach(item => {addItem(item)});
            } catch (error) {
              console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return(
        <Food foodItems={items} generateKey={generateKey}/>
    )
}

export default AllPizza