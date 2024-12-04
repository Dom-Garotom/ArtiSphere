import colors from '@/src/styles/color'
import React from 'react'
import { StyleSheet, Text, TextInputProps, View } from 'react-native'
import InputSystem from '../inputSystem'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

type Props = TextInputProps & {
  messageError?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined,
  label: string,
}

export default function InputDefault({ messageError, label, ...props }: Props) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <InputSystem {...props} />
      <Text style={styles.inputError}>{messageError && `${messageError}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 100,
    gap: 5,
  },

  inputError: {
    fontSize: 12,
    color: colors.error,
  },

  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
})