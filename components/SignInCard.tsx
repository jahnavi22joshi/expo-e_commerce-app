import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import AppText from "./AppText";

type SignInCardProps = {
  onPress?: () => void;
};

const SignInCard: React.FC<SignInCardProps> = ({
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      className="rounded-[15px] overflow-hidden my-2"
    >
      <LinearGradient
        colors={["#090909", "#0E1524", "#1F2C3D"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        className="h-[70px] px-5 flex-row items-center justify-between"
      >
        <View className="flex-row items-center">
          <View style={{ borderRadius: 50 }} className="w-12 h-12 rounded-full bg-gray-600 items-center justify-center">
            <Ionicons
              name="person-outline"
              size={16}
              color="#FFFFFF"
            />
          </View>

          <View className="ml-2">
            <AppText
              variant="bold"
              className="text-white text-[16px]"
            >
              Sign In
            </AppText>

            <AppText
              variant="regular"
              className="text-[#A1A1AA] text-[12px]"
            >
              Access your account
            </AppText>
          </View>
        </View>

        <Ionicons
          name="chevron-forward"
          size={16}
          color="#FFFFFF"
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default SignInCard;