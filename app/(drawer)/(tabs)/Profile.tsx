import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import AppText from "components/AppText";
import AppButton from "components/AppButton";

const Profile = () => {
  const [gender, setGender] = useState("Male");

  return (
    <SafeAreaView className="flex-1 bg-white">
      

      {/* Header */}
      <View className="flex-row items-center px-5 pt-3 mt-10">
        <Ionicons name="arrow-back" size={24} color="black" />
        <AppText className="flex-1 text-center text-lg" variant="bold">
          Profile
        </AppText>
      </View>

      {/* Avatar */}
      <View className="items-center mt-4">
        <View className="relative">
          <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5hpWrowGuXEFM16QVtrAN8N_evaadcM9a9g&s" }}
            className="w-28 h-28 rounded-full"
          />

          <TouchableOpacity className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow">
            <MaterialIcons name="edit" size={18} color="#B07D3C" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Form */}
      <View className="px-5 mt-4">

        {/* First Name */}
        <AppText className="text-gray-700 mb-1">
          First Name
        </AppText>
        <TextInput
          placeholder="John"
          className="bg-white rounded-xl px-4 py-3 mb-4"
        />

        {/* Last Name */}
        <AppText className="text-gray-700 mb-1">
          Last Name
        </AppText>
        <TextInput
          placeholder="William"
          className="bg-white rounded-xl px-4 py-3 mb-4"
        />

        {/* Email */}
        <AppText className="text-gray-700 mb-1">
          Email Address
        </AppText>
        <TextInput
          placeholder="johnwilliam@gmail.com"
          className="bg-white rounded-xl px-4 py-3 mb-4"
        />

        {/* DOB */}
        <AppText className="text-gray-700 mb-1">
          Date of Birth
        </AppText>
        <View className="bg-white rounded-xl px-4 py-3 flex-row items-center justify-between mb-4">
          <AppText className="text-gray-500">
            12 February, 2001
          </AppText>
          <MaterialIcons name="calendar-today" size={18} color="gray" />
        </View>

        {/* Gender */}
        <AppText className="text-gray-700">
          Gender
        </AppText>

        <View className="flex-row gap-3">

          <View className="w-[48%]">
            <AppButton
              title="Male"
              type={gender === "Male" ? "primary" : "outline"}
              onPress={() => setGender("Male")}
            />
          </View>

          <View className="w-[48%]">
            <AppButton
              title="Female"
              type={gender === "Female" ? "primary" : "outline"}
              onPress={() => setGender("Female")}
            />
          </View>

        </View>

        {/* Save Button */}
        <View className="w-[100%] self-center mb-10">
          <AppButton title="Submit" type="primary" />
        </View>

      </View>
    </SafeAreaView>
  );
};

export default Profile;