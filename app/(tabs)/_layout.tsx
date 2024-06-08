import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import HomeSvgIcon from '@/components/svg/HomeSvgIcon';
import PortfolioTabIcon from '@/components/svg/PortfolioTabIcon';
import ContributionTabIcon from '@/components/svg/ContributionTabIcon';
import LoanFriendsTabIcon from '@/components/svg/LoanFriendsTabIcon';
import MoreTabIcon from '@/components/svg/MoreTabIcon';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: {
          height: 90,
          paddingBottom: 20,
          paddingTop: 15
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <HomeSvgIcon color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: 'Portfolio',
          tabBarIcon: ({ color }) => (
            <PortfolioTabIcon color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="contributions"
        options={{
          title: 'Contribution',
          tabBarIcon: ({ color, focused }) => (
            <ContributionTabIcon color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="loanfriends"
        options={{
          title: 'LoanFriends',
          tabBarIcon: ({ color, focused }) => (
            <LoanFriendsTabIcon color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ color, focused }) => (
            <MoreTabIcon color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
