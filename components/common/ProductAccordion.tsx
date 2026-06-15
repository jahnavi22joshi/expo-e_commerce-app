import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppText from "./AppText";

const accordionData = [
  {
    id: 1,
    title: "Description",
    content:
      "This premium product is designed for daily use and long-lasting comfort.",
  },
  {
    id: 2,
    title: "Manufactor Details",
    content:
      "Provides pain relief, supports recovery, and improves comfort.",
  },
  {
    id: 3,
    title: "Used Materials",
    content:
      "Natural herbs, essential oils, and carefully selected ingredients.",
  },
  {
    id: 4,
    title: "Care Instruction",
    content:
      "Apply gently on the affected area and massage for 2-3 minutes.",
  },
  {
    id: 5,
    title: "Return and Refund",
    content:
      "For external use only. Keep away from children and direct sunlight.",
  },
];

type Props = {
  isFaq?: boolean;
};

export default function ProductAccordion({
  isFaq = false,
}: Props) {
  const [activeId, setActiveId] = useState<number | null>(1);

  const handleToggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <View
      className={`mt-8 bg-white ${isFaq ? "" : "px-4 border border-gray-200 rounded-3xl"
        }`}
    >
      {accordionData.map((item, index) => {
        const isOpen = activeId === item.id;

        return (
          <View
            key={item.id}
            className={
              isFaq
                ? "mb-4 border border-gray-200 rounded-2xl px-4 bg-white"
                : `border-b border-gray-200 ${index === accordionData.length - 1
                  ? "border-b-0"
                  : ""
                }`
            }
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => handleToggle(item.id)}
              className="flex-row items-center justify-between py-5"
            >
              <AppText
                variant="semiBold"
                className="text-[#111827] text-xl"
              >
                {item.title}
              </AppText>

              <Ionicons
                name={
                  isOpen
                    ? "chevron-up-outline"
                    : "chevron-down-outline"
                }
                size={22}
                color="#374151"
              />
            </TouchableOpacity>

            {isOpen && (
              <View className="pb-5">
                <AppText
                  variant="regular"
                  className="text-gray-600 text-sm leading-6"
                >
                  {item.content}
                </AppText>
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
}