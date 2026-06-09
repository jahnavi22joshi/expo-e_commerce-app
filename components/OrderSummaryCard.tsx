import React from "react";
import { View, TextInput, Image, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import AppText from "./AppText";

const OrderSummaryCard = () => {
  return (
    <View className="mx-5 bg-white rounded-2xl p-5 border border-gray-200 mt-5">
      {/* Heading */}
      <AppText
        variant="bold"
        className="text-[22px] text-black mb-6"
      >
        Order Summary
      </AppText>

      {/* Product */}
      <View className="flex-row">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2",
          }}
          className="w-14 h-14 rounded-full"
        />

        <View className="flex-1 ml-4">
          <AppText
            variant="medium"
            className="text-[16px] text-black"
          >
            Round Ring
          </AppText>

          <View className="flex-row items-center">
            <AppText
              variant="medium"
              className="text-[16px] text-black"
            >
              Pillow
            </AppText>

            <AppText
              variant="regular"
              className="text-gray-500 ml-2"
            >
              (Universal)
            </AppText>
          </View>

          <AppText
            variant="medium"
            className="text-gray-500 mt-1"
          >
            Qty: 1
          </AppText>
        </View>

        <AppText
          variant="semiBold"
          className="text-[18px] text-black"
        >
          ₹1094.29
        </AppText>
      </View>

      {/* Divider */}
      <View className="h-[1px] bg-gray-200 my-6" />

      {/* Price Details */}
      <View className="gap-y-3">
        <View className="flex-row justify-between">
          <AppText
            variant="medium"
            className="text-[16px] text-black"
          >
            Subtotal
          </AppText>

          <AppText
            variant="medium"
            className="text-[16px] text-black"
          >
            ₹1094.29
          </AppText>
        </View>

        <View className="flex-row justify-between">
          <AppText
            variant="medium"
            className="text-[16px] text-black"
          >
            Tax (5% GST)
          </AppText>

          <AppText
            variant="medium"
            className="text-[16px] text-black"
          >
            ₹54.71
          </AppText>
        </View>

        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center">
            <AppText
              variant="medium"
              className="text-[16px] text-black"
            >
              Shipping
            </AppText>

            <Ionicons
              name="information-circle-outline"
              size={16}
              color="#9CA3AF"
              style={{ marginLeft: 4 }}
            />
          </View>

          <AppText
            variant="medium"
            className="text-[16px] text-black"
          >
            Free
          </AppText>
        </View>
      </View>

      {/* Shipping Note */}
      <AppText
        variant="medium"
        className="text-amber-600 text-s mt-3"
      >
        Enter your pincode for an accurate shipping estimate.
      </AppText>

      {/* Coupon */}
      <View className="flex-row mt-6">
        <View className="flex-1 border border-gray-300 rounded-xl px-4 flex-row items-center">
          <Feather
            name="tag"
            size={18}
            color="#9CA3AF"
          />

          <TextInput
            placeholder="Coupon code"
            placeholderTextColor="#6B7280"
            className="flex-1 ml-3 py-4 text-base"
          />
        </View>

        <TouchableOpacity className="bg-black px-6 ml-3 rounded-xl items-center justify-center">
          <AppText
            variant="semiBold"
            className="text-white text-base"
          >
            Apply
          </AppText>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View className="h-[1px] bg-gray-200 my-6" />

      {/* Total */}
      <View className="flex-row justify-between items-center">
        <AppText
          variant="bold"
          className="text-[20px] text-black"
        >
          Total
        </AppText>

        <AppText
          variant="bold"
          className="text-[20px] text-black"
        >
          ₹1149.00
        </AppText>
      </View>
    </View>
  );
};

export default OrderSummaryCard;