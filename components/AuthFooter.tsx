import React from "react";
import { Text, TouchableOpacity } from "react-native";
import AppText from "./AppText";

type AuthFooterProps = {
  text: string;
  actionText: string;
  onPress?: () => void;
};

const AuthFooter: React.FC<AuthFooterProps> = ({
  text,
  actionText,
  onPress,
}) => {
  return (
    <AppText className="text-center mt-6 text-gray-500">
      {text}{" "}
      <AppText
        variant="bold"
        className="text-black color-[#155dfc]"
        onPress={onPress}
      >
        {actionText}
      </AppText>
    </AppText>
  );
};

export default AuthFooter;