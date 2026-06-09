import React from "react";
import { View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AppText from "./AppText";
import Divider from "./Divider";

const FooterCard = () => {
  return (
    <View className="bg-[#08256E] w-full mb-5 mt-5">
      <View className="mt-12 mb-6 mx-4">
        <AppText
          variant="bold"
          className="text-3xl text-white"
        >
          p+ care
        </AppText>

        <AppText
          variant="regular"
          className="text-xl text-gray-400 mt-2"
        >
          p+care is an orthopedic and rehabilitation brand committed to
          enhancing comfort, mobility, and recovery through high-quality
          supports, braces, and wellness solutions. Designed with care and
          trusted by professionals, our products help people move better and
          live healthier every day.
        </AppText>

        <View className="flex-row gap-2 mt-4">
          <TouchableOpacity className="w-8 h-8 rounded-full bg-[#2A4A95] items-center justify-center">
            <AntDesign
              name="instagram"
              size={16}
              color="#fff"
            />
          </TouchableOpacity>

          <TouchableOpacity className="w-8 h-8 rounded-full bg-[#2A4A95] items-center justify-center">
            <AntDesign
              name="youtube"
              size={16}
              color="#fff"
            />
          </TouchableOpacity>
        </View>

        <Divider />

        <AppText
          variant="regular"
          className="text-sm text-gray-400 text-center"
        >
          ©2024 p+care. All rights reserved.
        </AppText>
      </View>
    </View>
  );
};

export default FooterCard;