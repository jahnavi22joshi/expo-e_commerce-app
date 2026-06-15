import React from "react";
import { View } from "react-native";
import AppButton from "../common/AppButton";
import AppText from "../common/AppText";

type PlaceOrderCardProps = {
  onPlaceOrder?: () => void;
};

const PlaceOrderCard = ({
  onPlaceOrder,
}: PlaceOrderCardProps) => {
  return (
    <View className="mt-5 mx-5 bg-white rounded-2xl px-5 py-1 shadow-sm border border-gray-200">
      <AppButton
        title="Place Order"
        onPress={onPlaceOrder}
      />

      <View className="mb-2 mt-4">
        <AppText
          variant="regular"
          className="text-sm text-gray-500 text-center"
        >
          By placing your order, you agree to our Terms of Service and
          Privacy Policy.
        </AppText>
      </View>
    </View>
  );
};

export default PlaceOrderCard;