import React from "react";
import { Text, TextProps } from "react-native";

type FontType = "regular" | "medium" | "semiBold" | "bold";

type AppTextProps = TextProps & {
  variant?: FontType;
};

const fontMap: Record<FontType, string> = {
  regular: "Outfit_400Regular",
  medium: "Outfit_500Medium",
  semiBold: "Outfit_600SemiBold",
  bold: "Outfit_700Bold",
};

const AppText: React.FC<AppTextProps> = ({
  variant = "regular",
  style,
  ...props
}) => {
  return (
    <Text
      {...props}
      style={[
        { fontFamily: fontMap[variant] },
        style,
      ]}
    />
  );
};

export default AppText;