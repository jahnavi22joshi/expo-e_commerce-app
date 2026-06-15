import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppText from 'components/common/AppText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppButton from 'components/common/AppButton';

const Track = () => {

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center self-center justify-center gap-5">

        {/* Cart Illustration */}
        <MaterialCommunityIcons name="cart-off" size={100} color="black" />

        {/* Heading */}
        <AppText
          variant="bold"
          className="text-[30px] text-center"
        >
          No Order Yet!!
        </AppText>



        {/* Shopping Button */}
        <View className="self-center mb-10" style={{ width: 200 }}>
          <AppButton title="Go Shopping" type="outline" />
        </View>

      </View>
    </SafeAreaView>
  );
};

export default Track;