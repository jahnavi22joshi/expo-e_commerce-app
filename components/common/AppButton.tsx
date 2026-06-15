import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import AppText from "./AppText";

type AppButtonProps = {
  title: string;
  onPress?: () => void;
  type?: "primary" | "google" | "outline";
  icon?: any;
};

const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  type = "primary",
  icon,
}) => {
  if (type === "primary") {
    return (
      <TouchableOpacity
        onPress={onPress}
        className="bg-black py-3.5 rounded-xl mt-7"
      >
        <AppText
          variant="semiBold"
          className="text-white text-center text-base"
        >
          {title}
        </AppText>
      </TouchableOpacity>
    );
  }

  if (type === "google") {
    return (
      <TouchableOpacity
        onPress={onPress}
        className="flex-row justify-center items-center border border-gray-300 py-3 rounded-xl"
      >
        {icon && (
          <Image source={icon} style={{ width: 20, height: 20 }} />
        )}

        <AppText
          variant="medium"
          className="ml-2 text-black"
        >
          {title}
        </AppText>
      </TouchableOpacity>
    );
  }

  if (type === "outline") {
    return (
      <TouchableOpacity
        onPress={onPress}
        className="bg-white border border-black py-3.5 rounded-xl mt-7"
      >
        <AppText
          variant="bold"
          className="text-black text-center text-base"
        >
          {title}
        </AppText>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-white border border-black py-3.5 rounded-xl mt-7"
    >
      <AppText
        variant="semiBold"
        className="text-black text-center text-base"
      >
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default AppButton;