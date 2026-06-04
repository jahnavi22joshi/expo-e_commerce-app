import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import AppText from "./AppText";

type FormInputProps = {
  label: string;
  placeholder?: string;
  icon: keyof typeof Feather.glyphMap;
  value: string;
  onChangeText: (text: string) => void;
  isPassword?: boolean;

  // 👇 validation added
  error?: string;
  validate?: (value: string) => boolean;
} & TextInputProps;

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  icon,
  value,
  onChangeText,
  isPassword = false,
  error,
  validate,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (text: string) => {
    onChangeText(text);

    // optional live validation
    if (validate) {
      validate(text);
    }
  };

  const hasError = !!error;

  return (
    <View>
      {/* Label */}
      <AppText
        variant="medium"
        className="mt-[20px] text-black"
      >
        {label}
      </AppText>

      {/* Input Box */}
      <View
        className={`flex-row items-center border rounded-xl px-3 mt-2 ${hasError ? "border-red-500" : "border-gray-300"
          }`}
      >
        <Feather name={icon} size={18} color="gray" />

        <TextInput
          placeholder={placeholder}
          style={{ fontFamily: "Outfit_400Regular" }}
          value={value}
          onChangeText={handleChange}
          className="flex-1 p-3 text-black"
          secureTextEntry={isPassword ? !showPassword : false}
          placeholderTextColor="#9ca3af"
          {...rest}
        />

        {/* Eye icon only for password */}
        {isPassword && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Feather
              name={showPassword ? "eye" : "eye-off"}
              size={18}
              color="gray"
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Error message */}
      {error ? (
        <AppText className="text-red-500 text-sm mt-1">
          {error}
        </AppText>
      ) : null}
    </View>
  );
};

export default FormInput;