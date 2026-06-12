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
import { Picker } from "@react-native-picker/picker";

type DropdownOption = {
  label: string;
  value: string;
};

type FormInputProps = {
  label: string;
  placeholder?: string;
  icon?: keyof typeof Feather.glyphMap;
  value: string;
  onChangeText: (text: string) => void;

  type?: "text" | "dropdown";

  options?: DropdownOption[];

  isPassword?: boolean;
  isUpperCaseLabel?: boolean;
  required?: boolean;

  error?: string;
  validate?: (value: string) => boolean;
} & TextInputProps;

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  icon,
  value,
  onChangeText,

  type = "text",
  options = [],

  isPassword = false,
  isUpperCaseLabel = false,
  required = false,

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
      <View className="flex-row items-center mt-[20px]">
        <AppText
          variant="medium"
          className={`text-black ${isUpperCaseLabel ? "uppercase tracking-wider" : ""
            }`}
        >
          {label}
        </AppText>

        {required && (
          <AppText className="text-red-500 ml-1">
            *
          </AppText>
        )}
      </View>

      {/* Input Box */}
      <View
        className={`flex-row items-center border rounded-xl px-3 mt-2 ${hasError ? "border-red-500" : "border-gray-300"
          }`}
      >
        {icon && (
          <Feather
            name={icon}
            size={18}
            color="gray"
          />
        )}

        {type === "dropdown" ? (
          <Picker
            selectedValue={value}
            onValueChange={onChangeText}
            style={{
              flex: 1,
            }}
          >
            <Picker.Item
              label={placeholder || "Select"}
              value=""
            />

            {options.map((option) => (
              <Picker.Item
                key={option.value}
                label={option.label}
                value={option.value}
              />
            ))}
          </Picker>
        ) : (
          <TextInput
            placeholder={placeholder}
            style={{ fontFamily: "Outfit_400Regular" }}
            value={value}
            onChangeText={handleChange}
            className={`flex-1 p-3 text-black ${icon ? "ml-2" : ""
              }`}
            secureTextEntry={isPassword ? !showPassword : false}
            placeholderTextColor="#9ca3af"
            {...rest}
          />
        )}

        {isPassword && type !== "dropdown" && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
          >
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