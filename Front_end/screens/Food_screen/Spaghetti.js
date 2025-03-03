import axios from 'axios' 
import React, { useEffect, useState } from 'react';
import Food from '../../components/Menu/Food'

const Spaghetti = () =>{
    const [items, setItems] = useState([]);
    useEffect(() => {
        // Fetch data from the backend
        const fetchData = async () => {
            try {
              const response = await axios.get('food/spaghetti');
              setItems(response.data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();
    }, []);
    return(
        <Food foodItems={items} generateKey={(item) => item.item_id}/>
    )
}

export default Spaghetti