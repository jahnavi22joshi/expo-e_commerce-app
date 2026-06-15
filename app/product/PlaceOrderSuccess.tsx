import React from "react";
import {
  SafeAreaView,
  View,
} from "react-native";
import LottieView from "lottie-react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppText from "components/common/AppText";
import AppButton from "components/common/AppButton";
import { router } from "expo-router";


const PlaceOrderSuccess = () => {
  return (
    <SafeAreaView className="flex-1">
      <LinearGradient
        colors={["#F8FAFC", "#EEF4FF"]}
        style={{ flex: 1 }}
      >
        <View className="flex-1 justify-center px-6">
          {/* Animation */}

          <View className="items-center">
            <LottieView
              source={require("../../assets/icons/place-order.json")}
              autoPlay
              loop={false}
              style={{
                width: 260,
                height: 260,
              }}
            />
          </View>

          {/* Badge */}

          <View className="self-center bg-green-100 px-4 py-2 rounded-full">
            <AppText
              variant="semiBold"
              className="text-green-700"
            >
              Order Confirmed
            </AppText>
          </View>

          {/* Title */}

          <AppText
            variant="bold"
            className="text-3xl text-center text-black mt-6"
          >
            Thank You!
          </AppText>

          <AppText
            variant="regular"
            className="text-center text-gray-500 text-base mt-3 leading-6"
          >
            Your order has been placed successfully and
            is now being processed.
          </AppText>

          {/* Order Card */}

          <View className="bg-white rounded-3xl p-5 mt-8 border border-gray-100">
            <View className="flex-row justify-between">
              <AppText
                variant="medium"
                className="text-gray-500"
              >
                Order ID
              </AppText>

              <AppText
                variant="bold"
                className="text-black"
              >
                #PC124578
              </AppText>
            </View>

            <View className="h-px bg-gray-100 my-4" />

            <View className="flex-row justify-between">
              <AppText
                variant="medium"
                className="text-gray-500"
              >
                Estimated Delivery
              </AppText>

              <AppText
                variant="bold"
                className="text-black"
              >
                2-4 Days
              </AppText>
            </View>
          </View>

          {/* Buttons */}

          <View className="mt-8">
            <AppButton
              title="Continue Shopping"
              onPress={() => { router.replace('/(drawer)/(tabs)') }}
            />
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default PlaceOrderSuccess;