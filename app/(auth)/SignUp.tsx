import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthHeader from 'components/auth/AuthHeader'
import { TEXT } from 'constants/text'
import FormInput from 'components/common/FormInput'
import AppButton from 'components/common/AppButton'
import Divider from 'components/common/Divider'
import AuthFooter from 'components/auth/AuthFooter'
import { router } from 'expo-router';
import { validateEmail, validateFullName, validatePassword } from 'utils/validation'

const SignUp = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirm, setConfirm] = useState<string>("");

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        confirm: "",
    });

    const handleSubmit = () => {
        let newErrors = {
            name: "",
            email: "",
            password: "",
            confirm: "",
        };

        if (!validateFullName(name)) {
            newErrors.name = "Enter valid full name";
        }

        if (!validateEmail(email)) {
            newErrors.email = "Enter valid email";
        }

        if (!validatePassword(password)) {
            newErrors.password =
                "Password must be 6+ chars with number";
        }

        if (!confirm) {
            newErrors.confirm = "Confirm password is required";
        } else if (password !== confirm) {
            newErrors.confirm = "Passwords do not match";
        }

        setErrors(newErrors);
    };

    return (
        <ScrollView
            className="flex-1 bg-white"
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
        >
            {/* Title */}
            <AuthHeader
                title={TEXT.auth.signUpTitle}
                subtitle={TEXT.auth.signUpSubtitle}
            />

            {/* Full Name */}
            <FormInput
                label={TEXT.auth.fullName}
                placeholder={TEXT.auth.fullNamePlaceholder}
                icon="user"
                value={name}
                onChangeText={setName}
                error={errors.name}
            />

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

            {/* Confirm Password */}
            <FormInput
                label={TEXT.auth.confirmPassword}
                placeholder={TEXT.auth.confirmPasswordPlaceholder}
                icon="lock"
                value={confirm}
                onChangeText={setConfirm}
                isPassword
                error={errors.confirm}
            />

            {/* Button */}
            <AppButton
                title={TEXT.auth.createAccountButton}
                onPress={handleSubmit}
                type="primary"
            />

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
                text={TEXT.auth.alreadyHaveAccount}
                actionText={TEXT.auth.signIn}
                onPress={() => router.push('/SignIn')}
            />
        </ScrollView>

    )
}

export default SignUp;

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 24,
        paddingTop: 75,
    },
});