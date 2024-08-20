import React from 'react'
import {  TouchableOpacity, Image } from 'react-native'

const ScreenHeaderBtn = ({iconUrl, handlePress}) => {
  return (
	<TouchableOpacity  onPress={handlePress}>
		<Image source={iconUrl}
			resizeMode='cover'
			style = {{height : 45,  width : "80%"}}
      	/>
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn
