import { StyleSheet, View, Text, Pressable } from 'react-native'
import React, { ReactElement } from 'react'

interface BillTypeSelectorProps {
  icon: ReactElement
  title: string
  onPress?: () => void
  color: string
  opacity: number
}
const BillTypeSelector = ({ title, icon, color, onPress, opacity }: BillTypeSelectorProps) => {
  return (
    <Pressable style={[styles.billTypeSelector, { borderColor: color, opacity }]} onPress={onPress}>
      {icon}
      <Text style={[styles.billTypeSelectorTitle, { color }]}>
        {title}
      </Text>
    </Pressable>
  )
}

export default BillTypeSelector

const styles = StyleSheet.create({
  billTypeSelector: {
    flexBasis: '48%',
    borderRadius: 15,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    maxWidth: 76,
  },
  billTypeSelectorTitle: {
    fontSize: 10,
    marginTop: 5,
    fontFamily: "PoppinsBold"
  }
})