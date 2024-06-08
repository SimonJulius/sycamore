import { StyleSheet, View, Text } from 'react-native'
import React, { ReactElement } from 'react'

interface QuickActionProps {
  icon: ReactElement
  title: string
  content: string
  backgroundColor: string
}
const QuickAction = ({ title, icon, content, backgroundColor }: QuickActionProps) => {
  return (
    <View style={[styles.quickAction, { backgroundColor }]}>
      {icon}
      <Text style={styles.quickActionTitle}>
        {title}
      </Text>
      <Text style={styles.quickActionContentText}>
        {content}
      </Text>
    </View>
  )
}

export default QuickAction

const styles = StyleSheet.create({
  quickAction: {
    flexBasis: '48%',
    borderRadius: 15,
    padding: 19.6,
  },
  quickActionTitle: {
    fontSize: 8.75,
    fontWeight: 600,
    marginTop: 15,
    marginBottom: 5,
  },
  quickActionContentText: {
    fontSize: 7,
  }
})