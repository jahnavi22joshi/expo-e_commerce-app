import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppText from '../common/AppText';

export default function CustomTabBar({
    state,
    descriptors,
    navigation,
}: any) {
    return (
        <View
            style={{
                position: 'absolute',
                bottom: 20,
                left: 16,
                right: 16,
                height: 78,
                backgroundColor: '#fff',
                borderRadius: 24,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.1,
                shadowRadius: 12,
                elevation: 10,
            }}
        >
            {state.routes.map((route: any, index: number) => {
                const isFocused = state.index === index;

                const onPress = () => {
                    navigation.navigate(route.name);
                };

                const getIcon = () => {
                    switch (route.name.toLowerCase()) {
                        case 'index':
                            return 'home';

                        case 'search':
                            return 'search-outline';

                        case 'cart':
                            return 'cart-outline';

                        case 'track':
                            return 'location-outline';

                        case 'profile':
                            return 'person-outline';

                        default:
                            return 'bag';
                    }
                };

                // CENTER BUTTON
                if (route.name === 'cart') {
                    return (
                        <TouchableOpacity
                            key={route.key}
                            onPress={onPress}
                            activeOpacity={0.8}
                            style={{
                                position: 'absolute',
                                top: -28,
                                alignSelf: 'center',
                            }}
                        >
                            <View
                                style={{
                                    width: 58,
                                    height: 58,
                                    borderRadius: 29,
                                    backgroundColor: '#000',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Ionicons
                                    name="cart-outline"
                                    size={26}
                                    color="#fff"
                                />
                            </View>
                        </TouchableOpacity>
                    );
                }

                const label = (() => {
                    switch (route.name) {
                        case 'index':
                            return 'Home';

                        case 'Search':
                            return 'Search';

                        case 'Cart':
                            return 'Cart';

                        case 'TrackOrder':
                            return 'Orders';

                        case 'Profile':
                            return 'Profile';

                        default:
                            return route.name;
                    }
                })();
                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={onPress}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                        }}
                    >
                        <Ionicons
                            name={getIcon()}
                            size={24}
                            color={isFocused ? '#111111' : '#C8C8C8'}
                        />

                        <AppText
                            variant={isFocused ? 'semiBold' : 'medium'}
                            style={{
                                marginTop: 4,
                                fontSize: 12,
                                color: isFocused ? '#111111' : '#C8C8C8',
                            }}
                        >
                            {label}
                        </AppText>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}