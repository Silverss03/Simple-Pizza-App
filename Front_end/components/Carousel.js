import {View, Image, FlatList, Text, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';

//get screen width
const screenWidth = Dimensions.get('window').width ;
const Carousel = () => {
    //active index of carousel
    const [activeIndex, setActiveIndex] = useState(0);

    //ref for flatlist
    const flatListRef = useRef();
    
	useEffect(() => {
		let interval = setInterval(() => {
			if (activeIndex === Carousel_img.length - 1) {
				flatListRef.current.scrollToIndex({
					index: 0,
					animation: true,
				});
			} else {
				flatListRef.current.scrollToIndex({
					index: activeIndex + 1,
					animation: true,
				});
			}
		}, 2000);

		return () => clearInterval(interval);
	});

    const getItemLayout = (data, index) => {
        return {length : screenWidth, offset : screenWidth * index, index};
    }

    //Carousel images
    const Carousel_img = [
        {
            id : 1,
            img : require('../assets/Carousel_img/1.jpg'),
        },
        {
            id : 2,
            img : require('../assets/Carousel_img/2.jpg'),
        },
        {
            id : 3,
            img : require('../assets/Carousel_img/3.jpg'),
        },
        {
            id : 4,
            img : require('../assets/Carousel_img/4.jpg'),
        },
        {
            id : 5,
            img : require('../assets/Carousel_img/5.jpg'),
        },
        {
            id : 6,
            img : require('../assets/Carousel_img/6.jpg'),
        },
    ];

    //Display Carousel images
    const renderItem = ({item}) => {
        return (
            <View>
                <TouchableOpacity>
                    <Image source = {item.img} 
                    style = {styles.Carousel_img} 
                    resizeMode='contain'/>
                </TouchableOpacity>
            </View>
        );
    }

    //Display Dot indicator
    const renderDotIndicator = () => {
        return Carousel_img.map((item, index) => {
            if(index === activeIndex){
                return (
                    <View 
                        key = {index} 
                        style = {styles.currentdotIndicator}/>
                );
            }
            else{
                return (
                    <View 
                        key = {index} 
                        style = {styles.dotIndicator}/>
                );
            }
        });
    }

    const handleScrool = (event) => {
        const current_pos = event.nativeEvent.contentOffset.x;

        //get current index
        const index = Math.round(current_pos / screenWidth);

        //set active index
        setActiveIndex(index);
    }

    return (
        <View >
            <FlatList
                data = {Carousel_img}
                keyExtractor = {(item) => item.id}
                horizontal
                ref = {flatListRef}
                showsHorizontalScrollIndicator = {false}
                renderItem = {renderItem}
                pagingEnabled = {true}
                onScroll={handleScrool}
                getItemLayout={getItemLayout}
            />
            <View style ={{flexDirection : 'row', justifyContent : 'center', marginTop : 8}}>{renderDotIndicator()}</View>
        </View>
    );
}

export default Carousel;

const styles = StyleSheet.create({
    container:{
        height : 250, 
    },
    Carousel_img:{
        height : 170, 
        width: screenWidth
    },
    currentdotIndicator:{
        height : 10, 
        width : 10, 
        backgroundColor : '#006a31', 
        marginHorizontal : 4, 
        borderRadius : 5
    },
    dotIndicator : {
        height : 10, 
        width : 10, 
        backgroundColor : '#999999', 
        marginHorizontal : 4, 
        borderRadius : 5
    }
})