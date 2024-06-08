import { StyleSheet, ImageBackground, View, Text, Image, Pressable, ScrollView } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import NotificationIcon from '@/components/svg/NotificationIcon';
import React from 'react';
import NairaIcon1 from '@/components/svg/NairaIcon1';
import EyeClosedIcon from '@/components/svg/EyesClosedIcon';
import CopyIcon from '@/components/svg/CopyIcon';
import AddIcon from '@/components/svg/AddIcon';
import SendMoneyIcon from '@/components/svg/SendMoneyIcon';
import PayBillIcon from '@/components/svg/PayBillIcon';
import ArroRightIcon from '@/components/svg/ArrowRightIcon';
import MoneyBagIcon from '@/components/svg/MoneyBagIcon';
import QuickAction from '@/components/QuickAction';
import InvestmentBarsIcon from '@/components/svg/InvestmentBarsIcon';
import LoanFriendIcon from '@/components/svg/LoanFriendIcon';
import ContributionEleIcon from '@/components/svg/ContributionEleIcon';
import CompleteAccountUpgradeIcon from '@/components/svg/CompleteAccountUpgradeIcon';
import CircularProgress from 'react-native-circular-progress-indicator';
import Animated from 'react-native-reanimated';
import { useRouter } from "expo-router";


export default function HomeScreen() {
  const router = useRouter()
  return (
    <ParallaxScrollView
      headerImage={
        <ImageBackground source={require('@/assets/images/dashboard-image.png')} style={styles.boardHero}>
          <View style={styles.salute}>
            <View style={styles.saluteProfile}>
              <Image source={require("@/assets/images/UserProfileIcon.png")} alt='user profile image' />
              <Text style={styles.boardHeroTextColor}>Hello, User</Text>
            </View>
            <View style={{ width: 24 }}>
              <NotificationIcon style={{ width: 24 }} />
            </View>
          </View>
          <View style={styles.wallet}>
            <View>
              <Text style={styles.boardHeroTextColor}>Wallet  Balance</Text>
              <View style={styles.walletAmount}>
                <NairaIcon1 />
                <Text style={[styles.boardHeroTextColor, styles.walletAmountNumber]}>53,754.00</Text>
                <EyeClosedIcon style={styles.walletEye} />
              </View>
              <View style={styles.walletAccountNoView}>
                <Text style={styles.bankName}>
                  Wema Bank:
                </Text>
                <Text style={styles.boardHeroTextColor}>
                  61247902547
                </Text>
                <CopyIcon style={styles.walletCopyIcon} />
              </View>
            </View>
            <Pressable style={styles.walletViewHistroryCTA}>
              <Text style={[styles.boardHeroTextColor, styles.viewHistory]}>
                View History
              </Text>
              <ArroRightIcon />
            </Pressable>
          </View>
          <View style={styles.boradHeroCTAView}>
            <Pressable style={styles.boradHeroCTA}>
              <AddIcon />
              <Text style={[styles.boardHeroTextColor, styles.boradHeroCTAText]}>Fund Wallet</Text>
            </Pressable>
            <Pressable style={styles.boradHeroCTA}>
              <SendMoneyIcon />
              <Text style={[styles.boardHeroTextColor, styles.boradHeroCTAText]}>Send Money</Text>
            </Pressable>
            <Pressable style={styles.boradHeroCTA} onPress={() => router.navigate('(transactions)/paybills')}>
              <PayBillIcon />
              <Text style={[styles.boardHeroTextColor, styles.boradHeroCTAText]}>Pay Bills</Text>
            </Pressable>
          </View>
        </ImageBackground>
      }>
      <View style={styles.boardDetails}>
        <View>
          <Text style={styles.boardDetailsTodoListTitle}>
            To-Do List
          </Text>
          <Animated.ScrollView horizontal style={styles.todoLists} >
            <View style={styles.todoList}>
              <CompleteAccountUpgradeIcon />
              <View style={styles.todoListContentView}>
                <Text style={styles.todoListContentTitle}>Complete Account Upgrade</Text>
                <Text style={styles.todoListContentText}>Verify your identity by providing more details to upgrade your account</Text>
                <Text style={styles.todoListFooterText}>Tap to view pending upgrades</Text>
              </View>
              <CircularProgress
                value={25}
                radius={15}
                duration={2000}
                maxValue={100}
                progressValueColor={'#1E2229'}
                inActiveStrokeColor={'#E9E9EB'}
                activeStrokeColor={'#FF7600'}
                titleStyle={{ fontFamily: 'PoppinsBold' }}
                inActiveStrokeWidth={5}
                activeStrokeWidth={5}
              />
            </View>
            <View style={styles.todoList}>
              <CompleteAccountUpgradeIcon />
              <View style={styles.todoListContentView}>
                <Text style={styles.todoListContentTitle}>Complete Account Upgrade</Text>
                <Text style={styles.todoListContentText}>Verify your identity by providing more details to upgrade your account</Text>
                <Text style={styles.todoListFooterText}>Tap to view pending upgrades</Text>
              </View>

            </View>
          </Animated.ScrollView>
        </View>

        <View style={styles.boardDetaileBannerView}>
          <Text style={styles.boardDetailsTitle}>
            News & Offer
          </Text>
          <Image style={styles.boardDetailBannerImage} source={require("@/assets/images/banner.png")} alt='advert banner' />
        </View>
        <View style={styles.boardDetaileBannerView}>
          <Text style={styles.boardDetailsTitle}>
            Quick Actions
          </Text>
          <View style={styles.quickActions}>
            <QuickAction
              icon={
                <MoneyBagIcon />
              }
              title='Loans'
              content='Apply for one of our low-interest loans to cater for your financial needs'
              backgroundColor='#DEF6E8'
            />
            <QuickAction
              icon={
                <InvestmentBarsIcon />
              }
              title='Investments'
              content='Earn while you sleep. Enjoy up to 16.5% returns per annum on your investments.'
              backgroundColor='#E0DEF6'
            />
            <QuickAction
              icon={
                <LoanFriendIcon />
              }
              title='Loan Friends'
              content='Lend and borrow money from family and friends within and outside Sycamore with ease.  '
              backgroundColor='#F9F1DC'
            />
            <QuickAction
              icon={
                <ContributionEleIcon />
              }
              title='Target Contribution'
              content='Contribute towards hitting your financial goal and earn up to 20% interest per annum while at it.'
              backgroundColor='#DEF6E8'
            />
          </View>
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  boardHero: {
    height: 334,
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 30,
    borderWidth: 1,
  },
  boardHeroTextColor: {
    color: '#fff',
    fontSize: 8,
  },
  boradHeroCTA: {
    backgroundColor: '#090C10',
    borderColor: '#1F2C46',
    borderRadius: 14,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '30%'
  },
  boradHeroCTAText: {
    marginTop: 5
  },
  boradHeroCTAView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  viewHistory: {
    fontSize: 10,
  },
  salute: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saluteProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  wallet: {
    borderWidth: 0.5,
    borderColor: '#1F2C46',
    borderRadius: 14,
    paddingVertical: 9.25,
    paddingLeft: 9.25,
    marginTop: 20,
    backgroundColor: '#090C10',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  walletViewHistroryCTA: {
    backgroundColor: '#1F2C46',
    padding: 7.5,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    maxHeight: 30,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 1,
  },
  walletAmount: {
    flexDirection: "row",
    marginTop: 5,
    gap: 5,
    alignItems: 'center'
  },
  walletAmountNumber: {
    fontFamily: 'PoppinsMedium',
    fontSize: 18
  },
  walletAccountNoView: {
    flexDirection: "row",
    gap: 5,
    marginTop: 8,
    alignItems: 'center'
  },
  walletEye: {
    marginLeft: 8,
  },
  bankName: {
    color: '#A9A9AC'
  },
  walletCopyIcon: {
    alignSelf: 'flex-end',
    marginLeft: 3,
    marginTop: 10
  },
  boardDetails: {
    flex: 1
  },
  boardDetailsTitle: {
    fontSize: 11,
    fontFamily: 'poppinsMedium'
  },
  boardDetailsTodoListTitle: {
    fontSize: 11,
    fontFamily: 'poppinsMedium',
    marginLeft: 31.5,
    marginTop: 15,
  },
  boardDetaileBannerView: {
    flex: 1,
    paddingHorizontal: 31.5,
    marginTop: 20,
  },
  boardDetailBannerImage: {
    marginTop: 10,
    width: '100%',
    borderRadius: 15,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 11
  },
  todoLists: {
    paddingLeft: 31.5,
    marginTop: 15,
    flexDirection: 'row',
    paddingBottom: 10,
    paddingRight: 40
  },
  todoList: {
    borderRadius: 4,
    marginTop: 10,
    borderColor: '#FFE4CC',
    borderWidth: 0.5,
    borderLeftColor: '#FF7600',
    borderLeftWidth: 6,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFE4CC4D',
    flexDirection: 'row',
    gap: 20,
    maxWidth: 390,
    marginRight: 10
  },
  todoListContentView: {
    maxWidth: 192
  },
  todoListContentTitle: {
    fontSize: 9,
    fontFamily: 'poppinsBold',
    marginBottom: 4
  },
  todoListContentText: {
    fontSize: 8,
    marginBottom: 4,
  },
  todoListFooterText: {
    fontSize: 8,
    color: '#FF7600',
    fontFamily: 'PoppinsMedium'
  }
});
