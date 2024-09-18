import {View, Text, FlatList, Image, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native'
import axios from 'axios';
import { useState, useEffect } from 'react';
const screenWidth = Dimensions.get('window').width ;
import Food from '../../../components/Food'

const Chicken = () =>{
    const [items, setItems] = useState([]);
    useEffect(() => {
        // Fetch data from the backend
        const fetchData = async () => {
            try {
              const response = await axios.get('food/chicken');
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

export default Chicken