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
  showAuthor?: boolean;
};

export default function TestimonialCard({ item, showAuthor = true, }: Props) {
  return (
    <View
      className={`rounded-2xl p-5 border border-[#D7E6FF] shadow-sm mx-3 self-center w-[300px] mt-4 ${showAuthor ? 'bg-white' : 'bg-[#F1F6FF]'
        }`}
    >
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
      <View className="flex-row items-center">
        {showAuthor && (
          <View className="h-10 w-10 rounded-full bg-[#0B1F4D] items-center justify-center">
            <Text className="text-white font-bold text-base">
              {item.name.charAt(0).toUpperCase()}
            </Text>
          </View>
        )}

        <Text className={`${showAuthor ? 'ml-3' : ''} text-[#111827] font-semibold`}>
          {item.name}
        </Text>
      </View>

    </View>
  );
}