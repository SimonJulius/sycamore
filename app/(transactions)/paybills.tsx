import { StyleSheet, View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import ArrowBackIcon from '@/components/svg/ArrowBackIcon'
import { useNavigation } from 'expo-router'
import DottedDivider from '@/components/DottedDivider'
import BillTypeSelector from '@/components/BillTypeSelector'
import AirtimeIcon from '@/components/svg/AirtimeIcon'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import Animated from 'react-native-reanimated'
import DataIcon from '@/components/svg/DataIcon'
import ElecricBillIcon from '@/components/svg/ElectricBillIcon'
import CableBillIcon from '@/components/svg/CableBillIcon'

const paybills = () => {
    const navigation = useNavigation()
    const [billSelected, setBillSelected] = useState('electric')
    const handleBillSelection = (bill: 'electric' | 'airtime' | 'cable' | 'data') => {
        setBillSelected(bill)
    }
    return (
        <ParallaxScrollView>
            <Pressable style={styles.paymentHeader} onPress={() => navigation.goBack()}>
                <ArrowBackIcon />
                <Text style={styles.paymentHeaderTitle}>Pay Bills</Text>
            </Pressable>
            <View style={styles.selectBillsView}>
                <DottedDivider />
                <Text style={styles.selectBillsTitle}>Select a Bill Type</Text>
                <Animated.View style={styles.selectBillComponentsView}>
                    <BillTypeSelector icon={<AirtimeIcon />} title='Airtime' color={'#2166F3'} opacity={billSelected === 'airtime' ? 1 : 0.4} onPress={() => handleBillSelection('airtime')} />
                    <BillTypeSelector icon={<DataIcon />} title='Data' color={'#6D51E4'} opacity={billSelected === 'data' ? 1 : 0.4} onPress={() => handleBillSelection('data')} />
                    <BillTypeSelector icon={<ElecricBillIcon />} title='Electricity' color={'#EB0086'} opacity={billSelected === 'electric' ? 1 : 0.4} onPress={() => handleBillSelection('electric')} />
                    <BillTypeSelector icon={<CableBillIcon />} title='Cable' color={'#FF7600'} opacity={billSelected === 'cable' ? 1 : 0.4} onPress={() => handleBillSelection('cable')} />
                </Animated.View>
                <DottedDivider />
            </View>
        </ParallaxScrollView>
    )
}

export default paybills

const styles = StyleSheet.create({
    paymentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 98,
        gap: 10,
        paddingHorizontal: 20
    },
    paymentHeaderTitle: {
        fontSize: 18,
        fontFamily: 'PoppinsBold',
    },
    selectBillsView: {
        paddingVertical: 10,
    },
    selectBillsTitle: {
        fontSize: 12,
        fontFamily: 'PoppinsMedium',
        marginTop: 5,
        paddingHorizontal: 20
    },
    selectBillComponentsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        marginVertical: 15,
        paddingHorizontal: 20
    }
})