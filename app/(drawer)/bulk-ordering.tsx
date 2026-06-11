import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import AppText from 'components/AppText';
import AuthHeader from 'components/AuthHeader';
import BulkFeatureBadge from 'components/BulkBadge';
import FooterCard from 'components/FooterCard';
import ProductAccordion from 'components/ProductAccordion';
import ResponseCard from 'components/ResponseCard';
import StatsCard from 'components/StatsCard';
import StepCard from 'components/StepCard';
import TestimonialCard from 'components/TestimonialCard';
import React from 'react';
import { FlatList, Image, ScrollView, TouchableOpacity, View } from 'react-native';

export default function BulkOrdering() {
  const DATA = [
    {
      id: '1',
      title: '24-Hour Response',
      description:
        'Our B2B team responds to every inquiry within one business day.',
    },
    {
      id: '2',
      title: 'Custom Branding',
      description:
        'Personalized packaging and white labeling options available.',
    },
    {
      id: '3',
      title: 'Bulk Pricing',
      description:
        'Special discounted rates for large quantity orders.',
    },
    {
      id: '4',
      title: 'Dedicated Support',
      description:
        'A dedicated account manager for smooth order processing.',
    },
  ];

  const HowItWorkData = [
    {
      id: '1',
      step: '01',
      title: 'Submit Inquiry',
      description:
        'Fill out the form with your requirements, category, and volume expectations.',
    },
    {
      id: '2',
      step: '02',
      title: 'Get Quote',
      description:
        'Our team reviews your needs and sends a customized quotation.',
    },
    {
      id: '3',
      step: '03',
      title: 'Approve Order',
      description:
        'Confirm pricing, branding details, and delivery preferences.',
    },
    {
      id: '4',
      step: '04',
      title: 'Receive Delivery',
      description:
        'Your products are packed and shipped directly to your location.',
    },
  ];

  const testimonials = [
    {
      id: 1,
      title: "Significant difference in recovery",
      description:
        "p+care orthopedic supports have made a significant difference in my recovery. The quality and comfort are unmatched. I highly recommend their products!",
      name: "Mr. Rahul Mahant (Cuttack)",
      rating: 5,
    },
    {
      id: 2,
      title: "Very comfortable product",
      description:
        "The support is excellent and helped me in pain relief. Highly recommended for daily use.",
      name: "Mrs. Anita Sharma (Delhi)",
      rating: 5,
    },
    {
      id: 3,
      title: "Best quality supports",
      description:
        "I have tried many brands but p+care is the most comfortable and durable.",
      name: "Mr. Raj Mehta (Ahmedabad)",
      rating: 4,
    },
    {
      id: 1,
      title: "Significant difference in recovery",
      description:
        "p+care orthopedic supports have made a significant difference in my recovery. The quality and comfort are unmatched. I highly recommend their products!",
      name: "Mr. Rahul Mahant (Cuttack)",
      rating: 5,
    },
    {
      id: 2,
      title: "Very comfortable product",
      description:
        "The support is excellent and helped me in pain relief. Highly recommended for daily use.",
      name: "Mrs. Anita Sharma (Delhi)",
      rating: 5,
    },
    {
      id: 3,
      title: "Best quality supports",
      description:
        "I have tried many brands but p+care is the most comfortable and durable.",
      name: "Mr. Raj Mehta (Ahmedabad)",
      rating: 4,
    },
  ];

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

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        {/* Bulk Order */}
        <View className='bg-[#0d1f3c] py-10'>
          <View className="mx-4 mt-12 self-start rounded-full bg-[#0e8a7a]/15 border border-[#0e8a7a]/30 px-4 py-1.5">
            <AppText variant="semiBold" className="text-[#13b09c]">
              ⚕ Business & Institutional Solutions
            </AppText>
          </View>

          <View className="mx-4 mt-8 px-4">

            <AppText variant="bold" className="text-white text-[38px] leading-[44px]">
              Bulk Orders &{'\n'}
              <AppText variant="bold" className="text-[#13b09c] text-[40px] leading-[44px]">
                White Labeling
              </AppText>
              {'\n'}
              {'for\u00A0Professionals'}
            </AppText>

            <AppText variant='regular' className='mt-5 text-white/60 leading-relaxed max-w-lg'>
              Partner with p+care for volume pricing, custom branding, and dedicated support — trusted by clinics, hospitals, sports facilities, and retailers across India.
            </AppText>
          </View>

          <View className="flex-row gap-3 mx-4 mt-10 px-4">
            <TouchableOpacity
              activeOpacity={0.8}
              className="flex-[6] h-14 bg-[#13B09C] rounded-2xl flex-row items-center justify-center"
            >
              <AppText
                variant="semiBold"
                className="text-white text-base mr-2"
              >
                Request a Quote
              </AppText>

              <Ionicons
                name="arrow-forward"
                size={20}
                color="#FFFFFF"
              />
            </TouchableOpacity>

            {/* 40% */}
            <TouchableOpacity
              activeOpacity={0.8}
              className="flex-[4] h-14 rounded-2xl border border-white/20 items-center justify-center"
            >
              <AppText
                variant="semiBold"
                className="text-white text-base"
              >
                How It Works
              </AppText>
            </TouchableOpacity>
          </View>

          <View className="flex-row flex-wrap gap-3 mx-4 mt-12 px-4">
            <BulkFeatureBadge title="MOQ from 50 units" />
            <BulkFeatureBadge title="Custom Branding Available" />
            <BulkFeatureBadge title="Fast Production & Delivery" />
          </View>

        </View>

        {/* Counters */}
        <View className="mx-4 mt-8 gap-4">
          <StatsCard count={500} title="Business Partners" suffix="+" />
          <StatsCard count={40} title="Hospitals Served" suffix="%" />
          <StatsCard count={50000} title="Orders Delivered" suffix="+" />
          <StatsCard count={24} title="Cities Covered" suffix="H" />
        </View>

        {/* Request a Custom Quote */}
        <View className='mx-4 mt-10 px-4'>
          <AppText
            variant="semiBold"
            className="tracking-[0.14em] uppercase font-semibold text-[#0e8a7a] mb-3"
          >
            Start Today
          </AppText>
          <AuthHeader
            title='Request a Custom Quote'
            subtitle='Our B2B team will get back to you within 24 hours with a tailored proposal.'
          />
          <View className='my-8'>
            <FlatList
              data={DATA}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <View className="h-6" />}
              renderItem={({ item }) => (
                <ResponseCard
                  title={item.title}
                  description={item.description}
                />
              )}
            />
          </View>

        </View>

        {/* Contact */}
        <View className='mx-8 rounded-2xl bg-[#0d1f3c] py-5 mb-12'>
          <AppText variant="semiBold" className="px-5 text-white/50 text-xs mb-3 uppercase tracking-widest">
            Contact us directly
          </AppText>
          <View className='flex-row mx-5'>
            <MaterialIcons name="email" size={18} color={'#13b09c'} className='mt-1' />

            <AppText variant="semiBold" className="text-[#13b09c] text-base ml-1.5">
              sales@pcareall.com
            </AppText>
          </View>

          <View className='flex-row mx-5 mt-2'>
            <MaterialIcons name="phone" size={18} color={'#13b09c'} className='mt-1' />

            <AppText variant="semiBold" className="text-[#13b09c] text-base ml-1.5 mt-1">
              +91847254 70165
            </AppText>
          </View>

        </View>

        {/* Company Details */}

        {/* How it Works */}
        <View className=" bg-[#081F4D] px-6 py-10">
          <AppText className='text-xs tracking-[0.14em] uppercase font-semibold text-[#13b09c] mb-3'>
            Simple & Transparent
          </AppText>
          <AuthHeader
            title='How It Works'
            subtitle='From first inquiry to final delivery — our process is designed to be frictionless.'
            titleColor='text-white'
          />
          <FlatList
            data={HowItWorkData}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <></>}
            renderItem={({ item }) => (
              <StepCard
                step={item.step}
                title={item.title}
                description={item.description}
              />
            )}
          />

        </View>

        {/* Trusted Partners */}
        <View className='mx-4 mt-10 px-4'>
          <AppText variant='semiBold' className='text-xs tracking-[0.14em] uppercase text-[#0e8a7a] mb-3'>
            Trusted Partners
          </AppText>

          <AppText variant='bold' className='font-display text-2xl text-[#0d1f3c] leading-tight'>
            What Our Partners Say
          </AppText>

          <View className='mt-2 mb-10'>
            <FlatList
              data={testimonials}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <TestimonialCard item={item} showAuthor={true} />}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* FAQ's */}
        <View className='mx-4 mt-10 px-2'>
          <AppText variant='semiBold' className='text-xs tracking-[0.14em] uppercase text-center text-[#0e8a7a] mb-3'>
            Common Questions
          </AppText>
          <AppText variant='bold' className='text-3xl text-center'>
            Frequently Asked
          </AppText>
          <View className='mb-6'>
            <ProductAccordion isFaq />
          </View>
        </View>


        {/* About Us */}
        <FooterCard />

      </ScrollView>

    </View>
  );
}