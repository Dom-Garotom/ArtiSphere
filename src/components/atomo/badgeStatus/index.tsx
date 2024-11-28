import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

type Props = {
    text: string
    value?: number
    /** 
     * Nome do ícone do FontAwesome. 
     * Consulte a lista de ícones em: https://oblador.github.io/react-native-vector-icons/
     */
    iconName: string
    iconNameSize?: number
    iconNameColor?: string
}

export default function BadgeStatus({ iconName, text, value, iconNameSize = 18, iconNameColor = "#000" }: Props) {
    return (
        <TouchableOpacity style={styles.status}>
            <Icon name={iconName} size={iconNameSize} color={iconNameColor} style={{ width: 17 }} />
            <Text style={styles.status_text}>{value ? value : ""}{value && " - "}{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    status: {
        alignSelf:'flex-start',
        padding: 6,
        borderRadius: 4,
        gap: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    status_text: {
        fontWeight: '500',
        fontSize: 16
    },
})