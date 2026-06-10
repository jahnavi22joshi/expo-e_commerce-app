import React from "react";
import { View } from "react-native";
import AppText from "./AppText";

type AuthHeaderProps = {
  title: string;
  subtitle: string;
  center?: boolean;
  titleColor?: string;
  subtitleColor?: string;
};

const AuthHeader: React.FC<AuthHeaderProps> = ({
  title,
  subtitle,
  center,
  titleColor = "text-black",
  subtitleColor = "text-[#6b7280]",
}) => {
  return (
    <View>
      <AppText
        variant="bold"
        className={`text-[30px] ${titleColor} ${
          center ? "text-center w-[80%] self-center" : ""
        }`}
      >
        {title}
      </AppText>

      <AppText
        variant="regular"
        className={`${subtitleColor} ${
          center ? "text-center w-[80%] self-center" : ""
        }`}
      >
        {subtitle}
      </AppText>
    </View>
  );
};

export default AuthHeader;