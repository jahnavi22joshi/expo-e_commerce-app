import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppText from "components/AppText";
import Divider from "components/Divider";
import AppButton from "components/AppButton";
import { router } from "expo-router";

export default function Cart() {
  const [quantity, setQuantity] = useState(1);

  const relatedProducts = [
    {
      id: 1,
      name: "Ankle Support",
      price: 799,
      oldPrice: 999,
      image:
        "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=500",
    },
    {
      id: 2,
      name: "Posture Corrector",
      price: 1149,
      oldPrice: 1499,
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#ffffff]">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row items-center justify-between bg-white px-4 py-4 mt-10">
          <View className="flex-row items-center">
            <TouchableOpacity>
              <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>

            <Ionicons
              name="bag-outline"
              size={22}
              color="#000"
              style={{ marginLeft: 12 }}
            />
            <AppText
              variant="semiBold"
              className="text-[18px] text-black"
            >
              Your Cart (1)
            </AppText>
          </View>

          <View className="rounded-lg bg-[#E8F0FF] px-3 py-2">

            <AppText
              variant="regular"
              className="text-[14px] text-black"
            >
              Guest Cart
            </AppText>
          </View>
        </View>

        {/* Free Shipping */}
        <View className="bg-[#EAF7EE] px-4 py-5">

          <AppText
            variant="semiBold"
            className="text-[16px] text-black"
          >
            🎉 Free Shipping!
          </AppText>

          <View className="mt-4 h-[10px] overflow-hidden rounded-full bg-[#C7E8CF] mb-3">
            <View className="h-full w-full rounded-full bg-[#16A34A]" />
          </View>
          <AppText
            variant="semiBold"
            className="text-[14px] text-black"
          >
            You qualify for free shipping!
          </AppText>
        </View>

        {/* Review Items */}
        <View className="px-4 pt-8">
          <View className="mb-4 flex-row items-center justify-between">
            <AppText
              variant="bold"
              className="text-[18px] text-black"
            >
              Review your items
            </AppText>

            <AppText
              variant="regular"
              className="text-[14px] text-gray-500"
            >
              1 item
            </AppText>
          </View>

          {/* Cart Card */}
          <View className="rounded-3xl bg-white p-4 shadow-sm">
            <View className="flex-row">
              <Image
                source={{
                  uri: "https://pcare.shop/_next/image?url=https%3A%2F%2Fadmin.pcare.shop%2F%2Fuploads%2Fproducts%2Fhighlights%2FC3022_Round_RIng_Pillow__-_4-1768968271704-672031.png&w=1080&q=75",
                }}
                className="h-16 w-16 rounded-full"
              />

              <View className="ml-4 flex-1">
                <AppText
                  variant="bold"
                  className="text-[18px] text-black"
                >
                  Round Ring Pillow
                </AppText>

                <AppText
                  variant="semiBold"
                  className="text-[14px] text-gray-500"
                >
                  Color: Blue

                </AppText>

                <AppText
                  variant="semiBold"
                  className="text-[14px] text-gray-500"
                >
                  Size: Universal
                </AppText>
              </View>

              <View className="items-end">
                <AppText
                  variant="semiBold"
                  className="text-[20px] text-black"
                >
                  ₹1,149
                </AppText>
                <AppText
                  variant="semiBold"
                  className="text-[14px] text-gray-500 line-through"
                >
                  ₹1,449
                </AppText>
                <AppText
                  variant="semiBold"
                  className="text-[14px] text-gray-500"
                >
                  21% off
                </AppText>
              </View>
            </View>

            {/* Quantity */}
            <View className="mt-4 items-center">
              <View className="flex-row items-center rounded-xl border border-gray-400">
                <TouchableOpacity
                  onPress={() =>
                    setQuantity((prev) =>
                      prev > 1 ? prev - 1 : 1
                    )
                  }
                  className="px-4 py-3"
                >
                  <AppText
                    variant="semiBold"
                    className="text-lg text-gray-500"
                  >
                    -
                  </AppText>
                </TouchableOpacity>

                <AppText
                  variant="semiBold"
                  className="text-lg text-gray-500"
                >
                  {quantity}

                </AppText>

                <TouchableOpacity
                  onPress={() => setQuantity(quantity + 1)}
                  className="px-4 py-3"
                >
                  <AppText
                    variant="semiBold"
                    className="text-lg text-gray-500"
                  >
                    +
                  </AppText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Divider */}
        <Divider />

        {/* Related Products */}
        <View className="px-4">
          <AppText
            variant="semiBold"
            className="text-[18px] text-black"
          >
            Related Products
          </AppText>

          <View className="rounded-3xl bg-white p-4">
            <View className="flex-row justify-between">
              {relatedProducts.map((item) => (
                <View key={item.id} className="w-[48%]">
                  <Image
                    source={{ uri: item.image }}
                    className="h-40 w-full rounded-2xl"
                    resizeMode="cover"
                  />

                  <Text
                    numberOfLines={1}
                    className="mt-3 text-base font-semibold text-black"
                  >
                    {item.name}
                  </Text>

                  <View className="mt-1 flex-row items-center">
                    <Text className="text-lg font-bold text-black">
                      ₹{item.price}
                    </Text>

                    <Text className="ml-2 text-sm text-gray-400 line-through">
                      ₹{item.oldPrice}
                    </Text>
                  </View>
                  <AppButton title="View Product" type="primary" onPress={() => { }} />


                </View>
              ))}
            </View>
          </View>
        </View>

        <View className="px-4 mt-6">
          <AppText
            variant="bold"
            className="text-2xl text-black mb-4"
          >
            Price Breakdown
          </AppText>

          <View className="rounded-[24px] border border-[#E5E7EB] bg-white p-7">
            {/* Subtotal */}
            <View className="flex-row items-center justify-between">

              <AppText
                variant="semiBold"
                className="text-xl text-black"
              >
                Subtotal
              </AppText>
              <AppText
                variant="semiBold"
                className="text-xl text-black"   >
                ₹1,149
              </AppText>
            </View>

            {/* Savings */}
            <View className="mt-5 flex-row items-center justify-between">

              <AppText
                variant="semiBold"
                className="text-green-600"
              >
                You save
              </AppText>
              <AppText
                variant="semiBold"
                className="text-x text-green-600"   >
                - ₹300
              </AppText>
            </View>

            {/* Divider */}
            <View className="my-5 h-[1px] bg-[#E5E7EB]" />

            {/* Total */}
            <View className="flex-row items-center justify-between">

              <AppText
                variant="semiBold"
                className="text-xl text-black"   >
                Total Price
              </AppText>
              <AppText
                variant="semiBold"
                className="text-xl text-black"   >
                ₹1,149
              </AppText>
            </View>
          </View>
        </View>

        <View className="h-28" />
      </ScrollView>

      {/* Bottom Section */}
      <View className="border-t border-gray-200 bg-white px-4 py-6">
        <View className="flex-row items-center justify-between">

          <AppText
            variant="semiBold"
            className="text-[18px] text-black"
          >
            Total Price
          </AppText>
          <AppText
            variant="semiBold"
            className="text-[18px] text-black "
          >
            ₹1,149
          </AppText>
        </View>

        <View className="w-[100%] self-center">
          <AppButton title="Proceed to Checkout" type="primary" onPress={() => { router.push('/product/Checkout') }} />
        </View>
        <View className="w-[100%] self-center">
          <AppButton title="Continue Shopping" type="outline" onPress={() => { }} />
        </View>
      </View>
    </SafeAreaView>
  );
}