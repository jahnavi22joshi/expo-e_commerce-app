import { View, Text } from 'react-native'
import React from 'react'
import BulkOrdering from './bulk-ordering'
import AnimatedNumbers from "react-native-animated-numbers";


const Blog = () => {
  return (
    <View className='flex-1 justify-center self-center'>
      <Text>Blog</Text>
      <BulkOrdering end={250} />
      {/* <AnimatedNumbers
        animateToNumber={250}
        fontStyle={{
          fontSize: 32,
          fontWeight: "700",
        }}
      /> */}
    </View>
  )
}

export default Blog