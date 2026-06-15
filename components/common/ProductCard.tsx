import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppText from './AppText';

interface ProductCardProps {
  image: any;
  title: string;
  rating: number;
  reviews: number;
  price: number;
  onPress?: () => void;
}

export default function ProductCard({
  image,
  title,
  rating,
  reviews,
  price,
  onPress,
}: ProductCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      className="w-[160px] mx-3"
    >
      {/* Image */}
      <Image
        source={image}
        className="w-full h-[180px] rounded-[18px]"
        resizeMode="cover"
      />

      {/* Title */}
      <AppText
        variant="medium"
        className="text-[15px] text-[#2A2A2A] mt-3 leading-7"
      >
        {title}
      </AppText>

      {/* Rating */}
      <View className="flex-row items-center mt-2">
        <Ionicons
          name="star"
          size={16}
          color="#F4B400"
        />

        <AppText
          variant="medium"
          className="text-[14px] text-[#4B5563] ml-1"
        >
          {rating}
        </AppText>

        <AppText
          variant="regular"
          className="text-[14px] text-[#6B7280]"
        >
          {' '}
          ({reviews} reviews)
        </AppText>
      </View>

      {/* Price */}
      <AppText
        variant="semiBold"
        className="text-[18px] text-black mt-2"
      >
        ₹{price}
      </AppText>
    </TouchableOpacity>
  );
}