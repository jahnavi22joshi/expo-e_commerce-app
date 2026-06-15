import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import FormInput from 'components/common/FormInput';
import AppButton from 'components/common/AppButton';
import AuthHeader from 'components/auth/AuthHeader';
import AuthFooter from 'components/auth/AuthFooter';
import Divider from 'components/common/Divider';
import { validateEmail, validateFullName, validatePassword } from 'utils/validation';
import { TEXT } from 'constants/text';
import { router } from 'expo-router';
import AppText from 'components/common/AppText';

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginType, setLoginType] = useState<'password' | 'otp'>('password');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    let newErrors = {
      email: "",
      password: "",
    };

    // Email
    if (!validateEmail(email)) {
      newErrors.email = "Enter valid email";
    }

    // Password
    if (!validatePassword(password)) {
      newErrors.password =
        "Password must be at least 6 characters and contain a number";
    }

    setErrors(newErrors);

    const isValid =
      !newErrors.email &&
      !newErrors.password;

    if (isValid) {
      // router.replace('/home');
    }
  };

  const handleSendOtp = () => {
    if (!validateEmail(email)) {
      setErrors({
        ...errors,
        email: 'Enter valid email',
      });
      return;
    }


    // API Call Here

    setOtpSent(true);
  };

  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerStyle={{
        paddingHorizontal: 24,
        paddingTop: 135,
      }}
      showsVerticalScrollIndicator={false}
    >
      {/* Title */}
      <AuthHeader
        title={TEXT.auth.signInTitle}
        subtitle={TEXT.auth.signInSubtitle}
      />

      {/* Login Type Tabs */}
      <TouchableOpacity
        activeOpacity={1}
        className="flex-row bg-gray-100 rounded-xl p-1 mt-6"
      >
        <TouchableOpacity
          onPress={() => setLoginType('password')}
          className={`flex-1 py-3 rounded-xl ${loginType === 'password' ? 'bg-black' : ''
            }`}
        >
          <AppText
            variant="semiBold"
            className={`text-center ${loginType === 'password' ? 'text-white' : 'text-gray-500'
              }`}
          >
            Password
          </AppText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setLoginType('otp')}
          className={`flex-1 py-3 rounded-xl ${loginType === 'otp' ? 'bg-black' : ''
            }`}
        >

          <AppText
            variant="semiBold"
            className={`text-center ${loginType === 'otp' ? 'text-white' : 'text-gray-500'
              }`}
          >
            OTP
          </AppText>
        </TouchableOpacity>
      </TouchableOpacity>

      {loginType === 'password' ? (
        <>
          {/* Email */}
          <FormInput
            label={TEXT.auth.email}
            placeholder={TEXT.auth.emailPlaceholder}
            icon="mail"
            value={email}
            onChangeText={setEmail}
            error={errors.email}
          />

          {/* Password */}
          <FormInput
            label={TEXT.auth.password}
            placeholder={TEXT.auth.passwordPlaceholder}
            icon="lock"
            value={password}
            onChangeText={setPassword}
            isPassword
            error={errors.password}
          />

          <AppText
            variant="semiBold"
            className="text-right text-gray-500 mt-4 color-[#155dfc]"
          >
            Forgot Password?
          </AppText>

          <AppButton
            title="Login"
            onPress={() => {
              router.replace('/(tabs)/');
              handleSubmit()
            }}
            type="primary"
          />
        </>
      ) : (
        <>
          <FormInput
            label="Email"
            placeholder="Enter your email"
            icon="mail"
            value={email}
            onChangeText={setEmail}
            error={errors.email}
          />

          {!otpSent ? (
            <AppButton
              title="Send OTP"
              onPress={handleSendOtp}
              type="primary"
            />
          ) : (
            <>
              <FormInput
                label="OTP"
                placeholder="Enter OTP"
                icon="lock"
                value={otp}
                onChangeText={setOtp}
                keyboardType="number-pad"
              />

              <AppButton
                title="Verify OTP"

                type="primary"
              />
            </>
          )}
        </>
      )}

      {/* Divider */}
      <Divider text={TEXT.auth.or} />

      {/* Google Button */}
      <AppButton
        title={TEXT.auth.googleButton}
        type="google"
        icon={require("../../assets/icons/google.png")}
      />
      {/* Footer */}
      <AuthFooter
        text={TEXT.auth.createAccount}
        actionText={TEXT.auth.signUp}
        onPress={() => router.push('/SignUp')}
      />
    </ScrollView>
  );
};

export default SignIn;
