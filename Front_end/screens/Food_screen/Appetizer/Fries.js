import {View, Text, FlatList, Image, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Food from '../../../components/Food';

const Fries = () =>{
    const [items, setItems] = useState([]);
    useEffect(() => {
        // Fetch data from the backend
        const fetchData = async () => {
            try {
              const response = await axios.get('food/fries');
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

export default Fries