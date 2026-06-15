import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppText from "../common/AppText";

const PaymentMethodCard = () => {
  const [selectedMethod, setSelectedMethod] = useState("cod");

  const paymentMethods = [
    {
      id: "cod",
      title: "Cash on\nDelivery",
      description: "Pay at the\ntime of\ndelivery",
    },
    {
      id: "razorpay",
      title: "Pay with\nRazorpay",
      description: "Pay securely\nusing UPI,\nCards,\nWallets &\nmore",
    },
  ];

  return (
    <View className="mt-5 mx-5 bg-white rounded-2xl p-5 border border-gray-200">
      {/* Header */}
      <View className="flex-row items-center mb-6">
        <Ionicons
          name="card-outline"
          size={24}
          color="#000"
        />

        <AppText
          variant="bold"
          className="text-[22px] text-black ml-3"
        >
          Payment Method
        </AppText>
      </View>

      {/* Methods */}
      <View className="flex-row justify-between">
        {paymentMethods.map((item) => {
          const isSelected = selectedMethod === item.id;

          return (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.8}
              onPress={() => setSelectedMethod(item.id)}
              className={`w-[48%] rounded-xl px-5 py-4 min-h-[160px]
                ${isSelected
                  ? "border-2 border-black"
                  : "border border-gray-300"
                }`}
            >
              <View className="items-center flex-row">
                <Ionicons
                  name="card-outline"
                  size={16}
                  color="#000"
                />

                <AppText
                  variant="medium"
                  className="text-black text-[16px] leading-6 mt-2 ml-3"
                >
                  {item.title}
                </AppText>

              </View>
              <View className="ml-8">
                <AppText
                  variant="regular"
                  className="text-gray-500 text-[12px] leading-4 mt-3"
                >
                  {item.description}
                </AppText>
              </View>

            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default PaymentMethodCard;