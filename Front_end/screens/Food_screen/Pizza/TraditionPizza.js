import {View, Text, FlatList, Image, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native'
const screenWidth = Dimensions.get('window').width ;
import axios from 'axios' 
import React, { useEffect, useState } from 'react';
import Food from '../../../components/Food'

const TraditionPizza = () =>{
    const [items, setItems] = useState([]);
    useEffect(() => {
        // Fetch data from the backend
        const fetchData = async () => {
            try {
              const response = await axios.get('food/tradition_pizza');
              setItems(response.data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();
    }, []);

    return(
        <Food foodItems={items} generateKey={(item) => item.id}/>
    )
}

export default TraditionPizza