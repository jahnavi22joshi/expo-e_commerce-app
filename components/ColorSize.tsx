import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AppText from "./AppText";

const colors = [
  { id: 1, name: "Blue", value: "#0A38F5" },
  { id: 2, name: "Red", value: "#E53935" },
  { id: 3, name: "Green", value: "#43A047" },
];

const sizes = ["S", "M", "L"];

export default function ColorSize() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <View className="mt-4 rounded-[24px] border border-[#D8DCE3] bg-white p-5">
      {/* Color Section */}
      <AppText
        variant="semiBold"
        className="text-[18px] text-[#6B7280]"
      >  Color:{" "}
        <AppText
          variant="semiBold"
          className="text-[18px] text-black"
        >
          {selectedColor.name}
        </AppText>
      </AppText>

      <View className="mt-4 flex-row items-center gap-3">
        {colors.map((color) => {
          const isSelected = selectedColor.id === color.id;

          return (
            <TouchableOpacity
              key={color.id}
              activeOpacity={0.8}
              onPress={() => setSelectedColor(color)}
              className={`items-center justify-center rounded-full ${isSelected
                ? "h-[32px] w-[32px] border-2 border-[#3B82F6]"
                : "h-[32px] w-[32px] border border-[#D1D5DB]"
                }`}
            >
              <View
                style={{ backgroundColor: color.value }}
                className="h-[20px] w-[20px] rounded-full" //46
              />
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Size Section */}
      <View className="mt-6">

        <AppText
          variant="semiBold"
          className="text-[18px] text-[#6B7280]"
        > Size:{" "}
          <AppText
            variant="semiBold"
            className="text-[18px] text-black"
          >
            {selectedSize}
          </AppText>
        </AppText>

        <View className="mt-4 flex-row gap-3">
          {sizes.map((size) => {
            const isSelected = selectedSize === size;

            return (
              <TouchableOpacity
                key={size}
                activeOpacity={0.8}
                onPress={() => setSelectedSize(size)}
                className={`h-10 w-10 items-center justify-center rounded-xl border ${isSelected
                  ? "border-[#3B82F6] bg-[#EFF6FF]"
                  : "border-[#D1D5DB] bg-white"
                  }`}
              >
                <Text
                  className={`font-semibold ${isSelected
                    ? "text-[#2563EB]"
                    : "text-[#374151]"
                    }`}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}