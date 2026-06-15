import React from "react";
import { View, Text } from "react-native";
import AppText from "./AppText";

type DividerProps = {
  text?: string;
};

const Divider: React.FC<DividerProps> = ({ text }) => {
  return (
    <View className="flex-row items-center my-6">
      <View className="flex-1 h-px bg-gray-300" />

      {text ? (
        <AppText variant="regular" className="mx-2.5 text-gray-400">
          {text}
        </AppText>
      ) : null}

      <View className="flex-1 h-px bg-gray-300" />
    </View>
  );
};

export default Divider;