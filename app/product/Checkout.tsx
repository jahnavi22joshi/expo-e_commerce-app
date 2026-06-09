import React, { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import AppText from "components/AppText";
import AppButton from "components/AppButton";
import PaymentMethodCard from "components/PaymentMethodCard";
import OrderSummaryCard from "components/OrderSummaryCard";
import Divider from "components/Divider";
import PersonalInformationCard from "components/PersonalInformationCard";
import ShippingAddressCard from "components/ShippingAddressCard";
import PlaceOrderCard from "components/PlaceOrderCard";
import FooterCard from "components/FooterCard";

const CheckoutScreen = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("Mumbai");
    const [zip, setZip] = useState("400001");


    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {/* Secure Text */}
                <View className="flex-row items-center mt-2 self-center">
                    <View className="flex-row mt-12">
                        <AntDesign name="safety" size={18} color="black" />

                        <AppText
                            variant="regular"
                            className="text-s text-gray-500 ml-1"
                        >
                            Secure Checkout
                        </AppText>
                    </View>
                    <View className="flex-row mt-12 ml-2 self-center p-2 rounded-3xl border border-gray-200">
                        <Feather name="check-circle" size={18} color="black" />

                        <AppText
                            variant="bold"
                            className="text-s text-black ml-3"
                        >
                            SSL Protected
                        </AppText>
                    </View>
                </View>

                {/* Personal Information */}
                <PersonalInformationCard
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    phone={phone}
                    setPhone={setPhone}
                />

                {/* Shipping Address Card */}
                <ShippingAddressCard
                    city={city}
                    setCity={setCity}
                    zip={zip}
                    setZip={setZip}
                />

                <PaymentMethodCard />

                {/* Place Order */}
                <PlaceOrderCard
                    onPlaceOrder={() => {
                        console.log("Place Order");
                    }}
                />

                <OrderSummaryCard />

                {/* About Us */}
                <FooterCard
                />

            </ScrollView>

        </SafeAreaView>
    );
};

export default CheckoutScreen;