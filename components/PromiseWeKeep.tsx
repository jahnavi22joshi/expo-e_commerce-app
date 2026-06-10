import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppText from "./AppText";

type PromiseWeKeepProps = {
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const PromiseWeKeep = ({
  title,
  description,
  icon,
}: PromiseWeKeepProps) => {
  return (
    <View className="bg-white rounded-[22px] p-7 border border-gray-200 mt-8">
      <View className="w-[72px] h-[72px] rounded-[20px] bg-[#233A84] items-center justify-center">
        <Ionicons
          name={icon}
          size={32}
          color="#FFFFFF"
        />
      </View>

      <AppText
        variant="bold"
        className="text-[#0F2A68] text-[22px] mt-6"
      >
        {title}
      </AppText>

      <AppText
        variant="regular"
        className="text-[#4B5563] text-[16px] leading-7 mt-3"
      >
        {description}
      </AppText>
    </View>
  );
};

export default PromiseWeKeep;