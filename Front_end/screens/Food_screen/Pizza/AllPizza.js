import axios from 'axios' 
import React, { useEffect, useState } from 'react';
import Food from '../../../components/Menu/Food'
import generateKey from '../../../utils/generateKey';

const AllPizza = () =>{
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems((prevItems) => [...prevItems, item]);
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