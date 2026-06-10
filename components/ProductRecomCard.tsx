import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import AppText from './AppText';

interface ProductRecommCardProps {
  image: string;
  title: string;
  description?: string;
  showDesc?: boolean;
  price: number;
  discountPrice: number;
  onPress?: () => void;
}

export default function ProductRecommCard({
  image,
  title,
  description,
  showDesc = false,
  price,
  discountPrice,
  onPress,
}: ProductRecommCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      className="w-[48%] mb-5"
    >
      <Image
        source={{ uri: image }}
        className="w-full h-[180px] rounded-[18px]"
        resizeMode="cover"
      />

      <AppText
        variant="medium"
        className="mt-3 text-[15px] text-[#2A2A2A]"
        numberOfLines={2}
      >
        {title}
      </AppText>

      {showDesc && description && (
        <AppText
          variant="regular"
          className="mt-1 text-[13px] text-[#6B7280]"
          numberOfLines={2}
        >
          {description}
        </AppText>
      )}

      <View className="mt-2 flex-row items-center">
        <AppText
          variant="semiBold"
          className="text-[18px] text-black"
        >
          ₹{discountPrice}
        </AppText>

        <AppText
          variant="regular"
          className="ml-2 text-[14px] text-[#9CA3AF] line-through"
        >
          ₹{price}
        </AppText>
      </View>
    </TouchableOpacity>
  );
}