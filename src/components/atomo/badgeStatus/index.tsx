import colors from '@/src/styles/color'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

type Props = TouchableOpacityProps & {
    text?: string
    value?: number
    /** 
     * Nome do ícone do FontAwesome. 
     * Consulte a lista de ícones em: https://oblador.github.io/react-native-vector-icons/
     */
    iconName: string
    iconNameSize?: number
    iconNameColor?: string
}

export default function BadgeStatus({ iconName, text, value = undefined, iconNameSize = 16, iconNameColor = colors.textSub, ...props }: Props) {
    return (
        <TouchableOpacity style={styles.status} {...props}>
            <Icon name={iconName} size={iconNameSize} color={iconNameColor} style={{ width: 17 }} />
            {text &&
                <Text style={styles.status_text}>{text}</Text>
            }

            {value &&
                <Text style={styles.status_text}>{value}</Text>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    status: {
        height: 40,
        padding: 8,
        gap: 4,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: colors.border,
    },

    status_text: {
        fontWeight: '500',
        fontSize: 18,
        color: colors.textSub
    },
})