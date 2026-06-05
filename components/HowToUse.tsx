import React, { useState } from "react";
import {
    Modal,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HowToUse = () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            {/* Trigger */}
            <View className="mt-4 rounded-3xl border border-gray-200 bg-white p-4">

                <TouchableOpacity
                    onPress={() => setVisible(true)}
                    className="flex-row items-center"
                >
                    <Ionicons
                        name="information-circle-outline"
                        size={20}
                        color="#2563EB"
                    />

                    <Text className="ml-1 text-sm font-medium text-blue-600">
                        How to Use
                    </Text>
                </TouchableOpacity>

            </View>

            {/* Modal */}
            <Modal
                visible={visible}
                transparent
                animationType="fade"
            >
                <View className="flex-1 items-center justify-center bg-black/50 px-5">
                    <View className="w-full rounded-3xl bg-white p-5">

                        <View className="flex-row items-center justify-between">
                            <Text className="text-xl font-bold text-black">
                                How to Use
                            </Text>

                            <TouchableOpacity
                                onPress={() => setVisible(false)}
                            >
                                <Ionicons
                                    name="close"
                                    size={24}
                                    color="#000"
                                />
                            </TouchableOpacity>
                        </View>

                        <Text className="mt-4 leading-6 text-gray-600">
                            1. Apply a small amount on the affected area.
                            {"\n\n"}
                            2. Massage gently for 2-3 minutes.
                            {"\n\n"}
                            3. Use twice daily for best results.
                            {"\n\n"}
                            4. For external use only.
                        </Text>

                        <TouchableOpacity
                            onPress={() => setVisible(false)}
                            className="mt-6 rounded-2xl bg-blue-600 py-3"
                        >
                            <Text className="text-center font-semibold text-white">
                                Got It
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
        </>
    );
};

export default HowToUse;