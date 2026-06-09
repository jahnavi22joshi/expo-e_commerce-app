import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppText from "./AppText";

type ShippingAddressCardProps = {
  city: string;
  setCity: (value: string) => void;
  zip: string;
  setZip: (value: string) => void;
};

const ShippingAddressCard = ({
  city,
  setCity,
  zip,
  setZip,
}: ShippingAddressCardProps) => {
  return (
    <View className="mt-5 mx-5 bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
      {/* Header */}
      <View className="flex-row items-center mb-6">
        <Ionicons
          name="location-outline"
          size={26}
          color="#111827"
        />

        <AppText
          variant="bold"
          className="text-2xl text-black ml-3"
        >
          Shipping Address
        </AppText>
      </View>

      {/* Address Type */}
      <View className="mb-4">
        <AppText
          variant="medium"
          className="text-base text-black mb-2"
        >
          Address Type
        </AppText>

        <TextInput
          placeholder="Home"
          className="border border-gray-300 rounded-xl px-4 py-4 text-base"
        />
      </View>

      {/* Street Address */}
      <View className="mb-4">
        <AppText
          variant="medium"
          className="text-base text-black mb-2"
        >
          Street Address
        </AppText>

        <TextInput
          placeholder="123 Main St"
          className="border border-gray-300 rounded-xl px-4 py-4 text-base"
        />
      </View>

      {/* City & Zip */}
      <View className="flex-row justify-between mb-4">
        <View className="w-[48%]">
          <AppText
            variant="medium"
            className="text-base text-black mb-2"
          >
            City
          </AppText>

          <TextInput
            value={city}
            onChangeText={setCity}
            placeholder="Mumbai"
            placeholderTextColor="#9CA3AF"
            className="border border-gray-300 rounded-xl px-4 py-4 text-base"
          />
        </View>

        <View className="w-[48%]">
          <AppText
            variant="medium"
            className="text-base text-black mb-2"
          >
            ZIP Code
          </AppText>

          <TextInput
            value={zip}
            onChangeText={setZip}
            placeholder="400001"
            placeholderTextColor="#9CA3AF"
            keyboardType="number-pad"
            className="border border-gray-300 rounded-xl px-4 py-4 text-base"
          />
        </View>
      </View>

      {/* State & Country */}
      <View className="flex-row justify-between">
        <View className="w-[48%]">
          <AppText
            variant="medium"
            className="text-base text-black mb-2"
          >
            State
          </AppText>

          <TouchableOpacity className="border border-gray-300 rounded-xl px-4 py-4 flex-row items-center justify-between">
            <AppText
              variant="regular"
              className="text-gray-400"
            >
              Select State
            </AppText>

            <Ionicons
              name="chevron-down"
              size={20}
              color="#6B7280"
            />
          </TouchableOpacity>
        </View>

        <View className="w-[48%]">
          <AppText
            variant="medium"
            className="text-base text-black mb-2"
          >
            Country
          </AppText>

          <TouchableOpacity className="border border-gray-300 rounded-xl px-4 py-4 flex-row items-center justify-between">
            <AppText
              variant="regular"
              className="text-black"
            >
              India
            </AppText>

            <Ionicons
              name="chevron-down"
              size={20}
              color="#6B7280"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ShippingAddressCard;