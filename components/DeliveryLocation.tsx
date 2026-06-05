import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DeliveryLocation = () => {
  const [pincode, setPincode] = useState("");

  const handleCheck = () => {
    console.log("Pincode:", pincode);
  };

  return (
    <View className="bg-white">

      {/* Header */}
      <View className="flex-row items-center mb-4">
        <Ionicons
          name="location-outline"
          size={22}
          color="#111827"
        />

        <Text className="ml-2 text-base font-semibold text-gray-900">
          Check Delivery
        </Text>
      </View>

      {/* Input + Button */}
      <View className="flex-row items-center">
        <TextInput
          value={pincode}
          onChangeText={setPincode}
          placeholder="Enter Pincode"
          keyboardType="numeric"
          maxLength={6}
          className="flex-1 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base text-black"
        />

        <TouchableOpacity
          onPress={handleCheck}
          className="ml-3 rounded-2xl bg-[#08256E] px-5 py-3"
        >
          <Text className="font-semibold text-white">
            Check
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default DeliveryLocation;