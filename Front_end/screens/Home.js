import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, TouchableOpacity, Image, FlatList } from 'react-native';
import Carousel from '../components/Carousel';
import SafeAreaViewAndroid from '../components/SafeAreaViewAndroid.js';
const screenWidth = Dimensions.get('window').width ;

// Home page images
const Home_items = [
	{
		id : 1 ,
		img : require('../assets/Home_page_img/1.jpg'),
		name : 'Combo 1: "SO DEEP" Vibe 1',
	},
	{
		id : 2 ,
		img : require('../assets/Home_page_img/2.jpg'),
		name : 'Combo 2: "SO DEEP" Vibe 2',

	},
	{
		id : 3 ,
		img : require('../assets/Home_page_img/3.jpg'),
		name : 'Combo 3: "SO DEEP" Vibe 3',

	},
]

const renderItem = ({item}) => {
	return (
		<TouchableOpacity>
			<View style = {{ height : 210, width : 165, margin : 16, backgroundColor : 'white', borderRadius : 7}}>
				<Image  
						source = {item.img} 
						style = {{height : 160, width : 165, marginBottom : 8, borderRadius : 7 }}/>
				<Text style = {{color : "#121212", textAlign : 'center', fontSize : 16}}>{item.name}</Text>
			</View>
		</TouchableOpacity>
	)
}

const Home = () => {
	return (
    <SafeAreaView style={[styles.container, SafeAreaViewAndroid.AndroidSafeArea]}>
		<ScrollView showsVerticalScrollIndicator = {false}>
			<View >

				{/* Carousel component  */}
				<Carousel/>

				{/* Order button */}
				<View style = {styles.textContainer}>
					<Text style = {styles.textStyle}>
					The Pizza Company Xin Chào
					</Text>
				</View>
				<View style = {[styles.orderContainer, styles.Button ]}>
					<Text style = {{marginTop : 20, fontSize : 15, color : "gray"}}>The Pizza Company sẽ giao sản phẩm đến địa chỉ của bạn</Text>
					<TouchableOpacity style = {styles.orderBtn}>
						<Text style = {{color : "white"}}>ĐẶT HÀNG NGAY</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity style = {[styles.orderAgainBtn, styles.Button]}>
						<Text style = {{color : "#3c8d61", fontSize : 16 }}>
							Đặt lại đơn hàng gần nhất
						</Text>
				</TouchableOpacity>

				{/* Best sellers */}
				<View style = {{flex : 1, backgroundColor : 'rgba(211,211,211, 0.5)', paddingBottom : 25}}>
					<View style = {{flexDirection : 'row', 
									justifyContent : 'space-between', 
									marginHorizontal : 16, 
									marginTop : 8}}>
						<Text style = {{color : "red", 
										fontSize : 16, 
										}}>
							Bán chạy nhất
						</Text>
						<TouchableOpacity>
							<Text style = {{color : "#3c8d61", 
											fontSize : 16, 
											textDecorationLine : 'underline'}}>
								Xem thêm 
							</Text>
						</TouchableOpacity>
					</View>
					<View>
						<FlatList data = {Home_items}
									keyExtractor={(item) => item.id}
									horizontal
									showsHorizontalScrollIndicator = {false}
									renderItem={renderItem}
									>
									
						</FlatList>
					</View>
				</View>
				  
			</View>
		</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	textStyle:{
		fontSize: 20, 
		fontWeight: 'bold', 
		color: '#3c8d61', 
		textAlign: 'center', 
		margin: 10 
	},
	textContainer:{
		height : 50, 
		width : screenWidth, 
		marginHorizontal: 12, 
		justifyContent : 'center', 
		flexDirection : 'row',
	},
	Button:{
		borderWidth : 1,
		borderColor : "#rgba(128, 128, 128, 0.4)",
		borderRadius : 10,
		shadowColor : "#rgba(128, 128, 128, 0.7)", 
		shadowOffset : {width : 1, height : 1},
		shadowOpacity : 0.5,
		shadowRadius : 4,
		elevation : 5,
		marginBottom : 16,
		backgroundColor: '#fff'
	},
	orderContainer:{
		height : 150, 
		width : screenWidth * 0.9, 
		marginHorizontal : screenWidth * 0.05,
		alignItems : 'center',
	},
	orderBtn:{
		marginTop : 40, 
		marginBottom : 20,
		justifyContent : 'center', 
		backgroundColor : 'green', 
		width : "80%", 
		flexDirection : 'row', 
		alignItems : 'center',
		height : 45,
		borderRadius : 7},
	orderAgainBtn:{		
		height : 50, 
		width : screenWidth * 0.9, 
		marginHorizontal : screenWidth * 0.05,
		alignItems : 'center',
		justifyContent : 'center',
}
});

export default Home;