import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import AppText from 'components/common/AppText'
import AuthHeader from 'components/auth/AuthHeader'
import FooterCard from 'components/common/FooterCard'

export default function BlogsDetails() {
    return (
        <View className="flex-1 bg-white">
            <View className="bg-[#08256E] py-3 items-center mt-8">
                <AppText
                    variant="semiBold"
                    className="text-white text-center text-xs"
                >
                    FREE Shipping on orders above ₹699
                </AppText>
            </View>

            {/* Fixed Logo */}
            <View className="h-16 flex-row items-center px-4 bg-white">
                {/* Logo Center */}
                <View className="absolute left-0 right-0 items-center">
                    <Image
                        source={require('../../assets/ppluslogo.jpg')}
                        style={{
                            width: 100,
                            height: 60,
                        }}
                        resizeMode="contain"
                    />
                </View>
            </View>

            <ScrollView>
                <View className='bg-[#000000] max-w-7xl mx-auto px-6 py-16 md:py-24'>
                    <AuthHeader
                        title='Cervical Radiculopathy: Arm Pain Caused by Neck Nerve Compression'
                        subtitle={"by p+care\nAuthor"}
                        titleColor='text-white'
                        subtitleColor='text-white'
                    />
                </View>

                <View className='mt-10'>
                    <Image
                        source={require('../../assets/images/blogs/neck.jpg')}
                        className="w-full h-70"
                        resizeMode="cover"
                    />
                </View>

                <View className='px-4'>
                    <AppText variant='bold' className='w-full text-2xl mt-8'>
                        Introduction
                    </AppText>
                    <AppText variant='regular' className='w-full text-lg sm:text-lg mt-5 blogDetails-module__AGfGGW__blogHtml'>
                        Pain that begins in the neck and radiates down the arm can be both uncomfortable and concerning. This type of pain is often associated with a condition known as {''}
                        <AppText variant='bold' className='w-full text-lg mt-8 '>
                            cervical radiculopathy
                        </AppText>
                        , which occurs when a nerve in the neck becomes compressed or irritated.
                    </AppText>
                    <AppText variant='regular' className='mt-5 text-lg'>
                        Unlike simple neck pain, cervical radiculopathy can cause symptoms that extend beyond the neck, including tingling, numbness, or weakness in the shoulders, arms, and hands. These symptoms can interfere with daily activities such as typing, lifting objects, or even holding a phone.
                    </AppText>

                    <AppText variant='regular' className='mt-5 text-lg mb-10'>
                        With early diagnosis, proper rehabilitation, posture correction, and the use of supportive orthopaedic aids, most individuals can manage cervical radiculopathy effectively without surgical intervention.
                    </AppText>

                    <AppText className='text-xl mb-10' style={{ fontStyle: "italic" }}>
                        Blog Date:{'  '}
                        <AppText
                            variant="bold"
                            className="text-xl mb-10 ml-2"
                            style={{ fontStyle: "italic", fontWeight: 'bold' }}
                        >
                            21 Jan, 2026
                        </AppText>
                    </AppText>

                </View>


                {/* About Us */}
                <FooterCard />



            </ScrollView>







        </View>
    )
}