import React from "react";
import { View, Text } from "react-native";

type TestimonialItem = {
  id: number;
  title: string;
  description: string;
  name: string;
  rating: number;
};

type Props = {
  item: TestimonialItem;
};

export default function TestimonialCard({ item }: Props) {
  return (
    <View className="bg-[#F1F6FF] rounded-2xl p-5 border border-[#D7E6FF] shadow-sm mx-3 self-center w-[300px] mt-4 mb">

      {/* Stars */}
      <View className="flex-row mb-3">
        {[...Array(item.rating)].map((_, index) => (
          <Text key={index} className="text-yellow-500 text-lg">
            ★
          </Text>
        ))}
      </View>

      {/* Title */}
      <Text className="text-[#111827] font-bold text-lg mb-2">
        {item.title}
      </Text>

      {/* Description */}
      <Text className="text-[#4B5563] text-sm leading-5 mb-4">
        {item.description}
      </Text>

      {/* Author */}
      <Text className="text-[#111827] font-semibold">
        {item.name}
      </Text>

    </View>
  );
}