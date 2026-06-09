import React from "react";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppText from "./AppText";

type PersonalInformationCardProps = {
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
};

const PersonalInformationCard = ({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
}: PersonalInformationCardProps) => {
  return (
    <View className="mt-5 mx-5 bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
      <View className="flex-row items-center mb-6">
        <Ionicons
          name="person"
          size={26}
          color="#111827"
        />

        <AppText
          variant="bold"
          className="text-2xl text-black ml-3"
        >
          Personal Information
        </AppText>
      </View>

      {/* Name & Email */}
      <View className="flex-row justify-between mb-4">
        {/* Name */}
        <View className="w-[48%]">
          <AppText
            variant="medium"
            className="text-base text-black mb-2"
          >
            Name
          </AppText>

          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="jahN"
            placeholderTextColor="#9CA3AF"
            className="border border-gray-300 rounded-xl px-4 py-4 text-base"
          />
        </View>

        {/* Email */}
        <View className="w-[48%]">
          <AppText
            variant="medium"
            className="text-base text-black mb-2"
          >
            Email
          </AppText>

          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="400001"
            placeholderTextColor="#9CA3AF"
            keyboardType="number-pad"
            className="border border-gray-300 rounded-xl px-4 py-4 text-base"
          />
        </View>
      </View>

      {/* Phone Number */}
      <View className="mb-4">
        <AppText
          variant="medium"
          className="text-base text-black mb-2"
        >
          Phone Number
        </AppText>

        <TextInput
          value={phone}
          onChangeText={setPhone}
          placeholder="Phone No."
          placeholderTextColor="#9CA3AF"
          className="border border-gray-300 rounded-xl px-4 py-4 text-base"
        />
      </View>
    </View>
  );
};

export default PersonalInformationCard;